import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

import CreateProjectForm from "./CreateProjectForm";
import CreateTaskForm from "./CreateTaskForm";

const Dashboard = () => {
  const { taskData, projectData } = useTaskContext();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // -------------------------
  // RECENT PROJECTS & TASKS
  // -------------------------
  const recentProjects = projectData
    ? [...projectData]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3)
    : [];

  const recentTasks = taskData
    ? [...taskData]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4)
    : [];

  return (
    <section className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <Sidebar />

        {/* Main Content */}
        <main className="col-12 col-md-10 p-4">
          <nav className="mt-2">
            <div className="container">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success me-3" type="submit">
                  Search
                </button>
                <div className="dropdown">
                  <i
                    className="fs-3 bi bi-person text-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>

                  <ul className="dropdown-menu mt-3">
                    <li>
                      <Link className="dropdown-item">Profile</Link>
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className="dropdown-item text-danger"
                      >
                        Logout<i className="ms-2 bi bi-box-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </nav>

          {/* ------------------ Projects Section ------------------ */}
          <section>
            <div className="mt-5 d-flex">
              <h3 className="d-inline">Recent Projects</h3>
              <form className="d-inline ms-4">
                <select className="form-select shadow border-0">
                  <option value="">Filter Project</option>
                </select>
              </form>

              <CreateProjectForm />
            </div>

            <br />

            {/* Recent Projects */}
            <div className="row">
              {recentProjects.map((project) => (
                <div key={project._id} className="col-12 col-md-4 mt-4">
                  <div className="card bg-light shadow border-0">
                    <div className="card-body">
                      <h4 className="p-2">{project.name}</h4>
                      <p className="text-secondary">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {recentProjects.length === 0 && (
                <p className="text-secondary mt-3">No recent projects found.</p>
              )}
            </div>
          </section>

          {/* ------------------ Tasks Section ------------------ */}
          <section>
            <div className="mt-5 d-flex">
              <h3 className="d-inline">Recent Tasks</h3>
              <form className="d-inline ms-4">
                <select className="form-select shadow border-0">
                  <option value="">Filter Tasks</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </form>

              <CreateTaskForm />
            </div>

            <br />

            {/* Recent Tasks */}
            <div className="row">
              {recentTasks.map((task) => (
                <div key={task._id} className="col-12 col-md-4 mt-4">
                  <div className="card bg-light shadow border-0">
                    <div className="card-body">
                      <span
                        className={`badge badge-sm ${
                          task.status === "To Do"
                            ? "text-bg-primary"
                            : task.status === "In Progress"
                            ? "text-bg-warning"
                            : task.status === "Completed"
                            ? "text-bg-success"
                            : "text-bg-danger"
                        }`}
                      >
                        {task.status}
                      </span>

                      <h4 className="p-2">{task.name}</h4>

                      <p className="text-secondary">
                        <i className="me-2 bi bi-person-circle"></i>
                        {task.owners?.map((user) => user.name).join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {recentTasks.length === 0 && (
                <p className="text-secondary mt-3">No recent tasks found.</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
