import "./NavBar.css";
export default function NavBar({ onBlogsClick, onMyWorkClick }) {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/about">About</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onBlogsClick?.(); }}>Blogs</a></li>
                    <li><a href="/" onClick={(e) => { e.preventDefault(); onMyWorkClick?.(); }}>Work</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}