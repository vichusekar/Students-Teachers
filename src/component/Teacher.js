import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Teacher() {
  let navigate = useNavigate()
  let [details, setDetails] = useState([
    {
      name: 'Sathish',
      mobile: 6284618073,
      email: 'sathis835@gmail.com'
    },
    {
      name: 'Saimohan B',
      mobile: 9634251894,
      email: 'saimohan350@gmail.com'
    },
    {
      name: 'Nagarajan C',
      mobile: 7352649065,
      email: 'nagarajan305@gmail.com'
    }
  ])
  return <>
  <div className='card-title'>
      {
        details.map((e, i) => {
          return <Card style={{ width: '18rem' }} className='bg-color'>
            <Card.Body>
              <Card.Title>Details</Card.Title>
              <Card.Text>
               <tr key={i} >
                  <tr><td>Name:  {e.name}</td></tr>
                  <tr><td>Email:  {e.email}</td></tr>
                  <tr><td>Mobile:  {e.mobile}</td></tr>
                </tr>
              </Card.Text>
              <Button variant='primary' onClick={()=>navigate('/manage')}>Manage</Button>
            </Card.Body>
          </Card>
        }
        )}

</div>
<Button className='btn-back' onClick={()=>navigate('/')}>Back</Button>
</>
}

export default Teacher