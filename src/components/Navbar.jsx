import { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handelToggle = (e) => {
    if (e.target.checked) {
      setTheme("cupcake");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="navbar bg-base-100  shadow-lg px-4 z-10 fixed">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl gap-0 text-primary font-bold">
          Byte<span className="text-secondary">Blaze</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal  px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-primary" : "font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({isActive})=> isActive ? "font-bold text-primary": "font-bold"}>
              Blogs
            </NavLink>
          </li>
          <li>
              <NavLink to="/bookmarks" className={({isActive})=> isActive ? "font-bold text-primary": "font-bold"}>
             Bookmarks
            </NavLink>
          </li>
        </ul>
        <label className="toggle text-base-content">
          <input
            onChange={handelToggle}
            type="checkbox"
            value="synthwave"
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
