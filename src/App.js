import React, { useState, useEffect } from "react";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Admin from "./Pages/Admin";
// import Login from "./Pages/Login";
import axios from "axios";
import { MyContext } from "./User Components/MyContext";
import 'react-loading-skeleton/dist/skeleton.css'

// import  InputOTPForm  from "./Pages/InputOTPForm";

// import Home from "./Pages/Home";
import StudentProfile from "./User Components/Students/StudentProfile";
import User from "./User Components/User";
import TeacherProfile from "./User Components/Teachers/TeacherProfile";
// import LoginForm from "./Pages/LoginForm";
// import VerifyForm from "./Pages/VerifyForm";



function App() {

  const [teachers, setTeachers] = useState(null)
  const [students, setStudents] = useState(null)
  const [emptyPeriods, setEmptyPeriods] = useState([])

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`http://192.168.1.2:8080/api/teachers/teacher/af7ede72-5039-4b89-b1db-d14171a1ddb7`)
      setTeachers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`http://192.168.1.2:8080/api/students/school/af7ede72-5039-4b89-b1db-d14171a1ddb7`)
      setStudents(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchEmptyPeriods = async () => {
    try {
      const response = await axios.get(`http://192.168.1.2:8080/api/timetables/empty-periods/af7ede72-5039-4b89-b1db-d14171a1ddb7`)
      setEmptyPeriods(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // fetchTeachers()
    // fetchStudents()
    // fetchEmptyPeriods()
  }, [])

  return (
    <MyContext.Provider value={{teachers, students, emptyPeriods}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
          
            <Route path='/studentprofile' element={<StudentProfile/>}></Route>
            <Route path='/' element={<User/>}></Route>
            <Route path='/teacherprofile' element={<TeacherProfile/>}></Route>
            
            
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
