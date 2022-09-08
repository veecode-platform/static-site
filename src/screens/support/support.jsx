import style from '../../../styles/_Support.module.scss'
import { Header } from '../../components'

const AboutSupport = () => {
  return (
    <main className={style.container}>
      <Header />
      <section className={style.content}>
        <div>
          <h1>Support Options</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        </div>
        <article>
            <div>
                <h2>Community Support</h2>
                <h3>Included with All Gruntwork Subscriptions</h3>
                <p>
                    We encourage our customers to post their questions in our Knowledge Base.
                    All Gruntwork customers also receive access to our community-only Slack workspace, where you can engage with other Gruntwork customers and Gruntwork engineers.
                    No Service Level Agreement is provided in the Community Tier.
                </p>
            </div>
            <div>
                <h2>Standard Support</h2>
                <h3>Included with All Gruntwork Subscriptions</h3>
                <p>
                    We encourage our customers to post their questions in our Knowledge Base.
                    All Gruntwork customers also receive access to our community-only Slack workspace, where you can engage with other Gruntwork customers and Gruntwork engineers.
                    No Service Level Agreement is provided in the Community Tier.
                </p>
            </div>
            <div>
                <h2>Premium Support</h2>
                <h3>Included with All Gruntwork Subscriptions</h3>
                <p>
                    We encourage our customers to post their questions in our Knowledge Base.
                    All Gruntwork customers also receive access to our community-only Slack workspace, where you can engage with other Gruntwork customers and Gruntwork engineers.
                    No Service Level Agreement is provided in the Community Tier.
                </p>
            </div>
        </article>
      </section>
    </main>
  );
}

export default AboutSupport