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
    'Most of all I like challenges and I\'m always eager to learn. I care deeply about sharing my knowledge as well as learning what I can from the people I work with. Community Advisor for Project Catalyst in my spare time for fund 6,7,8. Got involved with working on distributed systems. I believe crypto is the future and I want to be part of the solution by helping with the building blocks. Big Linux fan!'


const experinceInfo = [
    {
        workAt: 'Freelance',
        position: 'Blockchain Developer',
        duration: 'Aug 2021 – Present',
        description: 'blockchain, distributed systems work specializing in fault tollerance',
        techs: ["Nodejs", "Docker", "Raft Algo", "Vue"]
    },
    {
        workAt: 'Atscale',
        position: 'Software Engineer',
        duration: 'Oct 2020 – Present',
        description: 'Big data processing, optimization through aggregates',
        techs: ["Scala", "Docker", "PostgreSQL"]
    },
    {
        workAt: 'News UK',
        position: 'Senior Android Software Engineer',
        duration: 'Aug 2019 - Oct 2020',
        description: 'Developed desktopDeveloping all the NewsUK Android applications along with some devops work for the CD of the apps to the store along with the pipeline of tests.',
        techs: ["Kotlin", "Java", "Retrofit", "RxJava", "OkHttp", "JUnit", "Robolectric"]
    },
    {
        workAt: 'Paysafe Group',
        position: 'Senior Android Software Engineer',
        duration: 'Apr 2018 – Aug 2019',
        description: 'Worked on the Skrill and Neteller android applications. I was part of the team dealing with blockchain payment processing.',
        techs: ["Kotlin", "Android", "Jenkins", "Java", "Retrofit", "RxJava"]
    },
    {
        workAt: 'Progress',
        position: 'Software Engineer',
        duration: 'Jun 2015 – Apr 2018',
        description: 'Developing NativeScript android runtime features, helping with embedding and integrating the core product in Telerik Platform. Working on the NativeScript\'s android-runtime, doing feature development, performance optimizations, integration of modules taking advantage of the runtime.',
        techs: ["C++", "Javascript", "Java", "V8", "Node"]
    }
]
const projectsInfo = [
    {
        name: 'ProjectCatalyst vCA-tool',
        duration: '2022',
        links: ["https://github.com/Project-Catalyst/vca-tool", "https://github.com/Project-Catalyst/ca-tool", "https://github.com/Project-Catalyst/voter-tool"],
        description: 'Working with Vue js to help along with the blockchain governance phase'
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
        description: 'A JavaScript chatbot using Watson. Conversation, facebook Messenger API and the google YouTube API'
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