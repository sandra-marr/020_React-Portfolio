import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { NavItemF } from './NavItem';


const footerLinks = [
    {
        name: "LinkedIn",
        link: "http://www.linkedin.com/in/sandra-r-marr",
        icon: <AiFillLinkedin />,
        id: 1

    },
    {
        name: "GitHub",
        link: "https://github.com/sandra-marr",
        icon: <AiFillGithub />,
        id: 2

    },
    {
        name: "Contact",
        link: "mailto:srpeters44@gmail.com",
        icon: <HiOutlineMail />,
        id: 3

    },
]


function Footer() {
    return (
        <footer className="d-flex justify-content-center align-items-center fs-5" id="contact">
            <ul className="nav">
                {footerLinks.map((item) => (
                    <NavItemF key={item.id} name={item.name} link={item.link} icon={item.icon}></ NavItemF>  
                    ))
                }
            </ul>
        </footer> 
    );
}

export default Footer;