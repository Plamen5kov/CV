const introInfo = {
  name: "Plamen Petkov",
  title: "Senior Software Engineer",
  location: "Sofia, Bulgaria",
  description:
    "<strong>11+ years</strong> of professional software engineering experience. Specialized in <strong>Node.js, NestJS, React</strong>, and <strong>Docker</strong>, with deep hands-on work in <strong>AI-augmented development</strong> — AI agents, MCP, and custom automation harnesses. Passionate about clean code, scalable systems, and shipping reliably.",
  image: "plamen5kov.jpg",
};

//dynamic icon
const socialMediaInfo = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/plamen-petkov-4b6630a9/",
    displayName: "linkedin/plamen5kov",
  },

  {
    name: "github",
    link: "https://github.com/plamen5kov",
    username: "plamen5kov",
    displayName: "github/plamen5kov",
  },
];

const contactInfo = [
  {
    name: "envelope",
    context: "5kov.p@proton.me",
    size: "20px",
    style: "font-size:20px;margin-right: 10px;",
    link: "mailto:5kov.p@proton.me",
  },
  {
    name: "phone-square",
    context: "+359885518383",
    size: "23px",
    style: "font-size:23px;margin-right: 10px;",
    link: "tel:+359885518383",
  },
];

const summaryInfo =
  "Senior software engineer with <strong>11+ years</strong> building scalable backend services, microservices, and modern web applications across fintech, data platforms, and high-growth scale-ups. Deep with <strong>Node.js, NestJS, TypeScript, React, PostgreSQL and Docker</strong>, and an early, hands-on adopter of <strong>AI-augmented development</strong>: I build and run custom <strong>AI-agent harnesses, MCP integrations, and automated quality pipelines</strong> that have <strong>2&#8211;3x</strong>'d my development throughput and reliability.<br>I take ownership of what I build and enjoy carving initial paths where no known solution exists, with a strong track record of designing clean, scalable systems, breaking monoliths into maintainable microservices, and establishing CI/CD that dramatically increases release velocity.<br>Throughout my career I've led teams of 2 to 4 engineers, served as interim team lead, and mentored developers through tech talks and teaching at Telerik Academy and Software University.<br>I care deeply about code quality, test coverage, and developer experience. I've consistently reduced bug resolution times, improved review workflows, and built shared tooling that accelerates entire teams.<br>In my spare time I tinker with microcontrollers, self-host infrastructure on Linux, and cycle when the weather allows.";

const experinceInfo = [
  {
    workAt: "Freelance / B2B Contractor",
    position: "Senior Software Engineer",
    duration: "Mar 2026 – Present",
    description:
      "• Built a custom <strong>multi-agent AI development harness</strong> orchestrating agents across a research &#8594; build &#8594; verify &#8594; review pipeline, <strong>8x</strong> increasing iteration speed while raising reliability through automated quality gates and verification agents that catch defects before merge<br>• Integrated <strong>Model Context Protocol (MCP)</strong> servers and a persistent cross-session memory system, eliminating repeated context-gathering and keeping agents grounded in current project state<br>• Codified engineering standards as <strong>automated hooks</strong> (research gate, quality gate, test-before-merge) that mechanically enforce process and cut rework and review churn<br>• Deliver full-stack B2B features end-to-end with <strong>Node.js/NestJS</strong> backends and <strong>React</strong> frontends, containerized with <strong>Docker</strong>, focused on performance, test coverage, and production reliability",
    techs: [
      "AI Agents",
      "MCP",
      "Node.js",
      "NestJS",
      "React",
      "Docker",
      "PostgreSQL",
      "TypeScript",
    ],
  },
  {
    workAt: "Agreena",
    position: "Senior Software Engineer",
    duration: "Jan 2022 – Feb 2026",
    description:
      "• Served as interim team lead for <strong>1 year</strong> managing a <strong>4-person</strong> development team, delivering all features within <strong>10%</strong> estimation accuracy while maintaining code quality standards including <strong>300-line</strong> service limits and pre-commit hook enforcement<br>• Designed highly normalized database architecture ensuring maximum flexibility to accommodate uncertain business direction, enabling seamless schema evolution and data model adaptability as business requirements emerged<br>• Architected and developed <strong>4</strong> NestJS microservices by breaking down a monolith, maintaining <strong>100%</strong> test coverage and reducing bug tickets by <strong>50%</strong>, while enforcing strict linting rules that saved <strong>3 weeks</strong> of migration time through improved code decoupling<br>• Developed overall microservice architecture concept and created standardized templates enabling consistent service creation and inter-service communication, while building robust RESTful APIs serving the platform<br>• Researched and developed Proof of Concept for AWS SNS and SQS implementation to enable fan-out messaging pattern between microservices, improving asynchronous communication and system scalability<br>• Designed Continuous Delivery release process and automated testing and build workflows using GitHub Actions, enabling release frequency to increase from monthly to <strong>twice daily</strong> with significantly fewer production deployment failures<br>• Optimized CI/CD pipeline by implementing parallel test execution across <strong>4</strong> jobs (<strong>3.5x</strong> faster), while spearheading research and developing Proof of Concept applications to validate new architectural approaches and technology decisions<br>• Integrated Honeycomb observability platform reducing mean time to bug resolution from <strong>2 days</strong> to <strong>3-4 hours</strong> by implementing comprehensive request tracing and logging across all microservices",
    techs: [
      "NestJs",
      "k8s",
      "Microservices",
      "AWS SQS/SNS",
      "Jest",
      "TypeORM",
      "PostgreSQL",
      "MikroORM",
      "Postgres",
      "Nodejs",
      "Docker",
      "Git",
    ],
  },
  {
    workAt: "Atscale",
    position: "Software Engineer",
    duration: "Oct 2020 – Dec 2021",
    description:
      "• Developed and optimized semantic layer middleware translating BI tool queries to SQL across multiple data warehouses, processing <strong>2-3 TB</strong> of data daily and accelerating query response times by <strong>1.2-3x</strong> through automated aggregation and reuse of common subqueries<br>• Engineered query optimization algorithms improving overall system response time by <strong>5%</strong> by analyzing and optimizing query execution patterns across the platform<br>• Maintained integrations with major data warehouse platforms (Databricks, Snowflake, Postgres, Apache Hive/Impala) enabling unified semantic layer that eliminated platform-specific SQL development requirements for business users<br>• Ensured SaaS platform reliability for all Atscale partners by implementing comprehensive pressure testing covering diverse query scenarios and optimization edge cases",
    techs: ["Scala", "Docker", "PostgreSQL"],
  },
  {
    workAt: "News UK",
    position: "TechLead Android Software Engineer",
    duration: "Aug 2019 - Oct 2020",
    description:
      '• Led <strong>2-person</strong> Android team maintaining News UK app (<strong>100k+</strong> downloads) and accelerated release cadence from once every <strong>2 months</strong> to <strong>weekly</strong> by establishing Jenkins CI/CD pipeline with automated deployment to Play Store<br>• Spearheaded migration from Jenkins to Circle CI achieving <strong>4x</strong> faster build times through parallelization and smoke testing implementation, while integrating Git and Slack for enhanced process transparency<br>• Designed and implemented comprehensive "way of working" framework including ticket templates with testing criteria and PR review standards, reducing average code review time from <strong>3 days</strong> to <strong>1 day</strong><br>• Improved cross-team collaboration and QA efficiency by establishing structured ticket creation process with explicit testing sections, reducing clarification requests and streamlining development workflow',
    techs: [
      "Kotlin",
      "Java",
      "Jenkins",
      "Circle CI",
      "Retrofit",
      "RxJava",
      "OkHttp",
      "JUnit",
      "Robolectric",
    ],
  },
  {
    workAt: "Paysafe Group",
    position: "TechLead Software Engineer",
    duration: "Apr 2018 – Aug 2019",
    description:
      "• Led <strong>3-person</strong> Android team managing Skrill and Neteller payment processing applications serving <strong>36 million</strong> combined users, achieving <strong>65%</strong> code module reusability by architecting shared design system, components, and translation framework<br>• Refactored legacy Neteller codebase by developing <strong>50+</strong> reusable common components and systematically replacing modules to match Skrill standards, increasing test coverage from <strong>20%</strong> to <strong>85%</strong> while ensuring business requirement compliance<br>• Contributed to backend infrastructure modernization by assisting in microservices integration using Java Spring Boot, supporting the migration from monolithic architecture to distributed services alongside Android application development<br>• Established automated code quality processes including formatting enforcement, peer review standards, and test automation, reducing bugfix time from <strong>1 week</strong> to <strong>1 day</strong> through improved logging and decreasing PR review time from <strong>3-4 days</strong> to <strong>1 day</strong><br>• Ensured PCI compliance and enhanced security posture by implementing financial industry communication standards and raising minimum Android support level to eliminate known exploits on older devices",
    techs: [
      "Kotlin",
      "Android",
      "Jenkins",
      "Java",
      "Spring Boot",
      "Retrofit",
      "RxJava",
    ],
  },
  {
    workAt: "Progress",
    position: "Software Engineer",
    duration: "Jun 2015 – Apr 2018",
    description:
      "• Optimized NativeScript Android runtime transpilation speed by <strong>2.4x</strong> by reducing JNI interface overhead, enabling faster JavaScript-to-native code conversion for improved application performance<br>• Architected and executed Google V8 JavaScript engine upgrade to major version with JIT compiler integration, delivering equivalent application speed improvements while implementing Ignition interpreter in <strong>2016</strong> to significantly reduce memory usage on small memory Android devices compared to TurboFan and Crankshaft<br>• Contributed as top contributor to NativeScript android-runtime open source project, implementing Node.js standard APIs from specification, developing features, and embedding JavaScript runtime into Android applications using C++ and V8<br>• Integrated NativeScript core product into Telerik Platform through stress testing, performance optimization, and development of wrapping modules leveraging runtime capabilities",
    techs: ["C++", "Javascript", "NodeJs", "Java", "V8", "Node"],
  },
];
const projectsInfo = [
  {
    name: "Finances App",
    duration: "2024 – Present",
    links: ["https://github.com/Plamen5kov/finance-app"],
    description:
      "Full-stack personal finance platform with budget tracking, goal management, and a budget advisor component.<ul><li><strong>Stack:</strong> NestJS + React + PostgreSQL, Dockerized via Docker Compose</li><li><strong>Features:</strong> Emergency fund calculations, financial goal tracking, spending analytics</li></ul><br><strong>Demo:</strong> <a href='https://finance.5kov.xyz' target='_blank'>finance.5kov.xyz</a><br>username: <code>demo</code> / password: <code>DemoPassword123</code>",
  },
  {
    name: "Audiobook Pipeline",
    duration: "2025 – Present",
    links: ["https://github.com/plamen5kov/audiobook-pipeline"],
    description:
      "Turns book chapters into full audiobooks with distinct voices per character and emotional delivery. All open-source, no paid APIs.<ul><li><strong>Pipeline:</strong> Text analysis (deterministic parsing + LLM) &#8594; multi-engine TTS (XTTS v2 voice cloning, Qwen3-TTS) &#8594; audio assembly &#8594; Whisper QA</li><li><strong>Stack:</strong> 8-container Docker Compose on NVIDIA DGX Spark, React frontend, NestJS API gateway</li><li><strong>Features:</strong> Parallel synthesis, per-character voice casting, pluggable TTS engines</li></ul><br><strong>Demo:</strong> <a href='https://pipeline.5kov.xyz' target='_blank'>pipeline.5kov.xyz</a> (contact me for a private demo, or clone the repo and set it up yourself)",
  },
  {
    name: "Terminal (Android SSH Client)",
    duration: "2025 – Present",
    links: ["https://github.com/Plamen5kov/mobile-access-android"],
    description:
      "Native Android SSH terminal with a retro 80s phosphor aesthetic. Designed for GrapheneOS, no Google Play Services required.<ul><li><strong>Stack:</strong> Kotlin + Vite/TypeScript frontend with xterm.js (256-color, full VT100)</li><li><strong>Features:</strong> Multi-tab sessions, tmux auto-attach with disconnect survival, Ed25519 keys encrypted via Android Keystore</li><li><strong>Voice input:</strong> Works with system keyboards like Sayboard and Whisper+ for hands-free terminal control</li></ul><br><strong>Install:</strong> Available via <a href='https://github.com/ImranR98/Obtainium' target='_blank'>Obtainium</a> (point it at the GitHub repo for automatic updates)",
  },
  {
    name: "ProjectCatalyst vCA-tool",
    duration: "2022",
    links: [
      "https://github.com/Project-Catalyst/vca-tool",
      "https://github.com/Project-Catalyst/ca-tool",
      "https://github.com/Project-Catalyst/voter-tool",
    ],
    description:
      "Working with Vue js to help along with the blockchain governance phase.",
  },
  {
    name: "NativeScript",
    duration: "2015 – 2018",
    links: [
      "https://github.com/NativeScript",
      "https://github.com/NativeScript/android-runtime",
    ],
    description: "Worked on the CLI and top contributor in the android-runtime",
  },
  {
    name: "JavaScript chatbot",
    duration: "2018",
    links: ["https://github.com/Plamen5kov/plamen5kov-bot"],
    description:
      "A JavaScript chatbot using Watson. Conversation, facebook Messenger API and the google YouTube API. Just a side project for experimenting with a new technology.",
  },
  {
    name: "JavaScript static analyzer",
    duration: "2016 – 2018",
    links: ["https://github.com/Plamen5kov/ast_parser"],
    description:
      "A static js analyzer that gathers  meta information in the form of AST. Generating java classes based on JavaScript meta information. Built on top of babel compiler. Using eclipse open source tooling to generate java code based on the extracted js information.",
  },
  {
    name: "iOS app",
    duration: "2015",
    links: ["https://github.com/Plamen5kov/YouTubePlaylist"],
    description:
      "A small iOS application, using the YouTube sdk to handle missing functionality in the YouTube playlists.",
  },
  {
    name: "Windows phone app",
    duration: "2014",
    links: ["https://github.com/Plamen5kov/MindMap"],
    description: "A simple mind map for windows phone",
  },
];

const educationInfo = [
  {
    school: 'Varna Free University "Chernorizets Hrabar"',
    location: "Varna,Bulgaria",
    title: "Bachelor's degree, Information Technology",
    duration: "2015 – 2018",
    description: "",
  },
  {
    school: "Telerik Software Academy ",
    location: "Sofia,Bulgaria",
    title: "Mobile Developer, Information Technology",
    duration: "2013 – 2014",
    description: "",
  },
  {
    school: "Sofia University St. Kliment Ohridski",
    location: "Sofia,Bulgaria",
    title: "Economics",
    duration: "2011 – 2014",
    description: "",
  },
];

const achievementsInfo = [
  {
    title: "Telerik Academy lecturer",
    duration: "2016 - 2019",
    links: ["https://www.telerikacademy.com/"],
  },
  {
    title: "Software University lecturer",
    duration: "Jun,2018 - Sep, 2018",
    links: [
      "https://softuni.bg/trainings/1879/nativescript-development-june-2018",
    ],
  },
  {
    title: "Dev.BG speaker",
    duration: "Oct,2018",
    links: ["https://bit.ly/2EsElLX"],
  },
];

const skillInfo = [
  {
    name: "AI Agents & LLM Orchestration",
    rate: 92,
  },
  {
    name: "MCP, Agentic Workflows",
    rate: 90,
  },
  {
    name: "Typescript, Javascript",
    rate: 95,
  },
  {
    name: "NestJs, NodeJs",
    rate: 94,
  },
  {
    name: "React",
    rate: 85,
  },
  {
    name: "Docker, Kubernetes",
    rate: 92,
  },
  {
    name: "PostgreSQL",
    rate: 90,
  },
  {
    name: "Java, Kotlin",
    rate: 88,
  },
  {
    name: "Python",
    rate: 80,
  },
  {
    name: "Scala",
    rate: 75,
  },
  {
    name: "VueJS",
    rate: 50,
  },
];

const otherSkillInfo = [
  "AI Agents",
  "MCP (Model Context Protocol)",
  "Claude Code",
  "LLM Orchestration",
  "Prompt Engineering",
  "Git",
  "GitHub Actions",
  "CI/CD",
  "Nginx",
  "AWS SQS/SNS",
  "REST APIs",
  "Microservices",
  "Linux",
  "Jira",
];

const languageInfo = [
  {
    name: "Bulgarian",
    rate: 5,
    level: "Native",
  },
  {
    name: "English",
    rate: 4,
    level: "Advanced",
  },
];

const interestInfo = [
  {
    name: "Book reader",
    description: "Big epic fantasy reader",
  },
  {
    name: "Biking",
    description: "I've got the scars to prove it",
  },
  {
    name: "Tinkering with microcontrollers",
    description: "",
  },
];

export default {
  introInfo,
  socialMediaInfo,
  experinceInfo,
  projectsInfo,
  educationInfo,
  skillInfo,
  achievementsInfo,
  languageInfo,
  contactInfo,
  interestInfo,
  summaryInfo,
  otherSkillInfo,
};
