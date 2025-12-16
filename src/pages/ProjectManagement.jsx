import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { useEffect, useState } from "react";
import CreateTaskForm from "./CreateTaskForm";

const ProjectManagement = () => {
  const { taskData, deleteTask } = useTaskContext();
  const { projectId } = useParams();

  const [projectTasks, setProjectTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  // Load tasks for this project
  useEffect(() => {
    if (taskData && projectId) {
      const tasks = taskData.filter((task) => task.project._id === projectId);
      setProjectTasks(tasks);
    }
  }, [taskData, projectId]);

  // Handle status filter
  const handleChange = (e) => {
    const value = e.target.value;
    setStatusFilter(value);

    if (value === "All") {
      const allTasks = taskData.filter(
        (task) => task.project._id === projectId
      );
      setProjectTasks(allTasks);
    } else {
      const filtered = taskData.filter(
        (task) => task.project._id === projectId && task.status === value
      );
      setProjectTasks(filtered);
    }
  };

  const projectInfo = projectTasks?.[0]?.project;

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
            <div className="d-flex align-items-center">
              <p className="me-3 mb-0">Filter By:</p>

              <select
                value={statusFilter}
                onChange={handleChange}
                className="form-select w-auto"
              >
                <option value="All">All</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Blocked">Blocked</option>
              </select>

              <CreateTaskForm />
            </div>
          </div>

          {/* Task List */}
          <section className="mt-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="bg-info-subtle">TASKS</th>
                  <th className="bg-info-subtle">OWNER</th>
                  <th className="bg-info-subtle">TAGS</th>
                  <th className="bg-info-subtle">TEAM</th>
                  <th className="bg-info-subtle">STATUS</th>
                </tr>
              </thead>

              <tbody>
                {projectTasks.length > 0 ? (
                  projectTasks.map((task) => (
                    <tr key={task._id}>
                      <td>{task.name}</td>

                      <td>
                        {task.owners?.map((o) => (
                          <span key={o._id}>{o.name}, </span>
                        ))}
                      </td>

                      <td>{task.tags?.join(", ")}</td>
                      <td>{task.team?.name}</td>

                      <td>
                        <span
                          className={`badge ${
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

                        <span
                          onClick={() => deleteTask(task._id)}
                          className="float-end text-danger ms-3"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </span>

                        <span
                          className="float-end text-primary"
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
                      No tasks found.
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
