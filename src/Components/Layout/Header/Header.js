import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="fixed-top w-100 ">
      <div className="container d-flex align-items-center justify-content-center h-100 ">
        <nav className="col-12 d-flex align-items-center">
          <ul className="col-12 d-flex list-unstyled justify-content-center m-0">
            <li className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-6 col-6 ">
              <NavLink
                className={(a) =>
                  a.isActive ? "navLink activeNavLink" : "navLink"
                }
                to="/"
              >
                Users List
              </NavLink>
            </li>
            <li className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-6 col-6 ">
              <NavLink
                className={(a) =>
                  a.isActive ? "navLink activeNavLink" : "navLink"
                }
                to="add-user"
              >
                Add User
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
