import React from 'react'
import { ContactBar, DefaultPage } from '../../components'
import PluginCard from './pluginCard';
import style from '../../../styles/Plugins.module.scss';

const Data = [
{
  id: 0,
  image: '/assets/plugins/github.png',
  title: 'Github workflows',
  tags: ['CI-CD', 'Github'],
  desc: 'The Github Workflows plugin provides an alternative for manually triggering GitHub workflows from within your Backstage component.'
},
{
  id: 1,
  image: '/assets/plugins/gitlab.png',
  title: 'Gitlab Pipelines',
  tags: ['CI-CD', 'GitlabCi'],
  desc: 'The Gitlab pipelines plugin integrates GitlabCi with its backstage component in a simple way.'
},
]

const Plugins = () => {
  return (
    <DefaultPage
      titleBar="enable"
      title="Plugins"
      subtitle="Descriptions, guides and installation instructions for Backstage plugins."
    >
      <section className={style.wrapper}>
        {Data.map(p => <PluginCard key={p.id} {...p} />)}
      </section>
      <ContactBar />
    </DefaultPage>
  )
}

export default Plugins