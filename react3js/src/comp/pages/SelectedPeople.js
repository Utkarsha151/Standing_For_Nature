import React from 'react';
import { Table} from 'react-bootstrap';


const SelectedPeople = () => {
    return(
        <div className="container">
            <div className="py-4">
                <p class="text-secondary"> <h1> </h1></p>
                    <Table striped bordered hover variant="white"  style={{width:"110%"}}>
                        <thead>
                        <tr>
                          <th>Token_no</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td >Larry the Bird</td>
                          <td >Anjio lara</td>
                          <td>@twitter</td>
                        </tr>

                        <tr>
                          <td>4</td>
                          <td>Rahul</td>
                          <td>pedro</td>
                          <td>@rahu</td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td>raj</td>
                          <td>Joshi</td>
                          <td>@mdo</td>
                        </tr>

                        <tr>
                          <td>6</td>
                          <td>Mical</td>
                          <td>pedo</td>
                          <td>@mdo</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>Rachel</td>
                          <td>Sausi</td>
                          <td>@rac</td>
                        </tr>

                        <tr>
                          <td>8</td>
                          <td>Ross</td>
                          <td>nambiar</td>
                          <td>@Rna</td>
                        </tr>
                        </tbody>
                    </Table>
              </div>
        </div>
    );
};

export default SelectedPeople;
 