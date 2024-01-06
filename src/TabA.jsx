import React from "react";
import './App.css';
import {
    MDBIcon
    } from 'mdb-react-ui-kit';


export default function TabA({
    input ,
    setTarget,
    handleCloseDialogue,
    setShowDialogue,
    showDialogue,
    populate,
    setActiveTab,
    
}){


    return(
        <>
        <div className="main" style={{ justifyContent:"center", alignItem:"center"}}>

          
<div className="formdiv">
<form style={{ margin: "auto"}}>

 

                    {/* --------------------Customer -----------------*/}
<div style={{display:"flex", marginTop:"5px",marginBottom:"1.5%", margin:"auto"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}} >Customer ID</label>
  </div>
 <div  style={{display:"flex", marginLeft:"1.4%", width:"75%"}} >
  <input type="number" style={{width:"16%",height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>
  <input type="text"  style={{width:"72%",height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
</div>
</div>




                     {/* ------------------Source Branch---------------- */}
<div style={{display:"flex", marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize:"15px"}}>Source Branch</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="text" style={{width:"75px",height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>
  <input type="text"  style={{width:"550px",height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
</div>
</div>


                     
                      {/*------------- Account Name -------------------*/}

<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Account Name</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="text"  style={{width:"630px",height:"29px", textAlign:"center"}}></input><br></br>
</div>
</div>




                       {/* ----------- Product group -------------------*/}

<div style={{display:"flex",marginTop:"10px"}} >
      <div style={{width:"15%", textAlign:"right"}} >
        <label style={{fontSize: "15px"}}>Product Group</label>
     </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="text" id="productGroup-1" value={input.productGroup && input.productGroup.actual_code} style={{width:"75px",height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>

  <button type="button" name="productGroup"   style={{borderColor:"whitesmoke", color:"#1aa3ff", marginRight:"3px" ,fontSize: "13px" , zIndex: 99999}} onClick={(e) => {setTarget(e.target.name) ; setShowDialogue((prev)=>({...prev , ProductGroup:true }))}}><MDBIcon fas icon="search-plus" /></button>
       {/* ------Button search modal------- */}
  {showDialogue.ProductGroup && <div style={{position:"absolute", top:"20%", marginLeft:"100px", backgroundColor: "white", border: "1px solid rgb(240, 233, 233)",borderRadius:" 8px 8px 2px 2px",color: "black",textAlign:"left", paddingLeft:"8px", paddingRight:"8px",cursor: "pointer"}}> 
<div>
<div onClick={()=>handleCloseDialogue()} style={{marginBottom:"5px", cursor: "pointer"}}>X <br></br>Product Group<hr></hr></div>
 
          {(() => {
  var getProductGroup = JSON.parse(localStorage.getItem("getProductGroup"));
  var curr = [];
  for (var i = 0; i < getProductGroup.length; i++) {
    const description = getProductGroup[i]["description"];
    const actual_code = getProductGroup[i]["actual_code"];
    // const short_descrp = getBranch[i]["short_descrp"];

    curr.push(
      <div
        key={i}
        id={actual_code}
        data-value={description}
        className="optionToSelect"
        onClick={() => {
          const val = "ProductGroup"
          // setCurrency(e.target.getAttribute("data-value"));
          populate(actual_code , description);
      
          handleCloseDialogue();
        }}>
        {`${actual_code} - ${description}`}
      
      </div>
    );
  }

  return curr;
})()}

      

</div></div>}

  <input type="text"  id="productGroup-2" value={input.productGroup && input.productGroup.description}  style={{width:"520px", height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
</div>
</div>



                     {/* ----------------Product  Sub group *------------ */}
<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Product  Sub group</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
 
  <input type="text" id="productSubGroup-1" value={input.productSubGroup && input.productSubGroup.actual_code}style={{width:"75px", height:"29px", textAlign:"center", marginRight:"3px"}} ></input>
 <button type="button" name="productSubGroup" style={{borderColor:"whitesmoke", color:"#1aa3ff", marginRight:"3px" ,fontSize: "13px"}}onClick={(e) => {setTarget(e.target.name) ; setShowDialogue((prev)=>({...prev , ProductSubGroup:true }))}}><MDBIcon fas icon="search-plus" /></button>

   {/* ------Button search modal------- */}
   {showDialogue.ProductSubGroup && <div style={{position:"absolute", top:"20%", marginLeft:"100px", backgroundColor: "white", border: "1px solid rgb(240, 233, 233)",borderRadius:" 8px 8px 2px 2px",color: "black",textAlign:"left", paddingLeft:"8px", paddingRight:"8px",cursor: "pointer"}}> 
<div>
<div onClick={()=>handleCloseDialogue()} style={{marginBottom:"5px", cursor: "pointer"}}>X <br></br>Product  Sub group<hr></hr></div>
 
 
{(() => {
  var getProductSubGroup = JSON.parse(localStorage.getItem("getProductSubGroup"));
  var curr = [];
  for (var i = 0; i < getProductSubGroup.length; i++) {
    const description = getProductSubGroup[i]["description"];
    const actual_code = getProductSubGroup[i]["actual_code"];
    // const short_descrp = getBranch[i]["short_descrp"];

    curr.push(
      <div
        key={i}
        id={actual_code}
        data-value={description}
        className="optionToSelect"
        onClick={() => {
          const val = "productSubGroup"
          // setCurrency(e.target.getAttribute("data-value")); 
          populate(actual_code , description);
      
          handleCloseDialogue();
          }}>
          {`${actual_code} - ${description}`}
      </div>
    );
  }

  return curr;
})()}
</div></div>}


  
  <input type="text" id="productSubGroup-2" value={input.productSubGroup && input.productSubGroup.description} style={{width:"520px", height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
</div>
</div>


 
                    {/* ------------------Currency *-------------------- */}

<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Currency</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="number" id="currency-1"  value={input.currency && input.currency.actual_code} style={{width:"120px", height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>
  <button type="button" name="currency" style={{ borderColor:"whitesmoke",color:"#1aa3ff", marginRight:"3px" ,fontSize: "13px"}} onClick={(e) => {setTarget(e.target.name) ; setShowDialogue((prev)=>({...prev , Currency:true }))}} ><MDBIcon fas icon="search-plus" /></button>
</div>
{showDialogue.Currency && <div style={{position:"absolute", top:"20%", marginLeft:"100px", backgroundColor: "white", border: "1px solid rgb(240, 233, 233)",borderRadius:" 8px 8px 2px 2px",color: "black",textAlign:"left", paddingLeft:"8px", paddingRight:"8px",cursor: "pointer"}}> 
<div>
<div onClick={()=>handleCloseDialogue()} style={{marginBottom:"5px", cursor: "pointer"}}>X <br></br>Currency<hr></hr></div>

{(() => {
  var getCurrency = JSON.parse(localStorage.getItem("getCurrency"));
  var curr = [];
  for (var i = 0; i < getCurrency.length; i++) {
    const description = getCurrency[i]["description"];
    const actual_code = getCurrency[i]["actual_code"];
    // const short_descrp = getBranch[i]["short_descrp"];

    curr.push(
      <div
        key={i}
        id={actual_code}
        data-value={description}
        className="optionToSelect"
        onClick={() => {
          const val = "Currency"
          // setCurrency(e.target.getAttribute("data-value")); 
          populate(actual_code , description);
      
          handleCloseDialogue();
          }}>
          {`${actual_code} - ${description}`}
      </div>
    );
  }

  return curr;
})()}

</div></div>}
<div>
<input type="text" id="currency-2" value={input.currency && input.currency.description} style={{width:"267px", height:"29px", textAlign:"center" , marginRight:"3px"}} disabled  className="disabled"></input>
</div>
<div >
      <label style={{fontSize: "15px",marginRight:"3px"}}>FX Category</label>
      <select style={{width:"120px", height:"29px", textAlign:"left"}}>
        <option style={{width:"118px",height:"25px", textAlign:"center"}}>--Select--</option>
        <option>Forex</option>
        <option>Forgin</option>

       

      </select>
</div>
</div>




                    {/* ---------------- Account Mandate*--------------- */}
    

<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Account Mandate</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="text" id="accountMandate-2" value={input.accountMandate && input.accountMandate.description} style={{width:"290px",height:"29px", textAlign:"center" , marginRight:"3px"}} ></input><br></br>
  </div>
  <div>
  <button type="button" name="accountMandate" style={{borderColor:"whitesmoke", color:"#1aa3ff", marginRight:"10px" ,fontSize: "13px"}}onClick={(e) => {setTarget(e.target.name) ; setShowDialogue((prev)=>({...prev , AccountMandate:true }))}} ><MDBIcon fas icon="search-plus" /></button>
  
  {showDialogue.AccountMandate && <div style={{position:"absolute", top:"20%", marginLeft:"100px", backgroundColor: "white", border: "1px solid rgb(240, 233, 233)",borderRadius:" 8px 8px 2px 2px",color: "black",textAlign:"left", paddingLeft:"8px", paddingRight:"8px",cursor: "pointer", zIndex:"1"}}> 
<div>
<div onClick={()=>handleCloseDialogue()} style={{marginBottom:"5px", cursor: "pointer"}}>X <br></br>Account Madate<hr></hr></div>
{(() => {var getAccountMandate = JSON.parse(localStorage.getItem("getAccountMandate"));
  var curr = [];
  
  for (var i = 0; i < getAccountMandate.length; i++) {
  const description = getAccountMandate[i]["description"];
  const actual_code = getAccountMandate[i]["actual_code"];
  // const short_descrp = getAccountMandate[i]["short_descrp"];
  curr.push(
      <div
        key={i}
        id={actual_code}
        data-value={description}
        className="optionToSelect"
        onClick={() => {
          const val = "AccountMandate"
          // setCurrency(e.target.getAttribute("data-value")); 
          populate(actual_code , description);
      
          handleCloseDialogue();
          }}>
          {` ${description}`}
      </div> );}
return curr;})()} 

</div></div>}
<div></div>
</div>
</div>

                    {/* ------------------Arm Officer---------------------- */}

<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Arm Officer</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="text" style={{width:"120px", height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>
  <input type="text"  style={{width:"510px", height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
</div>
</div>


                  {/*----------------- Customer Segment--------------------- */}
<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Customer Segment</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="number" style={{width:"120px",height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>
  <input type="text"  style={{width:"510px",height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
</div>
</div>

                  {/* ------------------Customer sub segment---------------- */}

<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Cust.Sub Segment</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="number" style={{width:"120px",height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>
  <input type="text"  style={{width:"510px",height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
</div>
</div>



                   {/* ------------------------Sector----------------------- */}

<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Sector</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="number" value={input.sector && input.sector.actual_code} style={{width:"75px",height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>
  <button type="button" name="sector" style={{borderColor:"whitesmoke", color:"#1aa3ff", marginRight:"3px" ,fontSize: "13px"}}onClick={(e) => {setTarget(e.target.name) ; setShowDialogue((prev)=>({...prev , Sector:true }))}} ><MDBIcon fas icon="search-plus" /></button>

  {showDialogue.Sector && <div style={{position:"absolute", top:"20%", marginLeft:"100px", backgroundColor: "white", border: "1px solid rgb(240, 233, 233)",borderRadius:" 8px 8px 2px 2px",color: "black",textAlign:"left", paddingLeft:"8px", paddingRight:"8px",cursor: "pointer"}}> 
<div>
<div onClick={()=>handleCloseDialogue()} style={{marginBottom:"5px", cursor: "pointer"}}>X <br></br>Sector<hr></hr></div>
 
{(() => {
  var getSector = JSON.parse(localStorage.getItem("getSector"));
  var curr = [];
  for (var i = 0; i < getSector.length; i++) {
    const description = getSector[i]["description"];
    const actual_code = getSector[i]["actual_code"];
    // const short_descrp = getBranch[i]["short_descrp"];

    curr.push(
      <div
        key={i}
        id={actual_code}
        data-value={description}
        className="optionToSelect"
        onClick={() => {
          const val = "Sector"
          
          // setCurrency(e.target.getAttribute("data-value")); 
          populate(actual_code , description);
      
          handleCloseDialogue();
          }}>
          {`${actual_code} - ${description}`}
      </div>
    );
  }

  return curr;
})()}
</div></div>}

  <input type="text" id="sector" value={input.sector && input.sector.description} style={{width:"525px",height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
</div>
</div>


                 {/* ------------------------Sub Sector------------------- */}

<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Sub Sector</label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <input type="number" id="subSector-1" value={input.subSector && input.subSector.actual_code} style={{width:"75px",height:"29px", textAlign:"center" , marginRight:"3px"}} ></input>
  <button type="button" name="subSector" style={{borderColor:"whitesmoke", color:"#1aa3ff", marginRight:"3px" ,fontSize: "13px"}} onClick={(e) => {setTarget(e.target.name) ; setShowDialogue((prev)=>({...prev , SubSector:true }))}}><MDBIcon fas icon="search-plus" /></button>

  {showDialogue.SubSector && <div style={{position:"absolute", top:"20%", marginLeft:"100px", backgroundColor: "white", border: "1px solid rgb(240, 233, 233)",borderRadius:" 8px 8px 2px 2px",color: "black",textAlign:"left", paddingLeft:"8px", paddingRight:"8px",cursor: "pointer"}}> 
<div>
<div onClick={()=>handleCloseDialogue()} style={{marginBottom:"5px", cursor: "pointer"}}>X <br></br>Sub Sector<hr></hr></div>
  
{(() => {
  var getSubSector = JSON.parse(localStorage.getItem("getSubSector"));
  var curr = [];
  for (var i = 0; i < getSubSector.length; i++) {
    const description = getSubSector[i]["description"];
    const actual_code = getSubSector[i]["actual_code"];
    // const short_descrp = getBranch[i]["short_descrp"];

    curr.push(
      <div
        key={i}
        id={actual_code}
        data-value={description}
        className="optionToSelect"
        onClick={() => {
          const val = "SubSector"
          // setCurrency(e.target.getAttribute("data-value")); 
          populate(actual_code , description);
      
          handleCloseDialogue();
          }}>
          {`${actual_code} - ${description}`}
      </div>
    );
  }

  return curr;
})()}
</div></div>}

  <input type="text" id="subSector-2" value={input.subSector && input.subSector.description}  style={{width:"525px",height:"29px", textAlign:"center"}} disabled  className="disabled"></input><br></br>
  
</div>
</div>



            {/* ---------------------Freq. of Statement---------------- */}

<div style={{display:"flex",marginTop:"10px"}} >
   <div style={{width:"15%", textAlign:"right"}} >
      <label style={{fontSize: "15px"}}>Freq. Of Statement  
      </label>
  </div>
 <div  style={{ marginLeft:"10px"}} >
  <select style={{width:"120px", height:"29px", textAlign:"center"}}>
        <option style={{width:"118px", height:"20px", textAlign:"center"}}>--Select--</option>
        <option>Daily</option>
        <option>Weekly</option>
        <option>Biweekly</option>
        <option>Monthly</option>
        <option>Bimonthly</option>
        <option>Quaterly</option>
        <option>Annualy</option>
      </select>
</div>
<div style={{width:"8%", textAlign:"right",marginLeft:""}} >
      <label style={{fontSize: "15px"}}>Start Date
      </label>
  </div>
 <div  style={{ marginLeft:"3px"}} >
  <input type="date"  style={{width:"173px",height:"29px", textAlign:"center"}} ></input>
  
</div>
<div style={{width:"15%", textAlign:"center"}} >
      <label style={{fontSize: "15px"}}>Statement Required
      </label>
  </div>
 <div  style={{ marginLeft:"0px"}} >
  
  <select style={{width:"120px", height:"29px", textAlign:"center"}}>
        <option style={{width:"100px", height:"20px", textAlign:"center"}}>--Select--</option>
        <option>Yes</option>
        <option>No</option>


      </select>
  
</div>
</div>


</form>

</div>
<div className="continueBtn" style={{float:"right", marginRight:"24px"}}>
         <button type="button" onClick={()=>{setActiveTab("B")}}style={{borderColor:"whitesmoke"}}  className="controlBtn">Continue </button>
       </div>

</div>
        </>
    )
}