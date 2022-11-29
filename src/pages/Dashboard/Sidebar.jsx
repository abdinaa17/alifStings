import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { MdDashboardCustomize, MdLogout } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

// Local Imports
import "./Dashboard.css";
const Sidebar = ({ logOutUser }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <aside className={isSidebar ? "sidebar" : "sidebar active"}>
      <div className="flex">
        <BiMenu
          color="white"
          size={24}
          onClick={() => setIsSidebar(!isSidebar)}
        />
        <div></div>
      </div>
      <div className="flex">
        <MdDashboardCustomize color="white" size={24} />
        <Link className="visible" to="/dashboard">
          Dashboard
        </Link>
      </div>
      <div className="flex">
        <AiFillProfile color="white" size={24} />
        <Link className="visible" to="/dashboard/profile">
          Profile
        </Link>
      </div>
      <div className="flex">
        <MdLogout color="white" size={24} />
        <span
          className="visible text-white"
          onClick={logOutUser}
          style={{ cursor: "pointer" }}
        >
          Log Out
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
