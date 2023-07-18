import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Dashboard from '..component/Dashboard';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent({data,setData}) {

  let navigate = useNavigate()
  let params = useParams()

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [mobile, setMobile] = useState("")
  let [dob, setDob] = useState("")
  let [batch, setBatch] = useState("")

  
  useEffect(()=>{
    if(params.id !== undefined)
    {
        setName(data[params.id].name)
        setEmail(data[params.id].email)
        setMobile(data[params.id].mobile)
        setDob(data[params.id].dob)
        setBatch(data[params.id].batch)
    }
  // console.log(data, 'data')
  },[params.id,data] )

  let handlesubmit = ()=>{
    let newData = { name,email,mobile,dob,batch }
    let newArray = [...data]
    if (params.id!==undefined) {
      newArray.splice(params.id, 1, newData)
    }
    else {
      newArray.push(newData)
    }
    setData(newArray)
    navigate('/student')
  }
  return <>
    <div >
      <Form className='container-fluid' >
        <Form.Group className="mb-3"  >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3"  >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Batch</Form.Label>
          <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
        </Form.Group>
        <Button variant="primary" onClick={()=>handlesubmit()} >
          Submit
        </Button>
      </Form>


    </div>

<Button className='btn-back' onClick={()=>navigate('/student')}>Back</Button>  </>
}
export default EditStudent