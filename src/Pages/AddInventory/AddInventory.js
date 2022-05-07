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
        const supplierName = event.target.supplierName.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const sold = event.target.sold.value;
        const description = event.target.description.value;
        const result={picture,name,email:user?.email,supplierName,price,quantity,sold,description}


        fetch('https://ancient-dawn-90111.herokuapp.com/inventory',{
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
          <Form.Label>supplierName</Form.Label>
          <Form.Control  type="text" name="supplierName" placeholder="supplierName" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control  type="number" name="price" placeholder="Price" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control  type="number" name="quantity" placeholder="Quantity" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Sold</Form.Label>
          <Form.Control  type="number" name="sold" min="0" max="0" placeholder="Sold" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"name="description" placeholder="Leave a comment here" required/>
      </Form.Group>
      <Button  style={{backgroundColor:"#FF5400",border:'none'}} className='w-50 mx-auto d-block mb-2' type="submit">
        Add Inventory
     </Button>
  </Form>
 
  </div>
    );
};

export default AddInventory;