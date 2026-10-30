const base = import.meta.env.BASE_URL;

export const profile = {
  name: 'Harsha Vivek',
  fullName: 'Harsha Vivek Gangadhar Androthu',
  role: 'Project Engineer',
  org: 'C-DAC',
  city: 'Bengaluru, India',
  email: 'hvgnani79813@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harsha-vivek-a47309243/',
  github: 'https://github.com/Harsha-vivek03',
  resume: `${base}Harsha_Vivek_Resume.pdf`,
};

export const roles = [
  'Full-stack developer',
  'Microservices builder',
  'Infrastructure and DevOps explorer',
];

export const nav = [
  ['about', 'About'],
  ['journey', 'Journey'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['logbook', 'Background'],
  ['contact', 'Contact'],
];

export const dream = {
  title: 'Build it, run it, own it',
  text: 'I want to be the engineer a team trusts with an entire system: designing it, shipping it, and keeping it alive in production. Every project, every deployment and every late-night debugging session is a step toward that.',
  headings: ['DevOps and infrastructure engineering', 'Kubernetes and cloud-native design', 'Systems that scale and stay up'],
};

export const quotes = [
  "It's not about if I can. I'm doing this because I want to. I chose my dream long ago, so if I break fighting for it... then I will.",
  "I'm not here to ride the waves of someone else's stack. I'm here to learn all of it.",
  "A service that isn't running is just a story. I ship things that run.",
  'The front end earns the first look. The infrastructure earns the trust.',
  "Every bug is an island I haven't charted yet.",
  'The plan is simple: build it, run it, own it.',
];

export const stats = [
  { value: 2, suffix: '+', label: 'Years building software' },
  { value: 30, suffix: '+', label: 'College sites kept live' },
  { value: 150, suffix: '+', label: 'Students mentored' },
  { value: 10, suffix: '', label: 'Infrastructure tools I run' },
];

export const about = [
  "I started on the front end, shipping React interfaces for a university website that serves more than 30 colleges, and kept pulling on the thread until I was working across the whole stack.",
   "As a Project Engineer bridging development and infrastructure, I build robust backend systems and keep them running reliably at scale. My daily work spans designing backend services, deploying them behind Nginx architectures, handle security concerns, and maintaining end-to-end observability using Grafana and the ELK stack for rapid log troubleshooting.",
  "That mix is what I enjoy most. I like software that is pleasant to use, and I like it even more when it stays up.",
];

export const pillars = [
  { title: 'Build', text: 'Java, Spring Boot, Angular and React. REST APIs, microservices and clean interfaces.' },
  { title: 'Run', text: 'Linux, Docker, Kafka, Redis, Nginx and Keycloak, deployed and managed on my own VM.' },
  { title: 'Observe', text: 'Prometheus, Grafana and application logs, so problems show up before users report them.' },
];

export const journey = [
  {
    when: 'Jun 2026 to now',
    title: 'Project Engineer',
    org: 'C-DAC, Bengaluru',
    current: true,
    points: [
      'Build backend services and REST APIs in Java and Spring Boot for event-driven microservice platforms.',
      'Run my own deployment environment on Linux: Dockerised Redis, Kafka, Nginx and Keycloak, MySQL, and Prometheus with Grafana for visibility.',
      'Debug across layers, from message consumers to proxy configuration to slow queries, and tune performance as I go.',
      'Learning Kubernetes on Minikube to move deployments toward orchestration.',
    ],
  },
  {
    when: 'Jan 2026 to May 2026',
    title: 'Programmer Analyst Trainee',
    org: 'Cognizant, Chennai',
    points: [
      'Built full-stack applications with Java, Spring Boot and Angular to enterprise coding standards.',
      'Designed REST microservices and connected them to Angular frontends.',
      'Worked in Agile teams with Docker and Maven, and moved into a project-ready role on the strength of technical assessments.',
    ],
  },
  {
    when: 'Aug 2025 to Dec 2025',
    title: 'Full Stack Java Trainee',
    org: 'Revature, Remote',
    points: [
      'Four-month intensive on Core Java, JPA, Spring Boot and SQL, with daily coding labs and test-driven challenges.',
      'Cleared every weekly milestone, monthly technical evaluation and client interviews.',
    ],
  },
  {
    when: 'Apr 2024 to May 2025',
    title: 'Front End Developer Intern',
    org: 'Digital Monitoring Cell, JNTUGV',
    points: [
      'Built the React and Material-UI interfaces for the official university website and academic portals.',
      'Kept web platforms for 30+ affiliated colleges available and consistent, with daily production updates.',
      'Integrated backend APIs used by thousands of students.',
    ],
  },
];

export const featured = {
  name: 'National EDA Insights',
  status: 'Current project at C-DAC',
  summary:
    "A licence monitoring and analytics tool for the EDA software used under India's Chipin programme. It turns crores of raw flex-LM logs licence activity into live dashboards, so administrators can see and monitor how tools are being used as it happens.",
  highlights: [
    'Event-driven microservices architecture with Kafka as the backbone',
    'Live dashboards updated over WebSockets with Redis channels for state management.',
    'Partitioned PostgreSQL storage built for time-series growth',
    'Directory login through LDAP and automated agent rollout with Ansible',
  ],
  stack: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Filebeat', 'WebSockets', 'LDAP', 'Ansible', 'Docker'],
  pipeline: [
    { step: 'Collect', tech: 'Filebeat agents' },
    { step: 'Stream', tech: 'Apache Kafka' },
    { step: 'Process', tech: 'Spring Boot + Caching' },
    { step: 'Store', tech: 'PostgreSQL with Time-Series Extension' },
    { step: 'Show', tech: 'Live dashboard' },
  ],
};

export const projects = [
  {
    name: 'EduTrack',
    tag: 'Microservices marketplace',
    when: 'Jan to Apr 2026',
    text: 'An e-learning marketplace split into independent services behind Spring Cloud Gateway, with Eureka for discovery. Learners progress through courses and earn certificates automatically.',
    points: [
      'JWT security with role-based access for admins, instructors and students',
      'Progress tracker that issues certificates from completion and assignment scores',
      'Assessment engine on Angular Signals with bulk JSON upload for question banks',
    ],
    stack: ['Spring Cloud', 'Spring Security', 'Angular 21', 'TiDB', 'Docker'],
    link: 'https://github.com/orgs/EduTrack-MicroServices/repositories',
    linkLabel: 'View on GitHub',
  },
  {
    name: 'Carcaddy',
    tag: 'Full-stack service tracker',
    when: 'Oct to Dec 2024',
    text: 'A vehicle maintenance system where workshops register vehicles, update service progress and share expected delivery dates, and owners see the complete service history.',
    points: [
      'REST API with a React client on a clean client-server split',
      'Status visibility from check-in to delivery with real-time updates through emails.',
      'View history of all services done on a vehicle, with dates and costs',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'ReactJS'],
    link: 'https://github.com/Harsha-vivek03/Carcaddy-AutoTrack',
    linkLabel: 'View on GitHub',
  },
  {
    name: 'JNTUGV University Website',
    tag: 'Production website',
    when: 'Mar to Sep 2024',
    text: 'The official site of a university with more than 30 affiliated colleges. I led the front end and handled daily updates on the live site.',
    points: [
      'Responsive layouts for announcements, college updates and student resources',
      'Fast turnaround on production changes for a large audience',
    ],
    stack: ['ReactJS', 'Material-UI', 'Bootstrap', 'CSS'],
    link: 'https://jntugv.edu.in',
    linkLabel: 'Visit the site',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    note: 'Interfaces people enjoy using',
    items: ['Angular', 'ReactJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material-UI'],
  },
  {
    title: 'Backend and data',
    note: 'Services that scale and stay secure',
    items: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Microservices', 'REST APIs', 'Event-driven design', 'JPA / Hibernate', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Infrastructure',
    note: 'What keeps it all running',
    items: ['Linux', 'Docker', 'Kubernetes (Minikube)', 'Apache Kafka', 'Redis', 'Nginx', 'Keycloak', 'Prometheus', 'Grafana', 'Ansible', 'Telegraf'],
  },
];

export const flow = [
  ['Nginx', 'Entry point'],
  ['Keycloak', 'Authentication'],
  ['Spring Boot', 'Services'],
  ['Kafka + Redis', 'Events and state'],
  ['MySQL / PostgreSQL', 'Storage'],
  ['Prometheus + Grafana', 'Monitoring'],
];

export const workStyle = ['Troubleshooting and debugging', 'Agile and Scrum', 'Working across dev and infra teams', 'Learning in public'];

export const education = [
  { when: '2021 to 2025', title: 'B.Tech, Information Technology', org: 'JNTUGV University College of Engineering, Vizianagaram', note: 'CGPA 7.8 / 10' },
  { when: '2019 to 2021', title: 'Intermediate (MPC)', org: 'Narayana Junior College, Rajahmundry', note: 'GPA 10.0' },
  { when: '2015 to 2019', title: 'High School (SSC)', org: 'Nagaraja Government High School, Rajahmundry', note: 'GPA 9.8' },
];

export const certs = [
  ['PEP Extended Java Full Stack', 'Revature'],
  ['Front-End Developer (Professional)', 'edX, W3C'],
  ['SQL for Data Science', 'edX, IBM'],
  ['Front-End Development', 'IBM SkillBuild'],
  ['Java Foundation', 'Oracle'],
  ['Data Structures and Software Engineering', 'Infosys Springboard'],
];

export const leadership = [
  { when: 'Mar 2024', title: 'ReactJS Workshop Lead', org: 'ITYUKTA-2K24, JNTUGV', text: 'Taught 150+ students from 30 colleges React fundamentals and how to deploy a personal portfolio.' },
  { when: 'Feb 2023', title: 'Hour of Code Mentor', org: 'ACM Student Chapter, JNTUGV', text: 'Ran Python workshops and guided peers through logic building and small game projects.' },
  { when: 'Jan 2022', title: 'Chess champion', org: 'Mandal Level Tournament', text: 'First prize, and felicitated by the Member of Parliament for excellence in competitive sports.' },
];
