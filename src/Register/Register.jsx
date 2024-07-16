import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import "./DRegister.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AdminRegister, TeacherRegister, StudentRegister } from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => toast(text);

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [placement, setPlacement] = useState("Teacher");
  const [formValue, setFormValue] = useState({ ID: "", name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setFormValue({ ...formValue, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formValue.ID && formValue.name && formValue.email && formValue.password) {
      const data = {
        ...formValue,
        studentID: placement === "Student" ? formValue.ID : undefined,
        teacherID: placement === "Teacher" ? formValue.ID : undefined,
        adminID: placement === "Admin" ? formValue.ID : undefined,
      };

      try {
        let registerAction;
        if (placement === "Student") registerAction = StudentRegister(data);
        else if (placement === "Teacher") registerAction = TeacherRegister(data);
        else if (placement === "Admin") registerAction = AdminRegister(data);

        const res = await dispatch(registerAction);

        if (res.message === "Registration Successful") {
          notify("Registration Successful");
          navigate("/login");
        } else {
          notify("Something went wrong, please try again.");
        }
      } catch (error) {
        notify("Error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      notify("Please fill in all fields.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mainRegisterPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Register</h1>
          <div>
            <Radio.Group value={placement} onChange={(e) => setPlacement(e.target.value)} className="radiogroup">
              <Radio.Button value="Teacher" className="radiobutton">Teacher</Radio.Button>
              <Radio.Button value="Admin" className="radiobutton">Admin</Radio.Button>
              <Radio.Button value="Student" className="radiobutton">Student</Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <h3>{placement} ID</h3>
              <input type="number" name="ID" value={formValue.ID} onChange={handleChange} required />
              <h3>Name</h3>
              <input type="text" name="name" value={formValue.name} onChange={handleChange} required />
              <h3>Email</h3>
              <input type="email" name="email" value={formValue.email} onChange={handleChange} required />
              <h3>Password</h3>
              <input type="password" name="password" value={formValue.password} onChange={handleChange} required />
              <button type="submit">{loading ? "Loading..." : "Register"}</button>
              <p style={{ marginTop: "10px" }}>
                Already have an account? <Link to="/login" style={{ color: "blue", cursor: "pointer" }}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
