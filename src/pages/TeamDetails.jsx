import Sidebar from "./Sidebar";

const TeamDetails = () => {
  return (
    <section className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <Sidebar />
        <section className="col-12 col-md-10 p-4">
          <h2>Design Team name</h2>
          <p className="text-secondary">MEMBERS</p>
          <p>memeber1</p>
          <p>memeber2</p>
          <p>memeber3</p>
          <p>memeber4</p>
          <button
            className="btn btn-success btn-sm float-end"
            data-bs-toggle="modal"
            data-bs-target="#taskModal"
          >
            + Add Member
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
                    Add New Member
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
                      Membar Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Project Name"
                    />
                    <br />
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
        </section>
      </div>
    </section>
  );
};
export default TeamDetails;
