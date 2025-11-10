const CreateProjectForm = () => {
  return (
    <>
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
    </>
  );
};

export default CreateProjectForm;
