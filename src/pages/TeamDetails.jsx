import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const TeamDetails = () => {
  const { teamId } = useParams();

  const [newTeamData, setNewTeamData] = useState(null);

  const {
    data: teamData,
    loading: teamLoading,
    error: teamError,
  } = useFetch("http://localhost:4001/api/v1/teams");

  useEffect(() => {
    if (teamData && teamId) {
      const team = teamData.find((t) => t._id === teamId);
      setNewTeamData(team);
    }
  }, [teamData, teamId]);

  if (teamLoading) return <p className="p-4">Loading...</p>;
  if (teamError) return <p className="p-4 text-danger">Error loading team</p>;

  return (
    <section className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <Sidebar />

        {/* Main Content */}
        <section className="col-12 col-md-10 p-3 p-md-4">
          {/* Header */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4">
            <div>
              <h2 className="mb-1">{newTeamData?.name}</h2>
              <p className="text-secondary mb-0">MEMBERS</p>
            </div>

            <button
              className="btn btn-success btn-sm mt-3 mt-sm-0"
              data-bs-toggle="modal"
              data-bs-target="#memberModal"
            >
              + Add Member
            </button>
          </div>

          {/* Members List */}
          <div className="card shadow-sm">
            <ul className="list-group list-group-flush">
              {newTeamData?.members?.length > 0 ? (
                newTeamData.members.map((member) => (
                  <li key={member._id} className="list-group-item">
                    {member.name}
                  </li>
                ))
              ) : (
                <li className="list-group-item text-muted text-center">
                  No members found
                </li>
              )}
            </ul>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="memberModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Member</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Member Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter member name"
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-success">
                    Add Member
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TeamDetails;
