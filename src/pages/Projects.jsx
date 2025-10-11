import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
const Projects = () => {
  const { projectData, projectLoading, projectError } = useTaskContext();
  return (
    <>
      <section className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          <Sidebar />

          <section className="col-12 col-md-10 p-4">
            <div>
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
              <div>
                <h3 className="d-inline"> Projects</h3>
              </div>
              <div className="row">
                {projectData?.map((project) => (
                  <Link
                    key={project._id}
                    to={`/projectsmanagement/${project._id}`}
                    className="col-12 col-md-4 mt-4 text-decoration-none"
                  >
                    <div className="card bg-light shadow border-0 ">
                      <div className="card-body">
                        <h4 className="p-2 ">{project.name}</h4>
                        <p className="text-secondary">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Projects;
