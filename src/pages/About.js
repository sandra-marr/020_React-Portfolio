import Container from 'react-bootstrap/Container';
import profile from '../images/IMG_1868.jpeg'

export default function AboutPage() {
    return (
        <Container fluid className="d-flex flex-column justify-content-center">
            <h2 className="accent pb-2 text-center">About Me</h2>
            <img id="profile" className="mb-3" src={ profile } alt="Sandy Marr Profile" />
            <p>My name is Sandra Marr and I am an aspiring web developer, with a focus on front-end development. Since March of 2021, I discovered a passion in coding and have decided to make a career shift into web development. In early September, I graduated from the University of Washington's Full-Stack Coding Bootcamp Program. While there is still so much to learn, I believe that I have the base knowledge and skills needed to succeed in this industry. To date my professional experience has focused on Project Management, Structural Design Engineering, and Test Engineering, with some volunteer work peppered in as a treasurer for a non-profit.
            </p>
            <p>
            Starting in March, I was just learning about HTML and CSS. Through out the program there have been many challenges
            and opportunities, but with those challenges, my skillset has grown substantially. Over the 6 month program, I have refactored code, designed and developed front-end, back-end and full stack applications both on my own and through team collaboration. As I learn more about becoming a web developer, I'm hoping to bring my drive, passion, and prior knowledge into this new career.
            </p>
            <p>
            Outside of work, you can find me spending time outside with my husband and our dog. We love taking quick day hikes through Discovery Park in Seattle, and sailing out on the Puget Sound. Anything that gets us moving and in the sun is a plus! I'm also a big fan of Crossfit and have found a great community at the local box, Valkyrie Strength and Conditioning.
            </p>
        </Container>
    );
}