import { Link } from "react-router-dom";
import "./NotFound.css";
import notFoundImg from "../../assets/images/NotFoundImg.png";
const NotFound = () => {
  return (
    <div className="container">
      <img
        src={notFoundImg}
        className="img-fluid pt-3"
        alt="404 Error (NotFound)"
      />
      <Link
        className="text-decoration-none d-flex justify-content-center"
        to="/"
      >
        <button className="notFoundBtn" type="submit">
          Return to Users List
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
