'use client';

import React from 'react';
import { Remark } from 'react-remark';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGemoji from 'remark-gemoji';
import { ScrollTop } from '@/components';
import convertUrlToRaw from '@/utils/helpers/convertUrlToRaw';
import style from './PluginContentStyles.module.scss';
import { PluginContentProps } from './types';

const LinkTag = ({ href, children }: { href: string; children: any }) => {
  const label = children.join(' ');
  return <a href={href}>{label}</a>;
};

export const PluginContent: React.FC<PluginContentProps> = ({ pluginData }) => {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    const rawUrl = convertUrlToRaw(pluginData!.url);
    if (rawUrl) {
      fetch(rawUrl)
        .then(response => response.text())
        .then(data => {
          setContent(data);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error('Error:', error);
        });
    }
  }, [pluginData]);

  return (
    <>
      <section className={style.wrapper}>
        <Remark
          remarkPlugins={[remarkGemoji] as any}
          remarkToRehypeOptions={{ allowDangerousHtml: true }}
          rehypePlugins={[rehypeSlug, rehypeHighlight] as any}
          rehypeReactOptions={{
            components: {
              a: (props: any) => <LinkTag {...props} />,
            },
          }}
        >
          {content}
        </Remark>
      </section>
      <ScrollTop />
    </>
  );
};
