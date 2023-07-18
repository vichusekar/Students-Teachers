import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Management() {
  let navigate = useNavigate()

  let [title, setTitle] = useState([
    {
      
      name: 'Sathish',
      email:'sthish@gmail.com',
      batch: 'C16'
    },
    {
      name:'Saimohan B',
      batch:'D46',
      email:'saimohan350@gmail.com'
    },
    {
      name:'Nagarajan C',
      batch:'B35 & B46',
      email:'nagarajan305@gmail.com'
    }
  ])
  return  <>
  <div >
  <Table striped bordered hover className='table' >
      <thead>
        <tr>
          <th>No</th>
          <th >Name</th>
          {/* <th>Email</th> */}
          <th>Handling Batch</th>
        </tr>
      </thead>
      <tbody className='t-body'>
        {
          title.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td >{e.name}</td>
              <td >{e.batch}</td>
            </tr>
          })
        }
        
      </tbody>
    </Table>
  </div>
  <Button className='btn-back' onClick={()=>navigate('/teacher')}>Back</Button>
  </>
}

export default Management