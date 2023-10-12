import React from "react";
import { ContactBar, DefaultPage } from '../../components'
import PluginCard from './pluginCard';
import style from '../../../styles/Plugins.module.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import PluginsData from "../../../data/plugins/plugins.json";


const Plugins = () => {

  let items = [];

  i18n.language == 'pt' ? items = PluginsData.pt : items = PluginsData.en;
  const { t } = useTranslation();

  return (
    <DefaultPage
      titleBar="enable"
      title={t("plugin-page-title")}
      subtitle={t("plugin-page-subtitle")}
    >
      <section className={style.wrapper}>
        {items.map(p => 
          <PluginCard 
            key={p.id} 
            {...p} 
            buttonLabel={t("plugin-page-buttonLabel")}
            />
          )}
      </section>
      <ContactBar />
    </DefaultPage>
  )
}

export default Plugins