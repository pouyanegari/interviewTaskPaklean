import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import addNewUserService from "../../Services/addNewUserService";
import "./AddNewUser.css";
import leftFloatImg from "../../assets/images/leftFloat.jpg";
import { toast } from "react-toastify";

const AddNewUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    status: "active",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const SubmitHandler = (e) => {
    if (!user.name || !user.email || !user.gender) {
      toast.error("All fields must be mandatory!");
      e.preventDefault();
      return;
    }
    try {
      e.preventDefault();
      const postUser = async () => {
        await addNewUserService(user);
        setUser({ name: "", email: "", gender: "" });
        navigate("/");
        toast.success("User Added Successfully :D");
      };
      postUser();
    } catch (error) {
      console.log(error);
    }
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
              type="text"
              name="name"
              id="name"
              onChange={changeHandler}
              placeholder="john"
            />
          </div>
          <div className="d-flex flex-column pt-3 inputContainer">
            <label className="pb-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={changeHandler}
              placeholder="johnEx@gmail.com"
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
              className="radioBtn"
            />
            <label htmlFor="female" className="ms-5">
              Female
            </label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              onChange={changeHandler}
              className="radioBtn"
            />
          </div>
          <button className="mt-4 submitBtn" type="submit">
            ADD
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

export default AddNewUser;
