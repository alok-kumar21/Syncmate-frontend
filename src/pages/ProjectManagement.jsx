import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
const ProjectManagement = () => {
  const { taskData, projectData } = useTaskContext();
  const { projectId } = useParams();

  const proejctDetails = taskData?.find(
    (project) => project.project._id == projectId
  );

  console.log(proejctDetails);
  return (
    <>
      <section className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          <Sidebar />
          <section className="col-12 col-md-10 p-4">
            <section>
              <div className="mt-4">
                <h2>{proejctDetails?.project.name}</h2>
                <p className="text-muted">
                  {proejctDetails?.project.description}
                </p>
              </div>
              {/* filter */}
              <div className=" mt-5">
                <div className="d-inline gap-1">
                  <p className="me-3 d-inline-flex">Sort By:</p>
                  <span className=" btn btn-outline-secondary rounded-pill btn-xs">
                    priority Low-High
                  </span>
                  <span className="ms-3 btn btn-outline-secondary rounded-pill btn-xs">
                    priority High-Low
                  </span>
                  <span className="ms-3 btn btn-outline-secondary rounded-pill btn-xs">
                    Newest First
                  </span>
                  <span className="ms-3 btn btn-outline-secondary rounded-pill btn-xs">
                    Oldest First
                  </span>
                  <div className="d-flex float-end">
                    <form className="me-3">
                      <select className=" form-select" name="" id="">
                        <option value="#">Filter</option>
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
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
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
                </div>
              </div>
            </section>
            {/* task list */}
            <section className="mt-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th
                      className="text-secondary"
                      style={{ backgroundColor: "lightblue" }}
                      scope="col"
                    >
                      TASKS
                    </th>
                    <th
                      className="text-secondary"
                      style={{ backgroundColor: "lightblue" }}
                      scope="col"
                    >
                      OWNER
                    </th>
                    <th
                      className="text-secondary"
                      style={{ backgroundColor: "lightblue" }}
                      scope="col"
                    >
                      PRIORITY
                    </th>
                    <th
                      className="text-secondary"
                      style={{ backgroundColor: "lightblue" }}
                      scope="col"
                    >
                      DUE ON
                    </th>
                    <th
                      className="text-secondary"
                      style={{ backgroundColor: "lightblue" }}
                      scope="col"
                    >
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <span className="badge bg-primary badge-sm">To Do</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      {" "}
                      <span className="badge bg-success badge-sm">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@social</td>
                    <td>
                      {" "}
                      <span className="badge bg-warning badge-sm">
                        In Progress
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProjectManagement;
