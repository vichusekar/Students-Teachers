import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';




function Dashboard({data, setData}) {

  let Navigate = useNavigate()
  return <>

    <NavBar className='nav'/>
    <div >
    <Table className='container-fluid'>
      <thead >
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Batch</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e, i) => {
            return <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.dob}</td>
              <td>{e.batch}</td>
              <td>{e.mobile}</td>

              <td>
                <Button variant='primary' onClick={()=>Navigate(`/edit-student/${i}`)} >Edit</Button>
                &nbsp;&nbsp;
                <Button variant='danger' onClick={() => {
                  let newArray = [...data]
                  newArray.splice(i, 1)
                  setData(newArray)
                }}>Delete</Button>
              </td>
            </tr>

          })
        }

      </tbody>
    </Table>
    </div>
    <Button className='btn-back' onClick={()=>Navigate('/')}>Back</Button>
  </>
}

export default Dashboard