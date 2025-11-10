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
                    className="fs-3 bi bi-person text-secondary  dropdown-toggle"
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
          {/* Project filter */}
          <section>
            <div className="mt-5 d-flex">
              <h3 className="d-inline">Projects</h3>
              <form className="d-inline ms-4">
                <select className="form-select  shadow border-0" name="" id="">
                  <option value="">Filter Project</option>
                </select>
              </form>
              {/* create project button */}
              <CreateProjectForm />
            </div>
            <br />

            {/* projects */}
            <div className="row">
              {projectData?.map((project) => (
                <div key={project._id} className="col-12 col-md-4 mt-4">
                  <div className="card bg-light shadow border-0 ">
                    <div className="card-body">
                      <h4 className="p-2">{project.name}</h4>
                      <p className="text-secondary">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Task filter */}
          <section>
            <div className="mt-5 d-flex">
              <h3 className="d-inline">Tasks</h3>
              <form className="d-inline ms-4">
                <select className="form-select shadow border-0" name="" id="">
                  <option value="">Filter Tasks</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </form>

              {/* create task button */}
              <CreateTaskForm />
            </div>
            <br />

            {/* Tasks */}
            <div className="row">
              {taskData?.map((task) => (
                <div key={task._id} className="col-12 col-md-4">
                  <div className="card bg-light shadow border-0">
                    <div className="card-body">
                      {task.status === "To Do" ? (
                        <span className="badge text-bg-primary badge-sm">
                          {task.status}
                        </span>
                      ) : task.status === "In Progress" ? (
                        <span className="badge text-bg-warning badge-sm">
                          {task.status}
                        </span>
                      ) : task.status === "Completed" ? (
                        <span className="badge text-bg-success badge-sm">
                          {task.status}
                        </span>
                      ) : (
                        <span className="badge text-bg-danger badge-sm">
                          {task.status}
                        </span>
                      )}
                      <h4 className="p-2">{task.name}</h4>
                      <p className="text-secondary">
                        <i class="me-2 bi bi-person-circle"></i>
                        {task.owners?.map((user) => user.name)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
