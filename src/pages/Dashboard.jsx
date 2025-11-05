import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
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
              {/* Modal button*/}
              <button
                className="btn btn-success btn-sm ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#projectModal"
              >
                + New Project
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="projectModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Create New Project
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <label htmlFor="" className="form-label">
                          Project Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Project Name"
                        />
                        <br />
                        <label htmlFor="" className="form-label">
                          Description
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Project Description"
                        />
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancle
                      </button>
                      <button type="button" className="btn btn-success">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
              {/* Modal button*/}
              <button
                className="btn btn-success btn-sm ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#taskModal"
              >
                + New Task
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="taskModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Create New Task
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <label htmlFor="" className="form-label">
                          Task Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Project Name"
                        />
                        <br />
                        <label htmlFor="" className="form-label">
                          Select Project
                        </label>
                        <select name="" className="form-control" id="">
                          <option value="#">Select Project</option>
                        </select>
                        <br />
                        <label htmlFor="" className="form-label">
                          Select Team
                        </label>
                        <select name="" className="form-control" id="">
                          <option value="#">Select Team</option>
                        </select>

                        <br />
                        <label htmlFor="" className="form-label">
                          Select Owners
                        </label>
                        <select name="" className="form-control" id="">
                          <option value="#">Select Owners</option>
                        </select>
                        <br />
                        <label htmlFor="" className="form-label">
                          Select Tags
                        </label>
                        <select name="" className="form-control" id="">
                          <option value="#">Select Tags</option>
                        </select>
                        <br />
                        <label htmlFor="" className="form-label">
                          Select Status
                        </label>
                        <select name="" className="form-control" id="">
                          <option value="#">Select Status</option>
                        </select>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancle
                      </button>
                      <button type="button" className="btn btn-success">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
