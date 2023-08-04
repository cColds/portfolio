function Nav() {
  return (
    <nav className="flex px-12 py-4 justify-between items-center">
      <a
        href="/"
        className="text-xl text-black bg-accent rounded-full w-8 h-8 flex items-center justify-center"
        aria-label="home"
        title="Logo"
      >
        <span>C</span>
      </a>

      <ul className="flex gap-4 justify-self-end">
        <li className="transition-colors duration-300 ease-in-out hover:text-accent">
          <a href="#about">About</a>
        </li>
        <li className="transition-colors duration-300 ease-in-out hover:text-accent">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
