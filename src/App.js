import React, { useState }  from 'react'
import NavBar from './component/NavBar';
import Dashboard from './component/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Management from './component/Management';
import Teacher from './component/Teacher';
import EditStudent from './component/EditStudent';
function App() {
  let [data, setData] = useState([
    {
      name: 'Vignesh R',
      email:'vichu093@gmail.com',
      dob: '1999-05-03',
      batch: 'B46',
      mobile:'9634264872'
      
    },

    {
      name: 'Santhosh R',
      email:'santhosh@gmail.com',
      dob: '1998-07-01',
      batch: 'B35',
      mobile:'8623145639'
      
    },
    {
      name: 'Prakash L',
      email:'praash345@gmail.com',
      dob: '1997-02-10',
      batch: 'D46',
      mobile:'6253849071'
      
    },
    {
      name: 'Rajasekaran D',
      email:'rajasekar765@gmail.com',
      dob: '1996-10-09',
      batch: 'C16',
      mobile:'832458490'
      
    },
    {
      name: 'Gokul K',
      email:'gokul45@gmail.com',
      dob: '1997-12-12',
      batch: 'B46',
      mobile:'9634264872'
      
    }
  ])

  return <>
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}/>
        <Route path="/manage" element={<Management />}/>
        <Route path="/student" element={<Dashboard data={data} setData={setData}/>}/>
        <Route path="/teacher" element={<Teacher />}/>
        <Route path="edit-student/:id" element={<EditStudent data={data} setData={setData}/>}/>
        
      </Routes>     
    </BrowserRouter>

  </>
}

export default App
