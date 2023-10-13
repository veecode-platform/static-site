'use client'

import { useEffect, useState } from 'react';
import { Remark } from 'react-remark';
import remarkGemoji from 'remark-gemoji';
import rehypeSlug from 'rehype-slug';
import style from "../../../styles/PluginPage.module.scss"
import { DefaultPage, ScrollTop } from '../../components';
import convertUrlToRaw from '../../../utils/convertUrlToRaw';
import PluginsData from '../../../data/plugins/plugins.json';
import Link from 'next/link';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


const PluginPage = ({ title }) => {

  const [titleData, setTitleData] = useState(title);
  const [content, setContent] = useState('');
  const plugins = PluginsData.en;

  useEffect(() => {
    if (title) {
      localStorage.setItem('pageTitle', title);
      setTitleData(title)
    }
    else {
      const storedTitle = localStorage.getItem('pageTitle');
      if (storedTitle) {
        setTitleData(storedTitle)
      }
    }

    plugins.filter(p => {
      if (p.title == titleData) {
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
  }, [title]);


  const CodeComponent = ({ className, children }) => {
    let language = className ? className.replace(/^language-/, '') : null;

    if (!language) return <code className={style.marked}>{children}</code>;

    if (typeof window !== 'undefined') {

      return (
        <SyntaxHighlighter
          language={language}
          style={vs2015}
          className={style.codebox}
        >
          {children}
        </SyntaxHighlighter>
      );
    }

    return null;
  };

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
    <DefaultPage notTranslate>
      <section className={style.wrapper}>
        <Remark
          remarkPlugins={[remarkGemoji]}
          remarkToRehypeOptions={{ allowDangerousHtml: true }}
          rehypePlugins={[rehypeSlug]}
          rehypeReactOptions={{
            components: {
              code: (props) => <CodeComponent {...props} />,
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