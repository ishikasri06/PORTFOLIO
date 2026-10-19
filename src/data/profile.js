// Single source of truth for personal / contact information.
// Only verified links are listed here — no placeholder or invented URLs.

export const profile = {
  name: 'Ishika Srivastava',
  firstName: 'Ishika',
  initials: 'IS',
  role: 'Software · Data · ML Engineer',
  headline: 'Building reliable software, data systems, and intelligent applications.',
  location: 'Bengaluru, India',
  email: 'ishikasrivastava02@gmail.com',
  intro: [
    'I am a computer science engineer who enjoys working across the stack — from backend services and APIs to large-scale data pipelines and machine-learning models.',
    'Most recently I interned as an SDE at Amazon, where I improved Java microservices and data pipelines for catalog and pricing systems. I now work as a Data Engineer I at KPI Partners, building PySpark and Databricks workflows for distributed data processing.',
    'I like problems that need both solid engineering and careful thinking about data: reliable systems, clean pipelines, and models that hold up in practice.',
  ],
}

// Verified links only. LinkedIn and GitHub are confirmed from the public profile.
export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@ishikasri06',
    url: 'https://github.com/ishikasri06',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/ishikasrivastava06',
    url: 'https://www.linkedin.com/in/ishikasrivastava06',
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'ishikasrivastava02@gmail.com',
    url: 'mailto:ishikasrivastava02@gmail.com',
    icon: 'mail',
  },
]

export const resumeUrl = 'resume/Ishika_Srivastava_Resume.pdf'
