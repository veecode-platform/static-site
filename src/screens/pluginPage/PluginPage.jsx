import { useEffect, useState } from 'react';
import { Remark } from 'react-remark';
import remarkGemoji from 'remark-gemoji';
import rehypeSlug from 'rehype-slug';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import style from "../../../styles/PluginPage.module.scss"
import { DefaultPage, ScrollTop } from '../../components';
import convertUrlToRaw from '../../../utils/convertUrlToRaw';
import PluginsData from '../../../data/plugins/plugins.json';

const PluginPage = ({ title }) => {

    const [content, setContent] = useState('');
    const plugins = PluginsData.en;

    useEffect(() => {
        plugins.filter(p => {
            if (p.title == title) {
             const rawUrl = convertUrlToRaw(p.url);
                if (rawUrl) {
                    fetch(rawUrl)
                        .then((response) => response.text())
                        .then((data) => {
                            setContent(data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                         });
                }
            }
        })
    }, []);

    const CodeBlock = ({ className, children }) => {
        let language = className ? className.replace(/^language-/, '') : null;
    
        if (!language) return <code className={style.marked}>{children}</code>;
    
        if (typeof window !== 'undefined') {

          const { Light } = require('react-syntax-highlighter');
          const { vs2015 } = require('react-syntax-highlighter/dist/esm/styles/hljs');
    
          return (
            <Light language={language} style={vs2015} className={style.codebox}>
              {children}
            </Light>
          );
        }
    
        return null; 
      };

    return (
        <DefaultPage notTranslate>
            <section className={style.wrapper}>
                <Remark
                    remarkPlugins={[remarkGemoji]}
                    remarkToRehypeOptions={{ allowDangerousHtml: true }}
                    rehypePlugins={[rehypeSlug, rehypeAutoLinkHeadings]}
                    rehypeReactOptions={{
                        components: {
                            code: (props) => <CodeBlock {...props} />,
                        },
                    }}
                >
                    {content}
                </Remark>
            </section>
            <ScrollTop />
        </DefaultPage>
    )
}

export default PluginPage