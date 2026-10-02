/**
 * CV copy and the public resume file.
 *
 * The page renders this record; the PDF in `public/` is the same document
 * visitors download. Keep the two in step when the resume changes.
 */

export const resumeDownload = {
  href: "/alain-bloch-resume.pdf",
  filename: "Alain-Bloch-Resume.pdf",
} as const;

export const cvContact = {
  phone: "(916) 214-3917",
  phoneHref: "tel:+19162143917",
  email: "alainbloch@gmail.com",
  githubHref: "https://github.com/alainbloch",
  githubLabel: "github.com/alainbloch",
  linkedinHref: "https://www.linkedin.com/in/alainbloch",
  linkedinLabel: "linkedin.com/in/alainbloch",
} as const;

export const objectives = [
  "To leverage my skills and experience to make the world a better place to live in.",
  "To be on the floor of a mission-driven company and contribute to its success.",
  "To grow and learn as a programmer and project team member with a group of brilliant and enthusiastic individuals.",
];

export const personalSummary =
  "I am self-motivated and industrious with the desire to push the threshold of my capabilities and understanding. I work very well with teams. Being in a team is one of the best ways to learn and develop skills. I bring humor and personality to the team that makes collaboration fun and enjoyable. I also enjoy and flourish in a demanding work environment with short but accurate deadlines. Overall, I am a creative, critical and intuitive thinker who likes to collaborate with others on innovative projects.";

export const technicalSkills = [
  {
    name: "Ruby on Rails",
    detail:
      "20 years of experience developing scalable web applications, from v1.8 to v7.2.x.",
  },
  {
    name: "JavaScript",
    detail:
      "Substantial experience with Node.js, React, React-Admin, Redux, Vue, Nuxt, and jQuery.",
  },
  {
    name: "Python",
    detail: "Data scraping and ETL for AI/ML systems using Orator, bs4, and Rev_AI.",
  },
  {
    name: "AI & machine learning",
    detail:
      "LLM system design using OpenAI/Gemini, LangChain, and Qdrant. Prompt engineering, RAG pipelines, embedding and re-ranking strategies, multi-agent and tool-calling architectures, observability and evaluation (Helicone), and production concerns including safety, latency, and cost.",
  },
  {
    name: "Containerization",
    detail: "OpenShift, Docker, Kubernetes, automated deployment, and image generation.",
  },
  {
    name: "API development",
    detail:
      "RESTful and HATEOAS APIs, JSON:API with JSON Schema, and GraphQL. Integrations with third-party services including Salesforce and Google.",
  },
  {
    name: "Databases",
    detail: "MySQL, PostgreSQL, SQLite, MongoDB, Redis, Cassandra.",
  },
  {
    name: "Workflow engines",
    detail: "Camunda (BPMN), Ruote, Flor.",
  },
  {
    name: "Methodologies",
    detail: "Agile, TDD, BDD, MVC+P, object-oriented design.",
  },
  {
    name: "Testing",
    detail: "RSpec, Test::Unit, Jest, Cucumber, Mocha, Chai, Selenium, Cypress.",
  },
  {
    name: "Performance & monitoring",
    detail: "Google Analytics, New Relic, Airbrake.",
  },
  {
    name: "Project management",
    detail: "Basecamp, Lighthouse, Pivotal Tracker, Jira.",
  },
];

export const managementSkills = [
  "Mentored team members and junior engineers.",
  "Applied Agile practices including pair programming and scrum boards.",
  "Wrote iteration proposals, action plans, scope and sequence documents, project proposals, specifications, and contracts.",
  "Led successful projects as project manager and team lead.",
  "Translated technical ideas for non-technical people and wrote the documentation to match.",
  "Facilitated meetings, project assessments, overviews, and interviews with teams and clients.",
];

export const experience = [
  {
    role: "Senior Software Engineer (Team Lead)",
    company: "ScopeAR",
    location: "575 Market St #400, San Francisco, CA 94103",
    period: "Dec 2021 — Present",
    description:
      "As team lead for the Web/API team, I led the modernization of a large legacy Rails platform serving thousands of users. That included upgrading core infrastructure, migrating a REST API to GraphQL with graphql-ruby and Apollo, building an API-first CMS, and rebuilding the admin client on a customized React-Admin stack. I implemented tenant-aware RBAC and multi-tenancy with encrypted isolation, enterprise SSO using OAuth2 and SAML with Azure AD, and RFC 9068 JWTs. I also built inbound and outbound webhook infrastructure and deployed RAG-based AI agents and helpdesk integrations, contributing to SOC 2 compliance and enterprise growth across aerospace, automotive, and defense customers.",
  },
  {
    role: "Senior Software Engineer (Tech Lead), Technical Solutions Architect",
    company: "Vineti",
    location: "633 Howard St, San Francisco, CA 94105",
    period: "Dec 2018 — Dec 2021",
    description:
      "A first-of-its-class platform for “arm-to-arm” personalized therapy, used by major pharmaceutical makers and hospitals. I built microservices and sub-modules so critical lines of code could ship without blocking the rest of the team. I revised the core platform, applied Material UI, GraphQL, and JSON Forms, and integrated the Camunda workflow engine into a configurable customer application. I worked with the architecture and core platform teams on newer versions, became tech lead for a four-person core platform team, then moved into a technical solutions architect role for customer configurations, deployments, and roadmap features.",
  },
  {
    role: "Principal Software Developer, Owner",
    company: "Ruby Miner, LLC",
    location: "",
    period: "May 2007 — Present",
    description:
      "Contract work through the company I founded. I have built social networking, content and multimedia management, wiki-style collaboration, newsletter creation and distribution, integrations with APIs such as Amazon EC2/FPS, Facebook Connect, Twitter, and Constant Contact, and e-commerce with PayPal and Google Checkout. I used Basecamp, Pivotal Tracker, and time-tracking and invoicing tools, hired freelance contractors, led development and design teams, and wrote specifications, wireframes, and UML diagrams.",
  },
  {
    role: "Senior Software Engineer",
    company: "Grand Rounds",
    location: "360 3rd St, San Francisco, CA 94107",
    period: "Feb 2017 — Dec 2018",
    description:
      "Grand Rounds helps people get specialist second opinions and uses data analysis to qualify treatments and physicians. My most impactful work was a rewrite and refactor of the core product libraries, which unlocked two new products and made the product lines more scalable. I introduced coding patterns for the monolithic Rails application and mentored junior team members.",
  },
  {
    role: "Senior Software Engineer",
    company: "LearnUp",
    location: "995 Market Street, Suite 1408, San Francisco, CA 94103",
    period: "Aug 2015 — Dec 2016",
    description:
      "I solely redesigned and developed the second version of the core job-training product: interactive scenarios with scored choices, progress bars timed to audio, and slideshow components. I tested iterations of the job landing page and raised conversion by 30%. I also revised client emails to increase engagement. Near the end of my time there we started a React and Redux front end and a move toward a microservice architecture.",
  },
  {
    role: "Software Developer",
    company: "Change.org",
    location: "383 Rhode Island, Suite 300, San Francisco, CA 94103",
    period: "Aug 2011 — Apr 2015",
    description:
      "The site grew from 1 million users to over 100 million in the three and a half years I was there. I worked on custom translation layers, mobile interfaces, Facebook sharing, Salesforce integration, the public API, search, and other projects that made Change.org the leading petition site. We used Redis and Resque for background work, asynchronous loads, batch jobs, and caching to step outside the request-response cycle, then moved to a SaaS-style architecture and an HTML5 responsive site. We also became lead contributors to the RendrJS Node framework.",
  },
  {
    role: "Software Developer",
    company: "Yammer",
    location: "1355 Market St, Floor 3, San Francisco, CA 94103",
    period: "Aug 2010 — Aug 2011",
    description:
      "Joined a small engineering team when the company had about 50 employees. I led the public API that let third-party developers add plugins and widgets. I extended the front-end framework, Yam.js, with promise chains and new post types, and built a calendar and event platform that broadcast updates and alerts.",
  },
  {
    role: "Senior Software Developer",
    company: "Aurora Feint",
    location: "330 Primrose Road, Suite 515, Burlingame, CA 94010",
    period: "Feb 2010 — Jul 2010",
    description:
      "Built client and server products including OpenFeint Game Spotlight, a RESTful read-only API, and a cross-platform RESTful API. The API had full test coverage and JSON, XML, and HTML support. GET requests were page-cacheable, and queries were tuned so a request made one to three database calls, with response times under 30 ms. I also wrote a JavaScript library for the OpenFeint client webview that sent instructions to the Objective-C client through WebKit so HTML views felt native.",
  },
  {
    role: "Software Developer",
    company: "Planet Argon, LLC",
    location: "19 NW 5th Avenue, Suite 203, Portland, OR 97209",
    period: "Sep 2006 — May 2007",
    description:
      "Full-time Ruby on Rails work, plus unobtrusive JavaScript and AJAX, primarily on PostgreSQL, using Agile, Basecamp, and wikis. We applied test- and behavior-driven development. I built a custom AJAX calendar with ranges, times, and summarization, and a web-service layer so people could use an app by email and SMS.",
  },
  {
    role: "Software Developer / Project Manager",
    company: "Ursa Minor Arts & Media",
    location: "4318 Redwood Hwy, San Rafael, CA",
    period: "Oct 2005 — Sep 2006",
    description:
      "Full-time Rails development, with PHP and JavaScript when a project needed it. I led and built several projects, including an in-house CMS reused across sites, and helped roll out a new pricing and sign-up process for the hosting department.",
  },
];

export const referencesNote = "Available on request.";
