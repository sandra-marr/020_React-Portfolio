import { NavItemH } from './NavItem';
import { IoMenu } from 'react-icons/io5';

const navLinks = [ 
    {
        name: "About",
        link: '/',
        id: 1,
    },
    {
        name: "Skills",
        link: '/skills',
        id: 2,
    },
    {
        name: "Work",
        link: '/work',
        id: 3,
    }, 
    {
        name: "Contact",
        link: '/contact',
        id: 4,
    },
    {
        name: "Dog Days",
        link: '/dogdays',
        id: 5,
    }
]

function NavBar() {

    return (
        <nav className="navbar sticky-top navbar-expand-sm rounded-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="nav-btn-toggle"><IoMenu /></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown" aria-expanded="false">
                    <ul className="navbar-nav">
                        {navLinks.map((item) => (
                            <NavItemH key={item.id} name={item.name} link={item.link} ></ NavItemH>  
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

