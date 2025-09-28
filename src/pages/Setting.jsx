import { useNavigate } from "react-router-dom";
const Setting = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <section>
      {/* Logout Button */}
      <div className="d-flex justify-content-end p-3 border-bottom">
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </section>
  );
};

export default Setting;
