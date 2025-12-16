import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const TeamManagement = () => {
  const {
    data: teamData,
    loading: teamLoading,
    error: teamError,
  } = useFetch("http://localhost:4001/api/v1/teams");
  

  const [teamFormData, setTeamsFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTeamsFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formHandle = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = fetch("http://localhost:4001/api/v1/teams", {
        method: "POST",
        headers,
        body: JSON.stringify(teamFormData),
      });

      if (!response.ok) {
        throw new Error("failed to add new team.");
      }
    } catch (error) {
      console.log(error);
    }

    setTeamsFormData({
      name: "",
      description: "",
    });
  };

  useEffect(() => {}, [teamData]);
  return (
    <section className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <Sidebar />

        <section className="col-12 col-md-10 p-4">
          <div>
            <div className="mt-5">
              <button
                className="btn btn-success btn-sm float-end"
                data-bs-toggle="modal"
                data-bs-target="#taskModal"
              >
                + New Team
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
                        Create New Team
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
                        <label htmlFor="" className="form-label">
                          Team Name
                        </label>
                        <input
                          onChange={handleChange}
                          value={teamFormData.name}
                          name="name"
                          className="form-control"
                          type="text"
                          placeholder="Enter Project Name"
                        />
                        <br />
                        <label htmlFor="" className="form-label">
                          Description
                        </label>
                        <textarea
                          onChange={handleChange}
                          value={teamFormData.description}
                          name="description"
                          className="form-control"
                          style={{ height: "100px" }}
                        ></textarea>
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
              <h2>Teams</h2>
            </div>
            {teamLoading && (
              <div className="card w-25" aria-hidden="true">
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                  </p>
                </div>
              </div>
            )}
            <div className="mt-5">
              <div className="row">
                {teamData?.map((team) => (
                  <Link
                    to={`/teamdetails/${team._id}`}
                    className="text-decoration-none col-12 col-md-3"
                  >
                    <div
                      key={team._id}
                      className="card shadow border-0 bg-light"
                    >
                      <div className="card-body">
                        <h5>{team.name}</h5>
                        <p>{team.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TeamManagement;
