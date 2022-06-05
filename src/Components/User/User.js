import { Link } from "react-router-dom";
import { TiDelete, TiEdit } from "react-icons/ti";
import { FaFemale, FaMale } from "react-icons/fa";
import "./User.css";

const User = ({ user, onDelete }) => {
  const { name, email, gender, id, status } = user;
  const isMale = () => {
    if (gender === "male") {
      return <FaMale className="gender" />;
    } else {
      return <FaFemale className="gender" />;
    }
  };
  const isActive = () => {
    if (status === "active") {
      return <p className="activeStatus"></p>;
    } else {
      return <p className="inactivestatus"></p>;
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-between userBox">
      <div className="col-lg-6 col-sm-7 col-7">
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <div className="col-lg-3 col-sm-2 col-2 d-flex align-items-center">
        <p>{isMale()}</p>
        {isActive()}
      </div>
      <div className="col-lg-3 col-sm-3 col-3 d-flex align-items-center justify-content-end">
        <Link to={`/edit-user/${id}`}>
          <button className="btn">
            <TiEdit className="editBtn" />
          </button>
        </Link>
        <button className="btn" onClick={() => onDelete(id)}>
          <TiDelete className="deleteBtn" />
        </button>
      </div>
    </div>
  );
};

export default User;
