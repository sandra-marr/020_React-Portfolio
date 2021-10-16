import { NavItemH } from './NavItem';
import { Navbar, Nav } from 'react-bootstrap';

const navLinks = [ 
    {
        name: "Home",
        link: '/020_React-Portfolio',
        id: 1,
    },
    {
        name: "Skills",
        link: '/020_React-Portfolio/skills',
        id: 2,
    },
    {
        name: "Work",
        link: '/020_React-Portfolio/work',
        id: 3,
    }, 
    // {
    //     name: "Contact",
    //     link: '/020_React-Portfolio/contact',
    //     id: 4,
    // },
    {
        name: "Dog Days",
        link: '/020_React-Portfolio/dogdays',
        id: 5,
    }
]

function NavBar() {

    return (
        <Navbar expand="sm" className="sticky-top rounded-top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    {navLinks.map((item) => (
                        <NavItemH key={item.id} name={item.name} link={item.link} ></ NavItemH>  
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        
    );
}

export default NavBar;

