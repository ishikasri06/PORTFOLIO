// Featured projects — only verified links are included.
// `links.github` / `links.live` are left null when a URL could not be confirmed,
// in which case the UI simply omits the corresponding button.

export const projects = [
  {
    id: 'splitsmart',
    name: 'SplitSmart',
    tagline: 'Full-stack expense sharing with paise-level precision.',
    category: 'Full-Stack · Web',
    year: '2026',
    featured: true,
    summary:
      'A full-stack expense-sharing application for groups — flatmates, trips, families, and friends. It records expenses with flexible splits, computes net balances, and produces a debt-simplification plan that settles a group with the fewest possible transfers.',
    problem:
      'Splitting shared costs across many people quickly becomes error-prone: rounding, unequal shares, and who-owes-whom make manual tracking unreliable. The goal was a trustworthy ledger where the database, not the browser, enforces every rule.',
    implementation: [
      'Multiple groups with role-based membership (owner/admin/member) and email plus reusable invite-link workflows; only a SHA-256 hash of a link token is stored.',
      'Three split methods — equal, exact, and percentage — with currency-safe arithmetic performed in paise and deterministic remainder distribution.',
      'Net balance calculation and a debt-simplification plan, plus full and partial settlements that update the ledger without moving money.',
      'Authentication and Row-Level Security on Supabase: membership determines visibility, and sensitive writes run through SECURITY DEFINER RPCs.',
    ],
    challenges:
      'The hardest part was keeping financial calculations exact across three split methods while delegating authorisation to Postgres RLS. Splits are computed in paise to avoid floating-point drift, and privilege-sensitive operations (invitations, member management, account deletion) run server-side so clients cannot forge them.',
    outcome:
      'A production-shaped single-page application with a responsive UI, light/dark/system theming, recurring bills, private personal expenses, and in-app notifications — with no custom application server in the request path.',
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'SQL', 'JavaScript'],
    links: {
      github: 'https://github.com/ishikasri06/SplitSmart',
      live: null,
    },
    images: [
      {
        src: 'projects/splitsmart-dashboard.png',
        alt: 'SplitSmart dashboard showing group total, your net balance and recent expenses',
      },
      {
        src: 'projects/splitsmart-expenses.png',
        alt: 'SplitSmart expense management view with a searchable ledger and category filter',
      },
      {
        src: 'projects/splitsmart-dark.png',
        alt: 'SplitSmart interface rendered in dark mode',
      },
    ],
  },
  {
    id: 'streampulse',
    name: 'StreamPulse',
    tagline: 'Real-time distributed log analytics and monitoring.',
    category: 'Distributed Systems · Streaming',
    year: '2026',
    featured: true,
    summary:
      'An end-to-end, event-driven platform that ingests application logs through Kafka, aggregates service-level metrics with Spark Structured Streaming, stores them in a Cassandra-compatible cloud database, and streams live updates to a React monitoring dashboard.',
    problem:
      'Distributed applications emit large volumes of logs across many services. Processing them by hand or with periodic batch jobs makes it hard to spot errors, track response times, or understand real-time service health.',
    implementation: [
      'Telemetry ingested through Kafka (three partitions) from a Python log producer.',
      'Spark Structured Streaming windowed aggregations computing error rates, warning counts, average response times, and per-service health.',
      'Service-level metrics persisted in DataStax Astra DB (Cassandra-compatible) and exposed through FastAPI REST endpoints and WebSockets.',
      'React monitoring dashboard consuming live WebSocket updates, with the full stack orchestrated through Docker Compose and deployed on AWS EC2.',
    ],
    challenges:
      'Keeping a long-running Spark streaming job stable on a memory-constrained instance required tuning and a restart policy, and bridging a remote WebSocket connection from the browser to a cloud-hosted backend needed careful networking and secure cloud connectivity.',
    outcome:
      'A live, cloud-deployed monitoring dashboard that turns a continuous log stream into actionable service health, error, and latency signals in real time.',
    stack: [
      'Python',
      'Apache Kafka',
      'Spark Structured Streaming',
      'DataStax Astra DB',
      'FastAPI',
      'React',
      'Docker',
      'AWS EC2',
    ],
    links: {
      github: 'https://github.com/ishikasri06/streampulse',
      live: 'http://65.0.32.253:5173',
    },
    images: [
      {
        src: 'projects/streampulse-dashboard.png',
        alt: 'StreamPulse live monitoring dashboard',
      },
      {
        src: 'projects/streampulse-metrics.png',
        alt: 'StreamPulse per-service metrics view',
      },
      {
        src: 'projects/streampulse-errors.png',
        alt: 'StreamPulse error count visualisation',
      },
      {
        src: 'projects/streampulse-response.png',
        alt: 'StreamPulse average response time visualisation',
      },
    ],
  },
  {
    id: 'megamart',
    name: 'MegaMart',
    tagline: 'End-to-end data engineering and BI capstone.',
    category: 'Data Engineering',
    year: '2026',
    featured: true,
    summary:
      'An end-to-end data engineering and business-intelligence capstone that simulates a supermarket chain, taking raw data through generation, ingestion, validation, transformation, analytical processing, and interactive Power BI dashboards.',
    problem:
      'Retail businesses need trustworthy pipelines, not just charts. The project models the full path from messy raw data to validated analytical tables and the business questions they answer — store performance, sales trends, inventory turnover, supplier delivery, and reorder needs.',
    implementation: [
      'Data generation and ingestion into Databricks, followed by a dedicated data-validation stage.',
      'Cleaning and transformation with Python, PySpark, and SQL into Delta / Databricks analytical tables.',
      'Business analysis notebooks covering sales, inventory, an inventory optimizer, and store KPIs.',
      'Interactive Power BI dashboards surfacing retail, sales, and supply-chain insights.',
    ],
    challenges:
      'The core challenge was engineering trust into the pipeline: enforcing validation and data-quality checks before transformation so that downstream analytics and dashboards rest on clean, consistent tables.',
    outcome:
      'A reproducible Databricks workflow with documented notebooks, a validation layer, analytical tables, and a Power BI dashboard layer for retail decision-making.',
    stack: ['Databricks', 'Python', 'PySpark', 'Spark SQL', 'Delta Tables', 'SQL', 'Power BI'],
    links: {
      github: 'https://github.com/ishikasri06/megamart-data-engineering',
      live: null,
    },
    images: [
      {
        src: 'projects/megamart-retail.png',
        alt: 'MegaMart retail store analysis dashboard',
      },
      {
        src: 'projects/megamart-sales.png',
        alt: 'MegaMart sales analysis dashboard',
      },
      {
        src: 'projects/megamart-inventory.png',
        alt: 'MegaMart inventory and supply chain dashboard',
      },
    ],
  },
  {
    id: 'nyc-taxi',
    name: 'NYC Taxi Analytics',
    tagline: 'Large-scale PySpark analytics on 2.96M trips.',
    category: 'Data Engineering · PySpark',
    year: '2026',
    featured: true,
    summary:
      'A PySpark and Databricks project that processes approximately 2.96 million raw January 2024 NYC Yellow Taxi records — cleaning, validating, and deriving features before running analytical queries and Spark performance experiments.',
    problem:
      'Raw trip data contains nulls, duplicates, and invalid values, and naive Spark jobs are slow. The project needed both a clean analytical dataset and an understanding of how to make Spark jobs efficient.',
    implementation: [
      'Cleaned and validated roughly 2.96 million raw records, handling duplicate and null values.',
      'Derived features such as fare per mile and trip category for analysis.',
      'Ran analytical queries and window-function workloads with Spark SQL and DataFrames.',
      'Studied execution plans and the Catalyst optimiser, plus Spark performance optimisation and Spark UI analysis.',
    ],
    challenges:
      'Balancing correctness and performance: deciding which records to drop versus repair during validation, and using execution-plan analysis to remove unnecessary shuffles and improve job runtimes.',
    outcome:
      'A well-documented notebook series covering data exploration, cleaning, DataFrames, Spark SQL, joins, window functions, UDFs, the Catalyst optimiser, performance tuning, and the Spark UI.',
    stack: ['PySpark', 'Spark SQL', 'Databricks', 'Jupyter', 'Python'],
    links: {
      github: 'https://github.com/ishikasri06/nyc-taxi-pyspark-analytics',
      live: null,
    },
    images: [],
  },
  {
    id: 'hindipoetlm',
    name: 'HindiPoetLM',
    tagline: 'Hindi poetry classification with transformer models.',
    category: 'Machine Learning · NLP',
    year: '2025',
    featured: false,
    summary:
      'A natural-language-processing classification project that identifies the form of Hindi poetry — Doha, Ghazal, and Nazm — using a curated dataset of more than 1,000 poems. It evaluates classical models against multilingual transformer architectures.',
    problem:
      'Hindi poetry has rich, form-specific structure that is difficult to capture with bag-of-words features, especially across closely related verse forms. The task was to classify the poetic form accurately, not to generate poetry.',
    implementation: [
      'Curated and prepared a dataset of 1,000+ poems spanning three categories: Doha, Ghazal, and Nazm.',
      'Trained and evaluated baseline models — Support Vector Machines and Random Forest — alongside transformer models mBERT and XLM-R.',
      'Compared classical and transformer approaches on the same classification task.',
    ],
    challenges:
      'Multilingual transformers needed careful fine-tuning and tokenisation for Devanagari text, and the baseline models struggled with the subtler structural differences between verse forms.',
    outcome:
      'The best-performing configuration reported a classification accuracy of 95.17%, demonstrating that transformer models capture Hindi poetic structure more effectively than classical baselines.',
    stack: ['Python', 'NLP', 'Transformers', 'BERT', 'XLM-R', 'scikit-learn'],
    links: {
      github: null,
      live: null,
    },
    images: [],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
