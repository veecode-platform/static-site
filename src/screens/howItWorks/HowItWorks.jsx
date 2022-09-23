import React from 'react';
import { DefaultPage, ScrollTop } from '../../components';
import style from '../../../styles/HowItWork.module.scss';

const HowItWorks = () => {
    return (
        <DefaultPage
            titleBar="enable"
            title="How It Works"
            subtitle="VeeCode Platform can help you get your API&apos;s infrastructure in minutes. Here&apos;s how it works."
        >
            <article className={style.content}>
                <h2>You&apos;re going cloud native but unsure how</h2>
                <p>You need to deliver solutions, not just apps. You&apos;ll have to learn how to deal and manage the cloud, and are expected to do it spending less money.
                    But there are infinite choices for each resource available: clusters, databases, load balancers, keys, the list goes on and on.</p>
                <p>We have automated most of this under VKPR - you can skip most of the learning curve and keep your focus on the fun parts. Our tools will take you there through automation,
                    IaC and GitOps.</p>

                <h2>You have to do this API thing</h2>
                <p>So you are going to build (and manage) microservices and APIs, but there are so many moving parts and you are still struggling.
                    You just need to build, not dig through hundreds of cloud services with hundreds of settings where a small error may cost you a surprise bill.</p>
                <p>We can help you from the spec up to production. Our tools are opinionated and will reduce your choices to a reasonable few.
                    Try out safira-cli to create your code templates and generate ready-to-use pipelines, so that you can commit all your way from dev to production without added complexity.
                    Our proposed workflow removes so many problems - and we are always improving it for you.</p>

                <h2>You have to learn infrastructure as code</h2>
                <p>You keep hearing the wonders of IaC but every tool is a whole new rabbit hole. Terraform, Docker, Kubernetes and many others,
                    not to mention so many scripts to glue them together - and too many choices as well.</p>
                <p>We are building IaC libraries for you, publishing them as automated pipelines so that any team member can create and recycle resources,
                    keeping them in sync with a desired configuration.</p>

                <h2>A Kubernetes cluster is not enough</h2>
                <p>Taking things into production in a cloud native mindset requires much more than just a managed cluster.
                    We can help you define your architecture by bringing to your cluster the necessary components that will make them production ready.
                    Yes, you will need components for observability, an API gateway, load balancers, databases and security. And we will support all of them,
                    providing a self-service experience so that clusters are no big deal.</p>
                <p>What we want is for you not to take months to decide your IT architecture. You can do it today.</p>

                <h2>You are not alone</h2>
                <p>We provide support for our code and tools - and they are yours to use forever, even if you are not a customer anymore.
                    We also provide best-effort support to the products we help you install, so that you can take advantage of their combined features and better
                    decide when or why to license them (if ever - they are all open source too).</p>
                <p>It gets better. If our tools left you short of anything you can have a shot at asking us to improve them for free.
                    Yes, we are continually enhancing our toolset and we really need your feedback.</p>

                <h2>Speed up your cloud provisioning</h2>
                <p>Currently the most successful services in the market have gone through their digital transition, and most of them have had difficulties with this process,
                    needing to hire consultants and expensive services to deal with this challenge. Now with VKPR your transition and use of cloud-native tools becomes simpler.
                    We built a command line interface dedicated to build kubernetes clusters in a fast, simple and automated way through IaC pipelines following the GitOps methodology.
                    Along with a helper tool that makes it easy to install and manage applications that are in the cloud-native world, without having any lock-in from use.</p>

                <h2>Automate your API building</h2>
                <p>We know how expensive and time-consuming it is to build an API. To solve this problem, we built a command-line interface, Safira-CLI.
                    By using an open API file, along with a simple command, our CLI builds a complete API template in the most used Java frameworks on the market: SpringBoot and Quarkus.
                    All this in a fast and automated way. In addition, our solution allows customizations that bring robustness to the project, such as using Mockserver,
                    pipelining configurations and containerization by Docker and Kubernetes, as well as a high level of security with API gateway like Kong and authenticator like Okta.</p>

                <h2>Centralize your Microservices management</h2>
                <p>The microservices architecture revolutionized the internet, and taking advantage of this innovation we created the DevPortal.
                    This tool is our platform that centralizes all your Specs and APIs, helping the user visualize more closely the services arranged in APIs. Thanks to its visual facilitation,
                    API tests are faster and of better visualization having a set of possibilities to act on our platform. Accelerate your microservices management and get closer
                    to the customer with faster feedback with DevPortal.</p>

                <h2>Get expert support</h2>
                <p>Here is the icing on the cake. With the evolution of technology, every day there is a new and more powerful way to perform your service,
                    all the time there are new updates that change the whole format of the process, and all this is increasingly complex to follow and especially to implement.
                    Here comes our proposal: count on our support! In a simple and fast way, we can solve your doubts and help you bring the best options for your business.
                    Know more about our plans.</p>
            </article>
            <ScrollTop/>
        </DefaultPage>
    )
}

export default HowItWorks