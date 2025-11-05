import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

const ProjectManagement = () => {
  const { taskData, deleteTask } = useTaskContext();
  const { projectId } = useParams();

  // find all tasks belonging to this project
  const projectTasks = taskData?.filter(
    (task) => task.project._id === projectId
  );

  const projectInfo = projectTasks?.[0]?.project; // to show project name/description

  return (
    <section className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <Sidebar />
        <section className="col-12 col-md-10 p-4">
          {/* Project Header */}
          <div className="mt-4">
            <h2>{projectInfo?.name}</h2>
            <p className="text-muted">{projectInfo?.description}</p>
          </div>

          {/* Filter Bar */}
          <div className="mt-5">
            <div className="d-inline gap-1">
              <p className="me-3 d-inline-flex">Sort By:</p>
              <span className="btn btn-outline-secondary rounded-pill btn-xs">
                Priority Low-High
              </span>
              <span className="ms-3 btn btn-outline-secondary rounded-pill btn-xs">
                Priority High-Low
              </span>
              <span className="ms-3 btn btn-outline-secondary rounded-pill btn-xs">
                Newest First
              </span>
              <span className="ms-3 btn btn-outline-secondary rounded-pill btn-xs">
                Oldest First
              </span>

              {/* Right side actions */}
              <div className="d-flex float-end">
                <form className="me-3">
                  <select className="form-select">
                    <option value="#">Filter</option>
                  </select>
                </form>

                {/* Add Task Modal Button */}
                <button
                  className="btn btn-success btn-sm ms-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#taskModal"
                >
                  + New Task
                </button>
              </div>
            </div>
          </div>

          {/* Task List */}
          <section className="mt-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-secondary bg-info-subtle" scope="col">
                    TASKS
                  </th>
                  <th className="text-secondary bg-info-subtle" scope="col">
                    OWNER
                  </th>
                  <th className="text-secondary bg-info-subtle" scope="col">
                    TAGS
                  </th>
                  <th className="text-secondary bg-info-subtle" scope="col">
                    TEAM
                  </th>
                  <th className="text-secondary bg-info-subtle" scope="col">
                    STATUS
                  </th>
                </tr>
              </thead>

              <tbody>
                {projectTasks?.length > 0 ? (
                  projectTasks.map((task) => (
                    <tr key={task._id}>
                      <td>{task.name}</td>
                      <td>
                        {task.owners?.map((owner) => (
                          <span key={owner._id}>{owner.name} ,</span>
                        ))}
                      </td>
                      <td>{task.tags?.join(", ")}</td>
                      <td>{task.team?.name}</td>
                      <td>
                        <span
                          className={`badge badge-sm ${
                            task.status === "To Do"
                              ? "bg-primary"
                              : task.status === "In Progress"
                              ? "bg-warning"
                              : task.status === "Completed"
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                        >
                          {task.status}
                        </span>

                        {/* Delete Button */}
                        <span
                          onClick={() => deleteTask(task._id)}
                          className="float-end text-danger"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </span>

                        {/* Edit Button (future use) */}
                        <span
                          className="float-end text-primary me-3"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">
                      No tasks found for this project.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </section>
  );
};

export default ProjectManagement;
