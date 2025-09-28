import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [changeColor, setChangeColor] = useState(false);

  const handleColorChange = (e) => {
    setChangeColor(true);
  };

  console.log(changeColor);
  return (
    <>
      <aside className="col-12 col-md-2 bg-light d-flex flex-column p-3">
        <div className="logo mb-4">
          <Link className="fs-1 fw-bold text-success text-decoration-none">
            SyncMate
          </Link>
        </div>

        <ul className="navbar-nav">
          <li onClick={(e) => setChangeColor(true)} className="nav-item">
            <Link
              className={`nav-link ${
                changeColor ? `text-success` : `text-secondary`
              }`}
              to="/dashboard"
            >
              <i className="bi bi-window-dock me-2"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={(e) => setChangeColor(true)}
              className={`nav-link ${
                changeColor ? `text-success` : `text-secondary`
              }`}
              to="/projects"
            >
              <i className="bi bi-ui-radios-grid me-2"></i> Projects
            </Link>
          </li>
          <li onClick={handleColorChange} className="nav-item">
            <Link className="nav-link text-secondary" to="/teams">
              <i className="bi bi-people-fill me-2"></i> Team
            </Link>
          </li>
          <li onClick={handleColorChange} className="nav-item">
            <Link className="nav-link text-secondary" to="/report">
              <i className="bi bi-bar-chart-line-fill me-2"></i> Report
            </Link>
          </li>
          <li onClick={handleColorChange} className="nav-item">
            <Link to="/settings" className="nav-link text-secondary">
              <i className="bi bi-nut-fill me-2"></i> Setting
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
