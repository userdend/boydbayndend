import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li>
          <Link to="welcome-section" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
