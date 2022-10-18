const introInfo = {
    name: 'Plamen Petkov',
    title: 'Software Engineer',
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
        context: 'plamen.krasimirov.petkov@gmail.com',
        size: '20px',
        style: "font-size:20px;margin-right: 10px;",
        link: 'mailto:plamen.krasimirov.petkov@gmail.com'
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
    'I don\'t mind responsibility and taking ownership of everything that I take up, but most of all I like challenges and I\'m always eager to learn and taking pride in my work. I usually get tasked with problems that have no known solution and I am eager and happy to carve the initial path. I care deeply about sharing my knowledge as well as learning what I can from the people I work with, that\'s why I\'ve done several tech talks and have been a teacher in several schools and academies in the past. You can find links for those in the achievements section. Something I appreciated over the years is the fact I have never had a problem finding common language with any of my past and current teammates. In my spare time I am a raspberry pi enthusiast and a cyclist when I have spare time. Community Advisor for Project Catalyst in my spare time for fund 6,7,8 and 9. Big Linux fan!'


const experinceInfo = [
    {
        workAt: 'Freelance',
        position: 'Freelance Developer',
        duration: 'Aug 2018 – Present',
        description: 'I\'ve been doing mostly NodeJS freelance backend projects of custom e-commerce sites that couldn\'t be done using generic site generation tools like wordpress. Since 2021 I\'ve become really interested in blockchain. In the blockchain space, I\'ve done mostly freelance work and I was responsible for the backend infrastructure and design of several projects along the way. Developed a couple of smart contracts as well, but mostly been doing backend work using Nodejs and accomodating infrastructure through platforms. The ecosystem has gotten me interested in distributed systems work specializing in fault tollerance.',
        techs: ["Nodejs", "Docker", "Vue", "React"]
    },
    {
        workAt: 'Atscale',
        position: 'Software Engineer',
        duration: 'Oct 2020 – Present',
        description: 'In my current occupation I\'m responsible for the development and support of a SaaS big data processing solution. The general idea is connecting BI tools like Tableau, an inhouse developed tool and others with all kinds of popular data warehouses like Postgres, Redshift, Snowflake and Hive to name a few. Besides that I\'ve been deeling with big data processing and aggregation automation optimizing the business query response speeds. This provides the business users with a familiar BI environment to ask their business questions, combiding multiple data warehouses to answer a single business query if necessary.',
        techs: ["Scala", "Docker", "PostgreSQL"]
    },
    {
        workAt: 'News UK',
        position: 'Senior Android Software Engineer',
        duration: 'Aug 2019 - Oct 2020',
        description: 'I was in charge of a small team developing the NewsUK Android applications and was responsible for some devops work ensuring the continuous integration and deployment of the apps to the store. I am proud to have done the initial push for the testing pipeline migration from Jenkins to circle CI and automating and integrating with git and slack for more transparency and resiliance of the processes.',
        techs: ["Kotlin", "Java", "Retrofit", "RxJava", "OkHttp", "JUnit", "Robolectric"]
    },
    {
        workAt: 'Paysafe Group',
        position: 'Senior Android Software Engineer',
        duration: 'Apr 2018 – Aug 2019',
        description: 'I lead a small team of 3 people working on the Skrill and Neteller android applications. I was part of the team dealing with payment processing. I\'ve done a lot of infrastructure building as well and pushed trough some new automated processes for making sure the team has a consisten code output including formatting, minimal count of core review peers and test automation. Really focused on improving legacy code instead of just supporting it and that eventually enabled the possibility of merging the two android applications into one, which I\'m very proud of. I\'ve done a lot of work in making sure all security standards of communication were followed and learned a lot about the level any application must have in a financial setting.',
        techs: ["Kotlin", "Android", "Jenkins", "Java", "Retrofit", "RxJava"]
    },
    {
        workAt: 'Progress',
        position: 'Software Engineer',
        duration: 'Jun 2015 – Apr 2018',
        description: 'One of the open source projects I\'ve poured my life and soul in - NativeScript. I was instrumental for embedding a javascript runtime into an android application. It was challenging work where all your available documentation is in C header files. I developed features, helping with embedding and integrating the core product into the Telerik(now Progress) Platform. Working on the NativeScript\'s android-runtime, doing feature development, NodeJs standards implementaion from specification, performance optimizations, stress tests, integration of the wrapping modules taking advantage of the runtime. This still is one of the jobs where I am so gratefull to have had and to be able to study under the incredible people working there.',
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
        name: 'Javascript',
        rate: 90,
    },
    {
        name: 'Scala',
        rate: 88,
    },
    {
        name: 'C++',
        rate: 70,
    },
    {
        name: 'Java, Kotlin',
        rate: 95,
    },
    {
        name: 'VueJS',
        rate: 50,
    },
    {
        name: 'Nodejs',
        rate: 94,
    },
    {
        name: 'Docker',
        rate: 85,
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