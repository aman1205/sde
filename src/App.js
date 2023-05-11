import React from "react"
import { useState } from "react"
import Chart from "./Page/Test"
import Country from "./Page/Country"
import Navbar from "./Page/Navbar"
import UserInfoForm from "./Page/TestForm"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserTable from "./Page/TableCheck"

const App =()=>{
  const initialUsers =   [
    { name: "John Doe", age: 32, gender: "Male", email: "john.doe@example.com" },
    { name: "Jane Doe", age: 28, gender: "Female", email: "jane.doe@example.com" },
    { name: "Bob Smith", age: 45, gender: "Male", email: "bob.smith@example.com" },
  ] ;
  const [users, setUsers] = useState(initialUsers);



  return(
  <>
     <Router>
      <Navbar/> 
      <Routes>
        <Route path='/'  element={<UserInfoForm/>} />
        <Route path='/user'  element={<Chart/>} />
        <Route path='/table'  element={<UserTable/>} />
        <Route path='/country'  element={<Country/>} />
      </Routes>
    </Router> 

    {/* <Chart/> */}
    {/* <Country/> */}
    {/* <Navbar/> */}
    {/* <UserTable  users={users} setUsers={setUsers}/> */}
    {/* <UserInfoForm/> */}

    
  
  </>
)}

export default App