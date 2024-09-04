import { useEffect, useState } from 'react';
import { Remark } from 'react-remark';
import remarkGemoji from 'remark-gemoji';
import rehypeSlug from 'rehype-slug';
import style from "../../../styles/PluginPage.module.scss"
import { DefaultPage, ScrollTop } from '../../components';
import convertUrlToRaw from '../../../utils/convertUrlToRaw';
import Link from 'next/link';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/vs2015.css";
import { getPluginByPath } from '../../../lib'


const PluginPage = ({ path }) => {

  const [content, setContent] = useState('');

  useEffect(() => {

    //temporario para redirecionar corretamente os plugins com url quebrados
    const plugin = getPluginByPath(path.toLowerCase().replaceAll(" ", "-"))

    const rawUrl = convertUrlToRaw(plugin.url);
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
