import Section from './Section'
import { profile } from '../data/profile'

const focus = [
  {
    title: 'Software engineering',
    body: 'Backend services, APIs, and distributed systems built with Java, Node.js, and cloud-native tooling.',
  },
  {
    title: 'Data engineering',
    body: 'Pipelines and transformations with Spark, PySpark, Databricks, Kafka, and orchestrated ETL with a focus on data quality.',
  },
  {
    title: 'Machine learning',
    body: 'NLP and deep learning with transformers such as BERT and XLM-R, from data preparation to evaluation.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="An engineer who works across the data stack"
      lead="From backend microservices to distributed pipelines and machine-learning models."
    >
      <div className="about">
        <div className="about__text" data-reveal>
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about__focus">
          {focus.map((item) => (
            <article className="focus-card" key={item.title} data-reveal>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
