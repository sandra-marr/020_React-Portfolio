import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { SkillCard } from '../components/Cards';

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

export default function SkillsPage() {
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
        <p>For more information about my professional experience, please refer to my <Link className="text-reset" to='/020_React-Portfolio/SRMResume.pdf' target="_blank">resume</Link>.</p>
        </div>
    </Container>
    );
}