import Container from 'react-bootstrap/Container';
import { WorkCard } from '../components/Cards';
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

export default function WorkPage() {
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