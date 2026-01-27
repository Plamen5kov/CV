const introInfo = {
    name: 'Plamen Petkov',
    title: 'Senior Software Engineer',
    location: 'Sofia, Bulgaria',
    description: '<strong>Turpis, sit amet iaculis dui consectetur at.</strong> Cras sagittis molestie orci. <strong>Suspendisse ut laoreet mi</strong>. Phasellus eu tortor vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim <strong>condimentum id</strong>. Etiam eget iaculis tellus. Varius sit amet.',
    image: 'plamen5kov.jpg',
}

//dynamic icon
const socialMediaInfo = [{
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/plamen-petkov-4b6630a9/',
    displayName: 'linkedin/plamen5kov'
},

{
    name: 'github',
    link: 'https://github.com/plamen5kov',
    username: 'plamen5kov',
    displayName: 'github/plamen5kov'
},
]


const contactInfo = [
    {
        name: 'envelope',
        context: '5kov.p@proton.me',
        size: '20px',
        style: "font-size:20px;margin-right: 10px;",
        link: 'mailto:5kov.p@proton.me'
    },
    {
        name: 'phone-square',
        context: '+359885518383',
        size: '23px',
        style: "font-size:23px;margin-right: 10px;",
        link: 'tel:+359885518383'
    },
]

const summaryInfo =
    'I don\'t mind responsibility and taking ownership of everything that I become envolved in, but most of all I like challenges and I\'m always eager to learn. I take pride in my work!<br>I usually get tasked with problems that have no known solution and I am eager and happy to carve the initial path. I enjoy working on architecture that fits business needs and have gained considerable experience in this throughout my career.<br>I care deeply about sharing my knowledge as well as learning what I can from the people I work with, that\'s why I\'ve done several tech talks and have been a teacher in several schools and academies in the past. You can find links for those in the achievements section.<br>Something I appreciated over the years is the fact I have never had a problem finding common language with any of my past and current teammates.<br>In my spare time I am a raspberry pi enthusiast and a cyclist when I have spare time.<br>Big Linux fan!'


const experinceInfo = [
    {
        workAt: 'Agreena',
        position: 'Senior Software Engineer',
        duration: 'Jan 2022 – Present',
        description: '• Served as interim team lead for <strong>1 year</strong> managing a <strong>4-person</strong> development team, delivering all features within <strong>10%</strong> estimation accuracy while maintaining code quality standards including <strong>300-line</strong> service limits and pre-commit hook enforcement<br>• Designed highly normalized database architecture ensuring maximum flexibility to accommodate uncertain business direction, enabling seamless schema evolution and data model adaptability as business requirements emerged<br>• Architected and developed <strong>4</strong> NestJS microservices by breaking down a monolith, maintaining <strong>100%</strong> test coverage and reducing bug tickets by <strong>50%</strong>, while enforcing strict linting rules that saved <strong>3 weeks</strong> of migration time through improved code decoupling<br>• Optimized CI/CD pipeline by implementing parallel test execution across <strong>4</strong> jobs (<strong>3.5x</strong> faster) and GitHub Actions automation, enabling release frequency to increase from monthly to <strong>twice daily</strong> with significantly fewer production deployment failures<br>• Integrated Honeycomb observability platform reducing mean time to bug resolution from <strong>2 days</strong> to <strong>3-4 hours</strong> by implementing comprehensive request tracing and logging across all microservices',
        techs: ["NestJs", "k8s", "Microservices", "Express", "Jest", "TypeORM", "PostgreSQL", "MikroORM", "Postgres", "Nodejs", "Docker", "Git"]
    },
    {
        workAt: 'Atscale',
        position: 'Software Engineer',
        duration: 'Oct 2020 – Present',
        description: '• Developed and optimized semantic layer middleware translating BI tool queries to SQL across multiple data warehouses, processing <strong>2-3 TB</strong> of data daily and accelerating query response times by <strong>1.2-3x</strong> through automated aggregation and reuse of common subqueries<br>• Engineered query optimization algorithms improving overall system response time by <strong>5%</strong> by analyzing and optimizing query execution patterns across the platform<br>• Maintained integrations with major data warehouse platforms (Databricks, Snowflake, Postgres, Apache Hive/Impala) enabling unified semantic layer that eliminated platform-specific SQL development requirements for business users<br>• Ensured SaaS platform reliability for all Atscale partners by implementing comprehensive pressure testing covering diverse query scenarios and optimization edge cases',
        techs: ["Scala", "Docker", "PostgreSQL"]
    },
    {
        workAt: 'News UK',
        position: 'TechLead Android Software Engineer',
        duration: 'Aug 2019 - Oct 2020',
        description: '• Led <strong>2-person</strong> Android team maintaining News UK app (<strong>100k+</strong> downloads) and accelerated release cadence from once every <strong>2 months</strong> to <strong>weekly</strong> by establishing Jenkins CI/CD pipeline with automated deployment to Play Store<br>• Spearheaded migration from Jenkins to Circle CI achieving <strong>4x</strong> faster build times through parallelization and smoke testing implementation, while integrating Git and Slack for enhanced process transparency<br>• Designed and implemented comprehensive "way of working" framework including ticket templates with testing criteria and PR review standards, reducing average code review time from <strong>3 days</strong> to <strong>1 day</strong><br>• Improved cross-team collaboration and QA efficiency by establishing structured ticket creation process with explicit testing sections, reducing clarification requests and streamlining development workflow',
        techs: ["Kotlin", "Java", "Jenkins", "Circle CI", "Retrofit", "RxJava", "OkHttp", "JUnit", "Robolectric"]
    },
    {
        workAt: 'Paysafe Group',
        position: 'TechLead Software Engineer',
        duration: 'Apr 2018 – Aug 2019',
        description: '• Led <strong>3-person</strong> Android team managing Skrill and Neteller payment processing applications serving <strong>36 million</strong> combined users, achieving <strong>65%</strong> code module reusability by architecting shared design system, components, and translation framework<br>• Refactored legacy Neteller codebase by developing <strong>50+</strong> reusable common components and systematically replacing modules to match Skrill standards, increasing test coverage from <strong>20%</strong> to <strong>85%</strong> while ensuring business requirement compliance<br>• Contributed to backend infrastructure modernization by assisting in microservices integration using Java Spring Boot, supporting the migration from monolithic architecture to distributed services alongside Android application development<br>• Established automated code quality processes including formatting enforcement, peer review standards, and test automation, reducing bugfix time from <strong>1 week</strong> to <strong>1 day</strong> through improved logging and decreasing PR review time from <strong>3-4 days</strong> to <strong>1 day</strong><br>• Ensured PCI compliance and enhanced security posture by implementing financial industry communication standards and raising minimum Android support level to eliminate known exploits on older devices',
        techs: ["Kotlin", "Android", "Jenkins", "Java", "Spring Boot", "Retrofit", "RxJava"]
    },
    {
        workAt: 'Progress',
        position: 'Software Engineer',
        duration: 'Jun 2015 – Apr 2018',
        description: '• Optimized NativeScript Android runtime transpilation speed by <strong>2.4x</strong> by reducing JNI interface overhead, enabling faster JavaScript-to-native code conversion for improved application performance<br>• Architected and executed Google V8 JavaScript engine upgrade to major version with JIT compiler integration, delivering equivalent application speed improvements while implementing Ignition interpreter in <strong>2016</strong> to significantly reduce memory usage on small memory Android devices compared to TurboFan and Crankshaft<br>• Contributed as top contributor to NativeScript android-runtime open source project, implementing Node.js standard APIs from specification, developing features, and embedding JavaScript runtime into Android applications using C++ and V8<br>• Integrated NativeScript core product into Telerik Platform through stress testing, performance optimization, and development of wrapping modules leveraging runtime capabilities',
        techs: ["C++", "Javascript", "NodeJs", "Java", "V8", "Node"]
    }
]
const projectsInfo = [
    {
        name: 'Aurea',
        duration: '2021-Present',
        links: ["https://www.aurea.bg"],
        description: 'An e-commerce site, which I\'ve done the backend for entirely on NodeJs combined with Typescript, Express, Passport.'
    },
    {
        name: 'ProjectCatalyst vCA-tool',
        duration: '2022',
        links: ["https://github.com/Project-Catalyst/vca-tool", "https://github.com/Project-Catalyst/ca-tool", "https://github.com/Project-Catalyst/voter-tool"],
        description: 'Working with Vue js to help along with the blockchain governance phase.'
    },
    {
        name: 'NativeScript',
        duration: '2015 – 2018',
        links: ["https://github.com/NativeScript", "https://github.com/NativeScript/android-runtime"],
        description: 'Worked on the CLI and top contributor in the android-runtime'
    },
    {
        name: 'JavaScript chatbot',
        duration: '2018',
        links: ["https://github.com/Plamen5kov/plamen5kov-bot"],
        description: 'A JavaScript chatbot using Watson. Conversation, facebook Messenger API and the google YouTube API. Just a side project for experimenting with a new technology.'
    },
    {
        name: 'JavaScript static analyzer',
        duration: '2016 – 2018',
        links: ["https://github.com/Plamen5kov/ast_parser"],
        description: 'A static js analyzer that gathers  meta information in the form of AST. Generating java classes based on JavaScript meta information. Built on top of babel compiler. Using eclipse open source tooling to generate java code based on the extracted js information.'
    },
    {
        name: 'iOS app',
        duration: '2015',
        links: ["https://github.com/Plamen5kov/YouTubePlaylist"],
        description: 'A small iOS application, using the YouTube sdk to handle missing functionality in the YouTube playlists.'
    },
    {
        name: 'Windows phone app',
        duration: '2014',
        links: ["https://github.com/Plamen5kov/MindMap"],
        description: 'A simple mind map for windows phone'
    },
]

const educationInfo = [
    {
        school: 'Varna Free University "Chernorizets Hrabar"',
        location: 'Varna,Bulgaria',
        title: 'Bachelor\'s degree, Information Technology',
        duration: '2015 – 2018',
        description: '',
    },
    {
        school: 'Telerik Software Academy ',
        location: 'Sofia,Bulgaria',
        title: 'Mobile Developer, Information Technology',
        duration: '2013 – 2014',
        description: '',
    },
    {
        school: 'Sofia University St. Kliment Ohridski',
        location: 'Sofia,Bulgaria',
        title: 'Economics',
        duration: '2011 – 2014',
        description: '',
    }
]

const achievementsInfo = [
    {
        title: 'Telerik Academy lecturer',
        duration: '2016 - 2019',
        links: ["https://www.telerikacademy.com/"]
    },
    {
        title: 'Software University lecturer',
        duration: 'Jun,2018 - Sep, 2018',
        links: ["https://softuni.bg/trainings/1879/nativescript-development-june-2018"],
    },
    {
        title: 'Dev.BG speaker',
        duration: 'Oct,2018',
        links: ["https://bit.ly/2EsElLX"],
    },
]

const skillInfo = [
    {
        name: 'Typescript, Javascript',
        rate: 95,
    },
    {
        name: 'NestJs, NodeJs',
        rate: 94,
    },
    {
        name: 'Docker, Kubernetes',
        rate: 92,
    },
    {
        name: 'Java, Kotlin',
        rate: 90,
    },
    {
        name: 'Scala',
        rate: 88,
    },
    {
        name: 'Python',
        rate: 80,
    },
    {
        name: 'VueJS',
        rate: 50,
    },
    {
        name: 'C++',
        rate: 40,
    },
]

const otherSkillInfo = ['Nginx', 'Git', 'Jenkins', 'Jira']

const languageInfo = [{
    name: 'Bulgarian',
    rate: 5,
    level: 'Native',
},
{
    name: 'English',
    rate: 4,
    level: 'Advanced',
}
]

const interestInfo = [{
    name: 'Book reader',
    description: "Big epic fantasy reader",
},
{
    name: 'Biking',
    description: "I've got the scars to prove it",
},
{
    name: 'Tinkering with microcontrollers',
    description: "",
}
]

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
    otherSkillInfo
}