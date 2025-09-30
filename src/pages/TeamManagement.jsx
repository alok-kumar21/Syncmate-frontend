import Sidebar from "./Sidebar";

const TeamManagement = () => {
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
                      <form action="">
                        <label htmlFor="" className="form-label">
                          Team Name
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
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          style={{ height: "100px" }}
                        ></textarea>
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
              <h2>Teams</h2>
            </div>
            <div className="mt-5">
              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="card shadow border-0 bg-light">
                    <div className="card-body">
                      <h5>Team name</h5>
                      <p>users images</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TeamManagement;
