import Sidebar from "./Sidebar";

const TeamManagement = () => {
  return (
    <section className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <Sidebar />

        <section className="col-12 col-md-10 p-4">
          <div>
            <div className="mt-5">
              <button className="btn btn-success float-end">+ New Team</button>
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
