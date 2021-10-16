import Container from 'react-bootstrap/Container';
import profile from '../images/IMG_1868.jpeg'
import { Link } from 'react-router-dom';

export default function AboutPage() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }

    return (
        <Container fluid className="d-flex flex-column justify-content-center">
            <h2 className="accent pb-2 text-center">About Me</h2>
            <img id="profile" className="mb-3" src={ profile } alt="Sandy Marr Profile" />
            <p>My name is Sandra Marr and I am an aspiring web developer, with a focus on front-end development. Since March of 2021, I discovered a passion in coding and have decided to make a career shift into web development. In early September, I graduated from the University of Washington's Full-Stack Coding Bootcamp Program. While there is still so much to learn, I believe that I have the base knowledge and skills needed to succeed in this industry. To date my professional experience has focused on Project Management, Structural Design Engineering, and Test Engineering, with some volunteer work peppered in as a treasurer and accountant for a non-profit.
            </p>
            <p>
            Starting in March, I was just learning about HTML and CSS. Through out the program there have been many challenges
            and opportunities, but with those challenges, my skillset has grown substantially. Over the 6 month program, I have refactored code, designed and developed front-end, back-end and full stack applications both on my own and through team collaboration. As I learn more about becoming a web developer, I'm hoping to bring my drive, passion, and prior knowledge into this new career.
            </p>
            <p>
            Outside of work, you can find me spending time outside with my husband and our dog. We love taking quick day hikes through Discovery Park in Seattle, and sailing out on the Puget Sound. Anything that gets us moving and in the sun is a plus! I'm also a big fan of Crossfit and have found a great community at the local box, Valkyrie Strength and Conditioning.
            </p>
            <p>For more information about my professional experience, please refer to my <Link className="text-reset" to='/020_React-Portfolio/SRMResume.pdf' target="_blank">resume</Link>.</p>
            <div classNamr="container" style={style}>
                <img className="m-2" alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
                <img className="m-2" alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
                <img className="m-2" alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                <img className="m-2" alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
                <img className="m-2" alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                <img className="m-2" alt="UIKit" src="https://img.shields.io/badge/uikit-%233399ff.svg?style=for-the-badge&logo=uikit&logoColor=white"/>
                <img className="m-2" alt="Epxress.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                <img className="m-2" alt="NPM" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"/>
                <img className="m-2" alt="Insomnia" src="https://img.shields.io/badge/Insomnia-%235849BE.svg?style=for-the-badge&logo=insomnia&logoColor=white"/>
                <img className="m-2" alt="Handlbars" src="https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black"/>
                <img className="m-2" alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
                <img className="m-2" alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
                <img className="m-2" alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
                <img className="m-2" alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>
                <img className="m-2" alt="apollo-graphql" src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql"/>
            </div>
        </Container>
    );
}