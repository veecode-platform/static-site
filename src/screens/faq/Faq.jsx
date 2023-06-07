import React from 'react'
import { ContactBar, DefaultPage } from '../../components'
import Accordion from '../contactUs/accordion'
import { useTranslation } from 'react-i18next'

const Faq = () => {

  const { t } = useTranslation();

  return (
    <DefaultPage
      titleBar='enable'
      title="FAQ"
      subtitle={t("faq-title")}
      showOptions
    >
      <Accordion />
      <ContactBar />
    </DefaultPage>
  )
}

export default Faq