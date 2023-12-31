import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex px-12 py-4 justify-between items-center">
      <Link
        onClick={() => window.scrollTo({ left: 0, top: 0 })}
        className="text-xl text-center text-accent border-accent border-2 rounded-full w-8 h-8"
        aria-label="home"
        title="Logo"
        to="/"
      >
        C
      </Link>

      <ul className="flex gap-4 justify-self-end">
        <li className="transition-colors duration-300 ease-in-out hover:text-accent">
          <a href="/#about">About</a>
        </li>
        <li className="transition-colors duration-300 ease-in-out hover:text-accent">
          <a href="/#projects">Projects</a>
        </li>
        <Link to="/blogs">Blogs</Link>
        <li></li>
      </ul>
    </nav>
  );
}

export default Nav;
