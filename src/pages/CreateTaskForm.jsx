import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
const CreateTaskForm = () => {
  const { taskData, projectData } = useTaskContext();
  console.log(taskData);
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    team: "",
    owners: "",
    tags: "",
    timeToComplete: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormData = (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = fetch("http://localhost:4001/api/v1/tasks", {
        method: "POST",
        headers,
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add Task.");
      }
    } catch (error) {
      console.log(Error);
    }

    setFormData({
      name: "",
      project: "",
      team: "",
      owners: "",
      tags: "",
      timeToComplete: "",
      status: "",
    });
  };

  return (
    <>
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
              <form onSubmit={handleFormData}>
                <label htmlFor="" className="form-label">
                  Task Name
                </label>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Enter Project Name"
                />
                <br />
                <label htmlFor="" className="form-label">
                  Select Project
                </label>
                <select
                  onChange={handleChange}
                  value={formData.project}
                  name="project"
                  className="form-control"
                  id=""
                >
                  <option value="#">Select Project</option>
                  {projectData?.map((project) => (
                    <option value={project._id}>{project.name}</option>
                  ))}
                </select>
                <br />
                <label htmlFor="" className="form-label">
                  Select Team
                </label>
                <select
                  onChange={handleChange}
                  value={formData.team}
                  name="team"
                  className="form-control"
                  id=""
                >
                  <option value="#">Select Team</option>
                  {taskData?.map((task) => (
                    <option value={task.team._id}>{task.team.name}</option>
                  ))}
                </select>

                <br />
                <label htmlFor="" className="form-label">
                  Select Owners
                </label>
                <select
                  onChange={handleChange}
                  value={formData.owners}
                  name="owners"
                  className="form-control"
                  id=""
                >
                  <option value="#">Select Owners</option>
                  {taskData?.map((task) =>
                    task.owners?.map((own) => (
                      <option value={own._id}>{own.name}</option>
                    ))
                  )}
                </select>
                <br />
                <label htmlFor="" className="form-label">
                  Select Tags
                </label>
                <select
                  onChange={handleChange}
                  value={formData.tags}
                  name="tags"
                  className="form-control"
                  id=""
                >
                  <option value="#">Select Tags</option>
                  {taskData?.map((task) => (
                    <option value={task.tags}>{task.tags.join(",")}</option>
                  ))}
                </select>
                <br />
                <label className="form-label" htmlFor="">
                  Time To Complete
                </label>
                <input
                  onChange={handleChange}
                  value={formData.timeToComplete}
                  name="timeToComplete"
                  className="form-control"
                  type="Number"
                  placeholder="time to Compelete."
                />
                <br />
                <label htmlFor="" className="form-label">
                  Select Status
                </label>
                <select
                  onChange={handleChange}
                  value={formData.status}
                  name="status"
                  className="form-control"
                  id=""
                >
                  <option value="#">Select Status</option>
                  {taskData?.map((task) => (
                    <option value={task.status}>{task.status}</option>
                  ))}
                </select>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancle
                  </button>
                  <button type="submit" className="btn btn-success">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTaskForm;
