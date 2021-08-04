import profile from '../images/Profile.jpeg'

function Header() {
    return (
        <header className="w-100 d-flex justify-content-around align-items-center p-2">
            <h1>SRM Web <span id="tagline">Full-Stack Web Development</span></h1>
            <img id="profile" className="rounded-circle" src={ profile } alt="Sandy Marr Profile" />
        </header>
    );
}

export default Header;