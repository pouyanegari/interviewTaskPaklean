import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import editSelectedUserService from "../../Services/editSelectedUserService";
import getSelectedUserService from "../../Services/getSelectedUserService";
import leftFloatImg from "../../assets/images/leftFloat.jpg";
import "./EditUser.css";
import { toast } from "react-toastify";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSelectedUser = async () => {
      try {
        const { data } = await getSelectedUserService(params.id);
        setUser({
          name: data.name,
          email: data.email,
          gender: data.gender,
          status: "active",
        });
      } catch (error) {
        console.log(error);
      }
    };
    getSelectedUser();
  }, []);
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const SubmitHandler = (e) => {
    if (!user.name || !user.email || !user.gender) {
      alert("all fields are mandatory !");
      e.preventDefault();
      return;
    }
    try {
      e.preventDefault();
      const editUser = async () => {
        await editSelectedUserService(params.id, user);
        setUser({ name: "", email: "", gender: "" });
        toast.success("Editing User Completed !");
        navigate("/");
      };
      editUser();
    } catch (error) {
      console.log(error);
    }
  };
  const isMale = () => {
    if (user.gender === "male") {
      return "checked";
    }
    return "";
  };
  const isFemale = () => {
    if (user.gender === "female") {
      return "checked";
    }
    return "";
  };
  return (
    <section className="container d-flex justify-content-center align-items-center formContainer">
      <div className="col-lg-6 col-md-6 col-sm-6 col-0 h-100 d-flex justify-content-end leftFloat">
        <img
          className="img-fluid h-100 float-right"
          src={leftFloatImg}
          alt="ADD_USER"
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-12 h-100 d-flex align-items-center rightFloat">
        <form className="container" onSubmit={SubmitHandler}>
          <div className="d-flex flex-column pt-3 inputContainer">
            <label className="pb-1" htmlFor="name">
              Name
            </label>
            <input
              value={user.name}
              type="text"
              name="name"
              id="name"
              onChange={changeHandler}
            />
          </div>
          <div className="d-flex flex-column pt-3 inputContainer">
            <label className="pb-1" htmlFor="email">
              Email
            </label>
            <input
              value={user.email}
              type="text"
              name="email"
              id="email"
              onChange={changeHandler}
            />
          </div>
          <div className="pt-4">
            <label className="pb-2">Gender</label>
            <br />
            <label htmlFor="male">Male</label>
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              onChange={changeHandler}
              checked={isMale()}
              className="radioBtn"
            />
            <label className="ms-5" htmlFor="female">
              Female
            </label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              onChange={changeHandler}
              checked={isFemale()}
              className="radioBtn"
            />
          </div>
          <button className="mt-4 submitBtn" type="submit">
            Update
          </button>
          <Link className="text-decoration-none" to="/">
            <button className="returnBtn" type="submit">
              Return to Users List
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default EditUser;
