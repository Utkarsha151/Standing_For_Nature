import React,{ useEffect, useState } from 'react';
import { Form,Image} from 'react-bootstrap';
import Axios from 'axios'




const BookingSeat = () => {
  const[email, setEmail] = useState("");
  const[name, setName ] = useState("");
  const[location, setLocation] = useState("");
  const[dis, setDis] = useState("");
  const[list,setList]=useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/BookingSeat/api/get").then((response) =>{
      setList(response.data);
    });

  }, []);


  const submitReview = () => {
    Axios.post("http://localhost:3001/BookingSeat/api/insert",{
      email: email,
      name: name,
      location: location,
      dis: dis,
    });
      setList([
        ...list,
        {email:email,name:name,location:location,dis:dis},
      ]);
   

  };

  const deleteReview = (ema) => {
    Axios.delete(`http://localhost:3001/BookingSeat/api/delete/${ema}`);
  };
  

    return  (
        <div className="container">
            <div className="py-4">
                <div>
                    <Image src="https://tse1.mm.bing.net/th?id=OIP.Iad8lHoFdzFVKnUIdxUTFgHaHa&pid=Api&P=0&w=300&h=300" thumbnail  style={{borderBlockStartWidth:"10%",marginTop:"2%",width:"17%"}}  />
                </div>
            
                    <div className="wrapper">
                        <div className="form-wrapper">
                              <Form  >
                                <row>
                  
                                <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" 
                                            name="email"
                                            placeholder="name@example.com"
                                            onChange={(e) => {
                                            setEmail(e.target.value);
                                            }}  required />

    
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text"
                                            name="name"
                                            placeholder="" 
                                            onChange={(e) => {
                                            setName(e.target.value);
                                            }}required />


                                <Form.Label>Select Location</Form.Label>
                                <Form.Control type="text" 
                                            name="location"
                                            placeholder="" 
                                            onChange={(e) => {
                                            setLocation(e.target.value);
                                            }}required />
    
    
                              </Form.Group>

                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Why are you joining this work?</Form.Label> 
                                <Form.Control as="textarea" 
                                            name="dis"
                                            rows="3" 
                                            onChange={(e) => {
                                            setDis(e.target.value);
                                            }}required/>
                              </Form.Group>

                                  <div className="createAccountt">
                                  <button type="submit"
                                          onClick={submitReview}>Submit</button>
                                  </div>
             
                                </row>
                              </Form>
               
                        </div>
                      </div>
            </div>
          {list.map((val) =>{ 
          return (
          <div className="card">
            <h3>{val.email} |{ val.name} | {val.dis}</h3>
            <h4><p>{val.location} </p></h4>
            <button onClick={()=>{deleteReview(val.email)}}>Delete</button>
            </div>
                  );
           })}
          </div>
        );
            };

export default BookingSeat;