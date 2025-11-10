import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import CreateProjectForm from "./CreateProjectForm";

const Projects = () => {
  const { projectData, projectLoading, projectError } = useTaskContext();

  return (
    <>
      <section className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          <Sidebar />

          <section className="col-12 col-md-10 p-4">
            <div>
              {/* Loading and Error States */}
              {projectLoading && (
                <div className="alert alert-primary text-center">
                  Loading...
                </div>
              )}
              {projectError && (
                <div className="alert alert-danger text-center">
                  Data Not Found.
                </div>
              )}

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="m-0">Projects</h3>
                <CreateProjectForm />
              </div>

              {/* Table Section */}
              <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                  <thead className="table-light text-center">
                    <tr>
                      <th className="text-secondary" scope="col">
                        S No.
                      </th>
                      <th className="text-secondary" scope="col">
                        Project Name
                      </th>
                      <th className="text-secondary" scope="col">
                        Description
                      </th>
                      <th className="text-secondary" scope="col">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData && projectData.length > 0 ? (
                      projectData.map((project, index) => (
                        <tr key={project._id}>
                          <td className="text-center">{index + 1}</td>
                          <td>{project.name}</td>
                          <td>{project.description || "—"}</td>
                          <td className="text-center">
                            <Link
                              to={`/projectsmanagement/${project._id}`}
                              className="btn btn-sm btn-outline-primary"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center text-secondary">
                          No projects found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Projects;
