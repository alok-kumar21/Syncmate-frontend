import { useState } from "react";

const CreateProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formHandle = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found! Please login first.");
        return;
      }

      const response = await fetch("http://localhost:4001/api/v1/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Failed to add project.");
      }

      // Success
      console.log("Project created successfully!");
      alert("Project created successfully!");
      setFormData({ name: "", description: "" });

      // Close modal
      const modal = document.getElementById("projectModal");
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <>
      {/* Modal button */}
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
              <form onSubmit={formHandle}>
                <label className="form-label">Project Name</label>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Enter Project Name"
                />
                <br />
                <label className="form-label">Description</label>
                <textarea
                  rows={5}
                  onChange={handleChange}
                  value={formData.description}
                  name="description"
                  className="form-control"
                  placeholder="Enter Project Description"
                ></textarea>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
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

export default CreateProjectForm;
