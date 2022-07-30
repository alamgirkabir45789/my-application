import { Link, Outlet } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import "../../css/Layout.css";
const Layout = () => {
  return (
    <div style={{ fontFamily: "fangsong" }}>
      <nav className="nav justify-content-center ">
        <ul className="nav ">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/project">
              Project
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              contact
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>{" "}
          <li>
            <Link className="nav-link" to="/cascade">
              Cascade
            </Link>
          </li>
          {/* <li>
            <Link className="nav-link" to="/mess">
              Hotel
            </Link>
          </li> */}
          <li className="dropdown">
            <Link className="nav-link " to="/mess">
              Hotel
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="nav-link " to="/mess">
                  Link-1
                </Link>{" "}
              </li>
              <li>
                <Link className="nav-link " to="/mess">
                  Hotel
                </Link>{" "}
              </li>
              <li>
                <Link className="nav-link " to="/mess">
                  Hotel
                </Link>{" "}
              </li>
            </ul>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Product
            </Link>
          </li>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle nav>Customer</DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link className="nav-link" to="/customer">
                  Customer
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className="nav-link" to="/mail">
                  Mail
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <li>
            <Link className="nav-link " to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="nav-link " to="/test">
              Test
            </Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />

      <div className="footer">
        <footer>
          <p>&copy; 2022 alamgirkabir.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
