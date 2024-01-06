import  React from "react" ;
import './App.css';
import {MDBCheckbox, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function TabB({
    setActiveTab,
    input ,
    setTarget,
    handleCloseDialogue,
    setShowDialogue,
    showDialogue,
    populate,
    
}){

    return(
        <>
        <div className="returnBtn">
         <button type="button" onClick={()=>{setActiveTab("A")}}
          style={{borderColor:"whitesmoke"}} className="controlBtn">  Return </button>
       </div>



        <div className="tablediv">
          <div className="headdiv">
            <p>Account Signatories</p>
          </div>
          <div> 
       <div className="datatable">
        <MDBTable align="middle">
      <MDBTableHead light>
        <tr>
          <th >Select Signatories</th>
          <th>Relation No</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Last Name</th>
          <th>Gender</th>
        </tr>
       
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='col'>
          <MDBCheckbox></MDBCheckbox>
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td></td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>   

          </div>
        </div>
        </>
    )
}