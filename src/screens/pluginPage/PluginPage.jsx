import { useEffect, useState } from 'react';
import { Remark } from 'react-remark';
import remarkGemoji from 'remark-gemoji';
import rehypeSlug from 'rehype-slug';
import style from "../../../styles/PluginPage.module.scss"
import { DefaultPage, ScrollTop } from '../../components';
import convertUrlToRaw from '../../../utils/convertUrlToRaw';
import PluginsData from '../../../data/plugins/plugins.json';
import Link from 'next/link';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/vs2015.css";


const PluginPage = ({ path }) => {

  //const [patchData, setPatchData] = useState(patch);
  const [content, setContent] = useState('');
  const plugins = PluginsData.en;


  useEffect(() => {
    /*if (patch) {
      localStorage.setItem('pagePatch', patch);
      setPatchData(patch)
    }
    else {
      const storedPatch = localStorage.getItem('pagePatch');
      if (storedPatch) {
        setPatchData(storedPatch)
      }
    }*/

    plugins.filter(p => {
      if (p.path == path) {
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
  }, [path]);

  const LinkTag = ({ href, children }) => {

    const label = children.join(' ');

    return (
      <Link
        href={href}
      >
        <a
          target='_blank'
          className={style.link}>
          {label}
        </a>
      </Link>
    )
  }

  return (
    <DefaultPage 
      notTranslate
      backToUrl="/plugins"
      >
      <section className={style.wrapper}>
        <Remark
          remarkPlugins={[remarkGemoji]}
          remarkToRehypeOptions={{ allowDangerousHtml: true }}
          rehypePlugins={[rehypeSlug, rehypeHighlight]}
          rehypeReactOptions={{
            components: {
              a: (props) => <LinkTag {...props} />
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
