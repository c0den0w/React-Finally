import "./NavBar.css";
export default function NavBar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}