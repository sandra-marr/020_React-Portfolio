import { Link } from 'react-router-dom';

export function NavItemH(props) {

    return (
        <li className="nav-item nav-btn autocollapse">
            <Link className="nav-link" to={props.link}>{props.name}</Link>
        </li>
    );
}


export function NavItemF(props) {

    return (
        <li className="nav-item">
            <a className="footer-btn active rounded-pill p-2" aria-current="page" href={props.link} target="_blank" rel="noreferrer">
                {props.icon}
            </a>
        </li>
    );
}

