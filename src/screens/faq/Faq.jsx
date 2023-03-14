import React from 'react'
import { ContactBar, DefaultPage } from '../../components'
import Accordion from './accordion'

const Faq = () => {

  return (
    <DefaultPage
      titleBar='enable'
      title="FAQ"
      subtitle="Frequently Asked Questions"
      showOptions
    >
      <Accordion />
      <ContactBar />
    </DefaultPage>
  )
}

export default Faq