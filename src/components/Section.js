import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { SkillCard, WorkCard, DogCard } from './Cards';
import Form from './Form';
import KidsCorner from "../images/Kids_Corner.png";
import WeatherDashboard from "../images/Weather_Dashboard.png";
import Scheduler from "../images/Work_Day_Scheduler.png";
import Horiseon from "../images/Horiseon.png";
import Password from "../images/password.png";
import CodeQuiz from "../images/CodeQuiz.png";
import ReadMe from "../images/ReadmeGeneratorDemo.gif";
import TeamProfile from "../images/TeamProfileGeneratorHTML.png";
import NoteTaker from "../images/Note-Taker.gif";
import EmployeeTracker from"../images/EmployeeTracker.gif";
import ECommerce from "../images/E-Commerce_Back-end.gif";
import TechBlog from "../images/TheTechBlog.gif";
import AATA from "../images/AllAboutThatArt.png";
import Bentley1 from "../images/dog1.JPG";
import Bentley2 from "../images/dog2.JPG";
import Bentley3 from "../images/dog3.JPG";

export function AboutPage() {
    return (
        <Container fluid className="d-flex flex-column justify-content-center">
            <h2 className="accent pb-2 text-center">About Me</h2>
            <p>Originally from Chicago, I moved across the country to Seattle in 2014 and have fallen in love with the Pacific Northwest. To date my professional experience has focused on Project Management, Structural Design Engineering, and Test Engineering, with some volunteer work peppered in as a treasurer for a non-profit. When faced with the challenges brought on by the pandemic, I stumbled upon an opportunity to learn about web development and discovered a new passion. I'm now enrolled as a student with University of Washington's Full-Stack Coding Bootcamp and am on a journey to a new career.</p>
            <p>Starting in March, I was just learning about HTML and CSS. Through out the program there have been many challenges and opportunities, but with those challenges, my skillset has grown substantially. Over the last 5 months I have refactored code, designed and developed front-end, back-end and full stack applications both on my own and through team collaboration. As I learn more about becoming a web developer, I'm hoping to bring my drive, passion, and prior knowledge into this new career.</p>
            <p>Outside of work, you can find me spending time outside with my husband and our dog. We love taking quick day hikes through Discovery Park in Seattle, and sailing out on the Puget Sound. Anything that gets us moving and in the sun is a plus! I'm also a big fan of Crossfit and have found a great community at the local box, Valkyrie Strength and Conditioning.</p> 
        </Container>
    );
}

const skillsArr = [
    {
        id: 1,
        name: "HTML",
    },
    {
        id: 2,
        name: "CSS",
    },
    {
        id: 3,
        name: "JavaScript",
    },
    {
        id: 4,
        name: "jQuery",
    },
    {
        id: 5,
        name: "Node.js",
    },
    {
        id: 6,
        name: "Moment.js",
    },
    {
        id: 7,
        name: "Express.js",
    },
    {
        id: 8,
        name: "Web-APIs",
    },
    {
        id: 9,
        name: "Third Party APIs",
    },
    {
        id: 10,
        name: "Server-Side APIs",
    },
    {
        id: 11,
        name: "Model View Controller",
    },
    {
        id: 12,
        name: "Object Oriented Programming",
    },
    {
        id: 13,
        name: "Object Relational Mapping",
    },
    {
        id: 14,
        name: "GitHub",
    },
    {
        id: 15,
        name: "Heroku",
    },
    {
        id: 16,
        name: "MySQL",
    },
    {
        id: 17,
        name: "MySQL WorkBench",
    },
    {
        id: 18,
        name: "MongoDB",
    },
    {
        id: 19,
        name: "Robo 3T",
    },
    {
        id: 20,
        name: "Insomnia",
    },
    {
        id: 21,
        name: "Cloudinary",
    },
    {
        id: 22,
        name: "Bootstrap",
    },
    {
        id: 23,
        name: "React-Bootstrap",
    },
    {
        id: 24,
        name: "UIKit",
    },
    {
        id: 25,
        name: "Sequelize",
    },
    {
        id: 26,
        name: "Nodemon",
    },
    {
        id: 27,
        name: "Express-Sessions",
    },
    {
        id: 28,
        name: "Inquirer",
    },
    {
        id: 29,
        name: "Jest",
    },
    {
        id: 30,
        name: "Multer",
    },
    {
        id: 31,
        name: "Multer-storage-cloudinary",
    },
    {
        id: 32,
        name: "Handlebars",
    },
    {
        id: 33,
        name: "DotEnv",
    },
    {
        id: 34,
        name: "ESLint",
    },
    {
        id: 35,
        name: "Prettier",
    },
    {
        id: 37,
        name: "Bcrypt",
    },
]

export function SkillsPage() {
    return (
        <Container fluid className="d-flex flex-column">
        <h2 className="accent pb-2 text-center">Languages, Skills, Applications:</h2>
        <div className="d-flex masonry-with-columns scroller" data-bs-spy="scroll">
            {skillsArr.map((item) => (
                <SkillCard key={item.id} name={item.name}/>
                ))
            }
        </div>
        <div className="pb-2 text-center">
            <br></br>
        <p>For more information about my professional experience, please refer to my <Link className="text-reset" to='/resume'>resume</Link>.</p>
        </div>
    </Container>
    );
}

const workArr = [
    {
        id: 1,
        name: "Kid's Corner",
        src: KidsCorner,
        alt: "This is a preview of the Kid's Corner landing page.",
        github: "https://github.com/sandra-marr/Project-1",
        deployed: "https://sandra-marr.github.io/Project-1/",
    },
    {
        id: 2,
        name: "Weather Dashboard",
        src: WeatherDashboard,
        alt: "This is a preview of the Weather Dashboard App.",
        github: "https://github.com/sandra-marr/006_Weather-Dashboard/",
        deployed: "https://sandra-marr.github.io/006_Weather-Dashboard/",
    },
    {
        id: 3,
        name: "Workday Scheduler",
        src: Scheduler,
        alt: "This is a preview of the Work Day Scheduler App.",
        github: "https://github.com/sandra-marr/005_Work-Day-Scheduler/",
        deployed: "https://sandra-marr.github.io/005_Work-Day-Scheduler/",
    },
    {
        id: 4,
        name: "Horiseon",
        src: Horiseon,
        alt: "This is a preview of Horiseon's landing page.",
        github: "https://github.com/sandra-marr/001_Refactor/",
        deployed: "https://sandra-marr.github.io/001_Refactor/",
    },
    {
        id: 5,
        name: "Password Generator",
        src: Password,
        alt: "This is a preview of the Password Generator App.",
        github: "https://github.com/sandra-marr/003_Password-Generator/",
        deployed: "https://sandra-marr.github.io/003_Password-Generator/",
    },
    {
        id: 6,
        name: "Code Quiz",
        src: CodeQuiz,
        alt: "This is a preview of the Code Quiz App.",
        github: "https://github.com/sandra-marr/004_Code-Quiz/",
        deployed: "https://sandra-marr.github.io/004_Code-Quiz/",
    },
    {
        id: 7,
        name: "README Generator",
        src: ReadMe,
        alt: "This is a preview of the README Generator App.",
        github: "https://github.com/sandra-marr/009_Readme-Generator",
        deployed: "Command Line App",
    },
    {
        id: 8,
        name: "Team Profile Generator",
        src: TeamProfile,
        alt: "This is a preview of the Team Profile Generator App.",
        github: "https://github.com/sandra-marr/010_Team-Profile-Generator",
        deployed: "Command Line App",
    },
    {
        id: 9,
        name: "Note Taker",
        src: NoteTaker,
        alt: "This is a preview of the Note Note-Taker App.",
        github: "https://github.com/sandra-marr/011_Express.js-NoteTaker",
        deployed: "https://peaceful-basin-67305.herokuapp.com/",
    },
    {
        id: 10,
        name: "Employee Tracker",
        src: EmployeeTracker,
        alt: "This is a preview of the Employee Tracker App.",
        github: "https://github.com/sandra-marr/012_MySQL-Employee-Tracker",
        deployed: "Command Line App",
    },
    {
        id: 11,
        name: "E-Commerce Backend",
        src: ECommerce,
        alt: "This is a preview of the E-Commerce Back-End App.",
        github: "https://github.com/sandra-marr/013_ORM-E-Commerce-Back-End",
        deployed: "Command Line App",
    },
    {
        id: 12,
        name: "MVC Tech Blog",
        src: TechBlog,
        alt: "This is a preview of the MVC Tech Blog App.",
        github: "https://github.com/sandra-marr/014_MVC-Tech-Blog",
        deployed: "https://desolate-dusk-70425.herokuapp.com/",
    },
    {
        id: 13,
        name: "All About That Art",
        src: AATA,
        alt: "This is a preview of the All About That Art Web App.",
        github: "https://github.com/sandra-marr/P2_All-About-That-Art",
        deployed: "https://stark-badlands-81359.herokuapp.com/",
    }
]

export function WorkPage() {
    return (
         <Container fluid className="d-flex flex-column justify-content-center">
            <h2 className="accent pb-2 text-center">Work</h2>
            <div className="row w-100 scroller" data-bs-spy="scroll">
                <div className="row mb-3 px-0">
                    {workArr.map((item) => (
                        <WorkCard key={item.id} name={item.name} src={item.src} alt={item.alt} github={item.github} deployed={item.deployed}/>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}

export function ContactPage() {
    return (
        <Form />
    );
}

const dogArr = [
    {
        id: 1,
        src: Bentley1,
        alt: "Bentley enjoys long walks through the neighborhood, but when he is tired and lays down, you are stuck until he is ready to keep going."
    },
    {
        id: 2,
        src: Bentley2,
        alt: "Bentley spent a lot of time at Ella Bailey Park in 2020, enjoying the views of the city and Mt. Rainier."
    },
    {
        id: 3,
        src: Bentley3,
        alt: "Everyonce in a while, Bentley will take a dip in the sound. Here he is after a swim near Golden Gardens."
    },

]

export function DogDaysPage() {
    return (
        <Container fluid className="d-flex flex-column justify-content-center">
            <h2 className="accent pb-2 text-center">Dog Days</h2>
            <p>Meet Bentley! He is a flat-coated retriever, extremly friendly, and always up for an adventure. He is a huge part of my life, so I couldn't miss an opportunity to share the joy.</p>
            <div className="container-fluid row">
                {dogArr.map((item) => (
                    <DogCard key={item.id} src={item.src} alt={item.alt}/>
                    ))
                }
            </div> 
            
        </Container>
    );
}