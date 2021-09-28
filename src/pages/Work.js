import Container from 'react-bootstrap/Container';
import { WorkCard } from '../components/Cards';
import KidsCorner from "../images/Kids_Corner.png";
import WeatherDashboard from "../images/Weather_Dashboard.png";
import Scheduler from "../images/Work_Day_Scheduler.png";
import Password from "../images/password.png";
import CodeQuiz from "../images/CodeQuiz.png";
import ReadMe from "../images/ReadmeGeneratorDemo.gif";
import FitnessTracker from "../images/FitnessTracker.gif";
import TechBlog from "../images/TheTechBlog.gif";
import AATA from "../images/AllAboutThatArt.png";
import GoodEnuff from "../images/GoodEnuff.png"


const workArr = [
    {
        id: 1,
        name: "MVC Tech Blog",
        src: TechBlog,
        alt: "This is a preview of the MVC Tech Blog App.",
        github: "https://github.com/sandra-marr/014_MVC-Tech-Blog",
        deployed: "https://desolate-dusk-70425.herokuapp.com/",
        languages: "HTML5, CSS3, JavaScript, Node.JS, Express.JS, MySQL, Heroku",
        description:"This application is a CMS style blog site where users can publish posts or comment existing posts from other users. It utilizes the MVC method. This application provides an easy to use and simple platform for sharing stories, discoveries and general information about tech."
    },
    {
        id: 2,
        name: "Kid's Corner",
        src: KidsCorner,
        alt: "This is a preview of the Kid's Corner landing page.",
        github: "https://github.com/sandra-marr/Kids-Corner",
        deployed: "https://sandra-marr.github.io/Kids-Corner",
        languages: "HTML5, CSS3, UIKit",
        description: "A front-end application that is geared toward learning for kids. This application allows users to select a state, read about facts, see pictures related to that state, and add it to their passport to track learning."
    },
    {
        id: 3,
        name: "All About That Art",
        src: AATA,
        alt: "This is a preview of the All About That Art Web App.",
        github: "https://github.com/sandra-marr/P2_All-About-That-Art",
        deployed: "https://stark-badlands-81359.herokuapp.com/",
        languages: "HTML5, CSS3, JavaScript, Node.JS, Express.JS, UIKit, Handlebars, MySQL",
        description:"All About That Art was built with the idea of creating a virtual art community. Our mission is to inspire individuals to create. We believe in art as therapy, promoting art and creating a safe place for artist and viewers. Users will now have a community to share art and connect with others who are all about that art. Users will be able to create profiles, as an Artist or an Art Viewer. Users will be able to view, comment, and learn about different artist. Users will also have access to our top picks to see art in person."
    },
    {
        id: 4,
        name: "Good Enuff",
        src: GoodEnuff,
        alt: "This is a preview of the Good Enuff Web App.",
        github: "https://github.com/sandra-marr/Good-Enough#technologies",
        deployed: "https://good-enuff.herokuapp.com/",
        languages: "HTML5, CSS3, Bootstrap, Node.JS, React, GraphQL",
        description:"This application is a to-do-list/tracker application where users can create an account, create a daily goal by choosing a default goal from the dropdown menu, set an end date for that goal, and add that to their goal tracker where they can mark if the goal has been completed for the day or not. Users are also able to edit existing goals where they can select a new end date, or end the goal. Overall our project goal is to discourage neverending lists, as well as overly complicated/specific list items."
    },
    {
        id: 5,
        name: "Weather Dashboard",
        src: WeatherDashboard,
        alt: "This is a preview of the Weather Dashboard App.",
        github: "https://github.com/sandra-marr/006_Weather-Dashboard/",
        deployed: "https://sandra-marr.github.io/006_Weather-Dashboard/",
        languages: "HTML5, CSS3, JavaScript, Bootstrap",
        description:"This application is a simple weather dashboard that allows the user to look up a specific location, or select from a preset list in order to see a 5 day forecast. "
    },
    {
        id: 6,
        name: "Workday Scheduler",
        src: Scheduler,
        alt: "This is a preview of the Work Day Scheduler App.",
        github: "https://github.com/sandra-marr/005_Work-Day-Scheduler/",
        deployed: "https://sandra-marr.github.io/005_Work-Day-Scheduler/",
        languages: "HTML5, CSS3, JavaScript, Bootstrap",
        description:"An online Daily Planner that allows for user input into specific time blocks, and utilizes local storage to save the user data."
    },
    {
        id: 7,
        name: "Workout Tracker",
        src: FitnessTracker,
        alt: "This is a preview of the Work Day Scheduler App.",
        github: "https://github.com/sandra-marr/018_Workout-Tracker",
        deployed: "https://fitness-tracker-018.herokuapp.com/",
        languages: "HTML5, CSS3, JavaScript, Node.JS, Express.JS, MongoDB, Heroku",
        description:"This application is a fitness tracker. It allows users to start or continue a workout and enter different exercises for that workout. It also allows users to review stats on the last 7 workouts completed. This can help users track their progress on the go."
    },
    {
        id: 8,
        name: "Password Generator",
        src: Password,
        alt: "This is a preview of the Password Generator App.",
        github: "https://github.com/sandra-marr/003_Password-Generator/",
        deployed: "https://sandra-marr.github.io/003_Password-Generator/",
        languages: "HTML5, CSS3, JavaScript",
        description:"Users can create unique passwords by selecting the desired length and use of characters."
    },
    {
        id: 9,
        name: "README Generator",
        src: ReadMe,
        alt: "This is a preview of the README Generator App.",
        github: "https://github.com/sandra-marr/009_Readme-Generator",
        deployed: "Command Line App",
        languages: "JavaScript, Node.JS",
        description:"This command line application guides the user through creating an effective readme file for their project. It populates the file with a table of contents, description, installation instructions, usage, tools, demos, etc."
    }, 
    {
        id: 10,
        name: "Code Quiz",
        src: CodeQuiz,
        alt: "This is a preview of the Code Quiz App.",
        github: "https://github.com/sandra-marr/004_Code-Quiz/",
        deployed: "https://sandra-marr.github.io/004_Code-Quiz/",
        languages: "HTML5, CSS3, JavaScript",
        description:"This online quiz allows users to test their coding knowledge through a timed quiz and review past high scores. There was a base structure put together with the index.html. From there, javascript was used to manipulate the DOM by adding and removing classes, and through event listeners on various buttons. This allows for the user to start the quiz and timer, cycle through questions, and submit their score."
    }, 
]

export default function WorkPage() {
    return (
         <Container fluid className="d-flex flex-column justify-content-center">
            <h2 className="accent pb-2 text-center">Work</h2>
            <div className="row w-100 scroller" data-bs-spy="scroll">
                <div className="row mb-3 px-0">
                    {workArr.map((item) => (
                        <WorkCard key={item.id} name={item.name} src={item.src} alt={item.alt} github={item.github} deployed={item.deployed} description={item.description} languages={item.languages}/>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}