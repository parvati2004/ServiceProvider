import { FaHome, FaUser, FaRegListAlt, FaEnvelope } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaEnvelope /> Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <FaRegListAlt /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
