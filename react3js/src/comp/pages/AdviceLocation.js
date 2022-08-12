import React,{ useState }  from 'react';
import { Form,Image} from 'react-bootstrap';
import Axios from 'axios'



const AdviceLocation = () => {
  const[eaddress, setEaddress] = useState("");
  const[slocation, setSlocation ] = useState("");
  const[disc, setDisc] = useState("");

  const submitReview1 = () => {
    Axios.post("http://localhost:3001/AdviceLocation/api/insert",{
      eaddress: eaddress,
      slocation: slocation,
      disc: disc,
    }).then(() => {
      alert('success');
    });

  };

    return(
        <div className="container">
            <div className="py-4">
                <div>
                      <Image src="https://tse2.mm.bing.net/th?id=OIP.3DH3SGukg7gizjtKYvHzXQAAAA&pid=Api&P=0&w=167&h=156" thumbnail  style={{borderBlockStartWidth:"10%",marginTop:"2%"}}  />
                </div>
            
              <div className="wrapper">
                <div className="form-wrapper">
                    <Form  >
                      <row>
                        <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      name="eaddress"
                                      placeholder="name@example.com" 
                                      onChange={(e) => {
                                      setEaddress(e.target.value); 
                                      }}required />

                        </Form.Group>

                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text"
                                      name="slocation"
                                      placeholder="" 
                                      onChange={(e) => {
                                      setSlocation(e.target.value);
                                      }}required />

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Discription about location</Form.Label> 
                        <Form.Control as="textarea" 
                                        name="disc"
                                        rows="3" 
                                        onChange={(e) => {
                                        setDisc(e.target.value);
                                        }}required/>
                          </Form.Group>
  

                        <div className="createAccount">
                            <button
                            type="submit"
                            onClick={submitReview1}>Submit
                            </button>
                        </div>
                      </row>
                    </Form>
                </div>
              </div>
            </div>
        </div>
    );
};

    export default AdviceLocation;