import React from 'react'
import { DefaultPage } from '../../components'
import Accordion from './accordion'

const Faq = () => {

  return (
    <DefaultPage
    titleBar='enable'
    title="FAQ"
    subtitle="Frequently Asked Questions"
    >
    <Accordion/>
    </DefaultPage>
  )
}

export default Faq