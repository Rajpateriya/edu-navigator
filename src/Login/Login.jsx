import React, { useState } from "react";
import { Radio, Drawer } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import "./DLogin.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AdminLogin, TeacherLogin, StudentLogin, forgetPassword } from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => toast(text);

const Login = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [placement, setPlacement] = useState("Teacher");
  const [formValue, setFormValue] = useState({ ID: "", password: "" });
  const [forgetPasswordDetails, setForgetPasswordDetails] = useState({ type: "", email: "" });
  const [forgetLoading, setForgetLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setFormValue({ ...formValue, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formValue.ID && formValue.password) {
      const data = {
        ...formValue,
        studentID: placement === "Student" ? formValue.ID : undefined,
        teacherID: placement === "Teacher" ? formValue.ID : undefined,
        adminID: placement === "Admin" ? formValue.ID : undefined,
      };

      try {
        let loginAction;
        if (placement === "Student") loginAction = StudentLogin(data);
        else if (placement === "Teacher") loginAction = TeacherLogin(data);
        else if (placement === "Admin") loginAction = AdminLogin(data);

        const res = await dispatch(loginAction);

        if (res.message === "Successful") {
          notify("Login Successful");
          navigate("/dashboard");
        } else if (res.message === "Wrong credentials") {
          notify("Wrong credentials");
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

  const handleForgetPasswordChange = (e) => setForgetPasswordDetails({ ...forgetPasswordDetails, [e.target.name]: e.target.value });

  const handleChangePassword = () => {
    if (!forgetPasswordDetails.type || !forgetPasswordDetails.email) return notify("Please fill in all details.");
    setForgetLoading(true);
    dispatch(forgetPassword(forgetPasswordDetails)).then((res) => {
      setForgetLoading(false);
      if (res.message === "User not found") return notify("User not found.");
      setForgetPasswordDetails({ type: "", email: "" });
      setOpen(false);
      notify("Account details sent.");
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Login</h1>
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
              <h3>Password</h3>
              <input type="password" name="password" value={formValue.password} onChange={handleChange} required />
              <button type="submit">{loading ? "Loading..." : "Submit"}</button>
              <p style={{ marginTop: "10px" }}>
                Forget Password? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setOpen(true)}>Get it on Email!</span>
              </p>
              <p style={{ marginTop: "10px" }}>
                Already have an account? <Link to="/" style={{ color: "blue", cursor: "pointer" }}>Register</Link>
              </p>
              <Drawer title="Forget Password" placement="left" onClose={() => setOpen(false)} open={open}>
                <div>
                  <label style={{ fontSize: "18px" }}>Choose Type</label>
                  <select name="type" value={forgetPasswordDetails.type} onChange={handleForgetPasswordChange} required>
                    <option value="">User Type</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "18px" }}>Enter Email</label>
                  <input type="email" placeholder="example@mail.com" name="email" value={forgetPasswordDetails.email} onChange={handleForgetPasswordChange} required
                    style={{
                      width: "100%", height: "3rem", borderRadius: "5px", border: "none", backgroundColor: "#bce0fb",
                      fontSize: "18px", marginTop: "10px", paddingLeft: "10px",
                    }} />
                </div>
                <button style={{
                  width: "50%", margin: " 20px auto", display: "flex", padding: "10px", fontSize: "18px",
                  backgroundColor: "#ff9f9f", border: "none", borderRadius: "7px", cursor: "pointer", justifyContent: "center",
                }} onClick={handleChangePassword}>
                  {forgetLoading ? "Loading..." : " Send Mail"}
                </button>
              </Drawer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
