import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container my-5'>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                <Accordion.Body>
                <h2>Javascript</h2>
                <p>1.Javascript is a programming language. we use it for writing scripts on the website.</p>
                <p>2.Without NodeJs javascript can run only browser.</p>
                <p>3.basically,we use javascript for client site.</p>
                <h2>NodeJs</h2>
                <p>1.NodeJS is a cross-platform its use for  Javascript runtime environment.</p>
               <p> 2.with NodeJs we can run Javascript outside of the browser.</p>
               <p> 3.NodeJs are mostly use for surversite</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>When should you use nodejs and when should you use mongodb</Accordion.Header>
                <Accordion.Body>
                MongoDB and NodeJS are two different technologies. but both work for the server site. when we want to store data for the local site we need to use NodeJs or MongoDB use for backend store data. Also, to Write any application we can use NodeJs, and to save or store the application data we can use MongoDB.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Differences between sql and nosql databases</Accordion.Header>
                <Accordion.Body>
                    <h2>SQL</h2>
                    <p>1.SQL databases is a RDBMS or Relational Databases</p>
                    <p>2.SQL databases are table based databases	</p>    
                    <p>3.SQL has One type with minor variations.</p>
                    <h2>NOSQL</h2>
                    <p>1.NoSQL databases are a Non-relational or distributed database</p>    
                    <p>2.NoSQL databases can be document based, key-value pairs, graph databases</p>    
                    <p>3.NoSQL has many different types variations</p>        
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> What is the purpose of jwt and how does it work</Accordion.Header>
                <Accordion.Body>
                JWT or JSON Web Token is used for client and server site security. It stores the user information and gives the token of the user and matches with the user token if it is right then the user access the site or else cant access it.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;