import React from 'react';
import { DefaultPage, ScrollTop } from '../../components';
import style from '../../../styles/HowItWork.module.scss';
import CardItem from './cardItem';

const Icon1 = "/assets/howitworks/icon1.png";
const Icon2 = "/assets/howitworks/icon2.png";
const Icon3 = "/assets/howitworks/icon3.png";
const Icon4 = "/assets/howitworks/icon4.png";
const Icon5 = "/assets/howitworks/icon5.png";
const Icon6 = "/assets/howitworks/icon6.png";
const Icon7 = "/assets/howitworks/icon7.png";
const Icon8 = "/assets/howitworks/icon8.png";
const Icon9 = "/assets/howitworks/icon9.png";

const HowItWorks = () => {
    return (
        <DefaultPage
            titleBar="enable"
            title="How It Works"
            subtitle="VeeCode Platform can help you get your API&apos;s infrastructure in minutes. Here&apos;s how it works."
        >
            <article className={style.content}>
                <CardItem
                    image={Icon1}
                    title="You&apos;re going cloud native but unsure how"
                    text1="You need to deliver solutions, not just apps. You&apos;ll have to learn how to deal and manage the cloud, and are expected to do it spending less money.
                    But there are infinite choices for each resource available: clusters, databases, load balancers, keys, the list goes on and on."
                    text2="We have automated most of this under VKPR - you can skip most of the learning curve and keep your focus on the fun parts. Our tools will take you there through automation,
                    IaC and GitOps."
                    />
                <CardItem
                    image={Icon2}
                    title="You have to do this API thing"
                    text1="So you are going to build (and manage) microservices and APIs, but there are so many moving parts and you are still struggling.
                    You just need to build, not dig through hundreds of cloud services with hundreds of settings where a small error may cost you a surprise bill."
                    text2="We can help you from the spec up to production. Our tools are opinionated and will reduce your choices to a reasonable few.
                    Try out safira-cli to create your code templates and generate ready-to-use pipelines, so that you can commit all your way from dev to production without added complexity.
                    Our proposed workflow removes so many problems - and we are always improving it for you."
                    />
                <CardItem
                    image={Icon3}
                    title="You have to learn infrastructure as code"
                    text1="You keep hearing the wonders of IaC but every tool is a whole new rabbit hole. Terraform, Docker, Kubernetes and many others,
                    not to mention so many scripts to glue them together - and too many choices as well."
                    text2="We are building IaC libraries for you, publishing them as automated pipelines so that any team member can create and recycle resources,
                    keeping them in sync with a desired configuration."
                    />
                <CardItem
                    image={Icon4}
                    title="A Kubernetes cluster is not enough"
                    text1="Taking things into production in a cloud native mindset requires much more than just a managed cluster.
                    We can help you define your architecture by bringing to your cluster the necessary components that will make them production ready.
                    Yes, you will need components for observability, an API gateway, load balancers, databases and security. And we will support all of them,
                    providing a self-service experience so that clusters are no big deal."
                    text2="What we want is for you not to take months to decide your IT architecture. You can do it today."
                    />
                <CardItem
                    image={Icon5}
                    title="You are not alone"
                    text1="We provide support for our code and tools - and they are yours to use forever, even if you are not a customer anymore.
                    We also provide best-effort support to the products we help you install, so that you can take advantage of their combined features and better
                    decide when or why to license them (if ever - they are all open source too)."
                    text2="It gets better. If our tools left you short of anything you can have a shot at asking us to improve them for free.
                    Yes, we are continually enhancing our toolset and we really need your feedback."
                    />
                <CardItem
                    image={Icon6}
                    title="Speed up your cloud provisioning"
                    text1="Currently the most successful services in the market have gone through their digital transition, and most of them have had difficulties with this process,
                    needing to hire consultants and expensive services to deal with this challenge. Now with VKPR your transition and use of cloud-native tools becomes simpler.
                    We built a command line interface dedicated to build kubernetes clusters in a fast, simple and automated way through IaC pipelines following the GitOps methodology.
                    Along with a helper tool that makes it easy to install and manage applications that are in the cloud-native world, without having any lock-in from use."
                    />
                <CardItem
                    image={Icon7}
                    title="Automate your API building"
                    text1="We know how expensive and time-consuming it is to build an API. To solve this problem, we built a command-line interface, Safira-CLI.
                    By using an open API file, along with a simple command, our CLI builds a complete API template in the most used Java frameworks on the market: SpringBoot and Quarkus.
                    All this in a fast and automated way. In addition, our solution allows customizations that bring robustness to the project, such as using Mockserver,
                    pipelining configurations and containerization by Docker and Kubernetes, as well as a high level of security with API gateway like Kong and authenticator like Okta."
                    />
                <CardItem
                    image={Icon8}
                    title="Centralize your Microservices management"
                    text1="The microservices architecture revolutionized the internet, and taking advantage of this innovation we created the DevPortal.
                    This tool is our platform that centralizes all your Specs and APIs, helping the user visualize more closely the services arranged in APIs. Thanks to its visual facilitation,
                    API tests are faster and of better visualization having a set of possibilities to act on our platform. Accelerate your microservices management and get closer
                    to the customer with faster feedback with DevPortal."
                    />
                <CardItem
                    image={Icon9}
                    title="Get expert support"
                    text1="Here is the icing on the cake. With the evolution of technology, every day there is a new and more powerful way to perform your service,
                    all the time there are new updates that change the whole format of the process, and all this is increasingly complex to follow and especially to implement.
                    Here comes our proposal: count on our support! In a simple and fast way, we can solve your doubts and help you bring the best options for your business.
                    Know more about our plans."
                    />
            </article>
            <ScrollTop/>
        </DefaultPage>
    )
}

export default HowItWorks