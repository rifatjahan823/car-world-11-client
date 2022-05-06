import React  from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventory = () => {
    const [user]= useAuthState(auth)
    const onSubmit = event => {
        event.preventDefault();
        const picture = event.target.picture.value;
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const result={picture,name,email:user?.email,price,quantity,}


        fetch('http://localhost:5000/inventory',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(result)
        })
        .then(res=>res.json())
        .then(result=>{
           
        })
    }; 

    return (
 
        <div className='mx-auto form-container px-3'>
      <Form onSubmit={onSubmit}>
      <Form.Group  controlId="formBasicEmail">
          <Form.Label>Picture</Form.Label>
          <Form.Control type="text" name="picture" placeholder="Enter Url"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control  type="text" name="name" placeholder="Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control  type="email" name="email" value={user.email} readOnly placeholder="email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control  type="number" name="price" placeholder="Price" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control  type="number" name="quantity" placeholder="Quantity" required/>
      </Form.Group>
      <Button  o style={{backgroundColor:"#FF5400",border:'none'}} className='w-50 mx-auto d-block mb-2' type="submit">
        Add Inventory
     </Button>
  </Form>
 
  </div>
    );
};

export default AddInventory;