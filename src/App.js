import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useEffect } from 'react';
import plus from "./new.png"; 
import trash from "./trash.png"; 
import authorize from "./authorize.png"; 
import eye from "./eye.png"; 
import ok from "./ok.png"; 
import cancel from "./cancel.png"; 
import reject from "./reject.png"; 
import help from "./help.png"; 
import exit from "./exit.png"; 
import axios from 'axios';
import TabA from "./TabA";
import TabB from "./TabB";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
 




function App() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  // const [basicActive, setBasicActive] = useState('tab1');

  // const handleBasicClick = (value) => {
  //   if (value === basicActive) {
  //     return;
  //   }

  //   setBasicActive(value);
  // };
  

  useEffect(() => {
    // functions to get endpoints
    function getProductGroup() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "ACT",
      });
    }
      function getProductSubGroup() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "ACT",
      });
    }
    function getCurrency() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "CUR",
      });
    }

    function getAccoountMandate() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "AMD",
      });
    }
  
    function getSector() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "MAS",
      });
    }
    function getSubSector() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "MAS",
      });
    }


    Promise.all([
      getProductGroup(),
      getProductSubGroup(),
      getCurrency(),
      getAccoountMandate(),
      getSector(),
      getSubSector(),
    ])
      .then(function (results) {
        //  get ProductGroup
        // console.log("resulttsss",results)
        const ProductGroup = results[0].data;
        localStorage.setItem("getProductGroup", JSON.stringify(ProductGroup));
        // console.log(">>>",rich)

        // get productSubGroup
        const ProductSubGroup = results[1].data;
        localStorage.setItem("getProductSubGroup", JSON.stringify(ProductSubGroup));

        // get currency
        const  Currency = results[2].data;
        localStorage.setItem("getCurrency", JSON.stringify( Currency));

        // get accoountMandate
        const AccountMandate = results[3].data;
        localStorage.setItem("getAccountMandate", JSON.stringify(AccountMandate));

        // get sector
        const Sector = results[4].data;
        localStorage.setItem("getSector", JSON.stringify(Sector));

        // get subSector
        const SubSector = results[5].data;
        localStorage.setItem("getSubSector", JSON.stringify(SubSector));

      
        
        console.log(SubSector);
      })
      .catch(function (error) {
        throw error;
      });
  }, []);

  
  // const rows = [];
 const [showDialogue, setShowDialogue] = useState({ProductGroup:  false , Currency:false, AccountMandate:false, ProductSubgroup:false, SubSector:false, Sector:false});
 const [target, setTarget] = useState("");
 const handleCloseDialogue = () => setShowDialogue(false); 
const [input , setInput] = useState("");
const [activeTab , setActiveTab] = useState("A")


console.log(target)
 function populate(code , description ){
setInput((prev)=>({...prev , [target]: {
  actual_code: code,
  description: description,
}}))
handleCloseDialogue()

 }

 console.log(input.currency)





  return (
    <>
    <MDBBtn onClick={toggleShow}>LAUNCH ADDITIONAL ACCOUNT</MDBBtn>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog size="xl"  style={{background:"whiteSmoke"}}>
        <MDBModalContent className="MDBModalContent" >
          <MDBModalBody>
          
            
            <MDBNavbar style={{ backgroundColor: "#1aa3ff", color:"white" }}> 
        <MDBContainer  fluid>
          <MDBNavbarBrand href='#' style={{ height:"16px", fontSize: "18px",color:"white", }}>Create Additional Account </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
     

                            {/* ------------------------top icons -------------------------*/}
     <MDBContainer style={{width:"65%", display:"flex",justifyContent:"center", alignItem:"center", marginTop:"10px", position:"relative" }}>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"#e0e0eb",color:"#1aa3ff",fontSize: "13px", margin:"auto" }} ><img src={plus} alt="new" width="90%" /><br></br><div className="textColor">New</div></button>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"white",color:"rgb(228, 84, 84)",fontSize: "13px",margin:"auto" }} ><img src={trash} alt="trash" width="90%"/><br></br><div className="textColor">Delete</div></button>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"white",color:"#1aa3ff", fontSize: "13px",margin:"auto" }} ><img src={authorize} alt="authorize" width="90%"/><br></br><div className="textColor">Authorise</div></button>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"white",color:"#b3b3cc",fontSize: "13px",margin:"auto" }} ><img src={eye} alt="eye" width="90%"/><br></br><div className="textColor">View</div></button>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"#e0e0eb",color:"#339933",fontSize: "13px",margin:"auto" }} ><img src={ok} alt="ok" width="90%"/><br></br><div className="textColor">Ok</div></button>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"white",color:"rgb(228, 84, 84)",fontSize: "13px",margin:"auto" }} ><img src={cancel} alt="cancel" width="90%"/><br></br><div className="textColor">Cancel</div></button>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"white",color:"rgb(228, 84, 84)",fontSize: "13px",margin:"auto" }} ><img src={reject} alt="reject" width="90%"/><br></br><div className="textColor">Reject</div></button>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"white",color:"#339933", fontSize: "13px" ,margin:"auto"}} ><img src={help} alt="help" width="90%"/><br></br><div className="textColor">Help</div></button>
     <button type="button" style={{width:"10%",borderColor:"whitesmoke", backgroundColor:"#e0e0eb",color:"rgb(228, 84, 84)", fontSize: "13px",margin:"auto" }} ><img src={exit} alt="exit" width="90%"/><br></br><div className="textColor">Exit</div></button>
     
     </MDBContainer>

     

                    {/* -----------horizontal Line--------------- */}
      <hr  style={{ backgroundColor: "#1aa3ff", width:"100%", height:"5px" }}></hr>



    <MDBContainer breakpoint="lg" style={{ backgroundColor: "#1aa3ff", color:"black", border:"5px" }}></MDBContainer>
                    {/* --------------tabs div-------------------- */}
      <div style={{display:"flex" , justifyContent: "space-between", alignItem:"center",marginLeft:"2.9%", marginBottom:"15px", width: "95%", position:"relative"   }}>
        <div style={{display:"flex" ,  }} >
            <div className={activeTab === "A" ? "active" : "inactive"} style={{marginRight: "20px" , cursor:"pointer" }} onClick={()=>{setActiveTab("A")}}>Account Details</div>
            <div className={activeTab === "B" ? "active" : "inactive"} onClick={()=>{setActiveTab("B")}} style={{ cursor:"pointer" }}>Relationship/ Signatory</div>
        </div>
        <div className="BBAN">
          <label style={{fontSize:"15px"}}>BBAN</label>
          <input type="text" style={{width:"90%",height:"29px", textAlign:"center" , marginLeft:"8px"}} disabled id="disabled"></input>
        </div>
    </div>

            {/* --------------set active tabs------- */}
    <div>
      {activeTab === "A" && <TabA input ={input}
         setTarget={setTarget}
         setShowDialogue={setShowDialogue}
         handleCloseDialogue={handleCloseDialogue}
         showDialogue={showDialogue}
         populate={populate}
         setActiveTab={setActiveTab}
      />}
      {activeTab === "B" && <TabB 
        setActiveTab={setActiveTab}
      />}
    </div>
  
</MDBModalBody>
  <MDBNavbar style={{ backgroundColor: "#1aa3ff", color:"black" }}> 
    <MDBContainer fluid>
      <MDBNavbarBrand href='#' style={{ height:"10px",fontSize: "13px", color:"white" }}>ALL fields labels' are displayed in blue  </MDBNavbarBrand>
    </MDBContainer>
 </MDBNavbar>
           
          
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  </>
  );
}

export default App;
