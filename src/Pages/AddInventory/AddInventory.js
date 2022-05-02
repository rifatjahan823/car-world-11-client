import React from 'react';

const AddInventory = () => {
    const onSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplierName = event.target.supplierName.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const user={ name,supplierName,description,price}

        fetch('http://localhost:5000/inventory',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify( user)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(" user",result)
        })
    
    }; 
    return (
        <div>
    <form onSubmit={onSubmit}>
       <input type="text" name="name" id="" />
       <input type="text" name="supplierName" id="" />
       <input type="text" name="description" id="" />
       <input type="number" name="price" id="" />

       <input type="submit" value="submit" />
    </form>
        </div>
    );
};

export default AddInventory;