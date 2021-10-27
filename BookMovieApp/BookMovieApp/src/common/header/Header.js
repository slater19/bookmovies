import React,{useState} from "react";
import "./style.css";
import Modal from 'react-modal';
import Button from "@material-ui/core/Button";
import { Tab,Tabs} from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import {ValidatorForm} from 'react-material-ui-form-validator';
import { Link } from "react-router-dom";










export default function Header() {
  const [bookShow,setbookShow]=React.useState(false); // variable for enabling book show button
  const [value,setValue]=React.useState(0); 
  const handleTabs=(event,val)=> { setValue(val)} //variable for switching tabs
  const [y,setY]=React.useState(false);
  const handleModal= (e)=>{setY(true)} //variable for enabling modal
  
  const [reg,setReg]=React.useState(false);  //variable for succesful registration
  
 
  
  
  const [Fname, setFname] = useState("dispNone");
  const [Lname, setLname] = useState("dispNone");
  const [Email, setEmail] = useState("dispNone");
  const [Password, setPassword] = useState("dispNone");
  const [Contact, setContact] = useState("dispNone");

  const [Uname, setUname] = useState("dispNone");
  const [Pass, setPass] = useState("dispNone");
  
  
  
  
  
  
const FnameChangeHandler = (event) => {
  setFname(event.target.value);}

const LnameHandler = (event) => {
    setLname(event.target.value);}

const EmailHandler = (event) => {
      setEmail(event.target.value);}

const PasswordChangeHandler = (event) => {
        setPassword(event.target.value);}

const ContactChangeHandler = (event) => {
          setContact(event.target.value);}

const UnameChangeHandler = (event) => {
      setUname(event.target.value);}
          
        const PassChangeHandler = (event) => {
              setPass
              (event.target.value);}    
  
  
  
  
  
  const loginHandler= ()=>{    //clicking login btn        
    
    Uname === "" ? setUname("dispBlock") : setUname("dispNone");
    Pass === "" ? setPass("dispBlock") : setPass("dispNone");
    if(Uname===""||Pass==="")
    {

    }
    else
    {setbookShow(true);  // enabling book show btn
     
    }  
  }


  const handleReg = () => {        //clicking register button //displaying register messsage
    Fname === "" ? setFname("dispBlock") : setFname("dispNone");
    Lname === "" ? setLname("dispBlock") : setLname("dispNone");
    Email === "" ? setEmail("dispBlock") : setEmail("dispNone");
    Password === "" ? setPassword("dispBlock") : setPassword("dispNone");
    Contact === "" ? setContact("dispBlock") : setContact("dispNone");
    if(Fname===""||Lname===""||Email===""||Password===""||Contact==="")
    {
  
    }
    else
    {
      
    setReg(true);
    }  
    
 

  }
        
          
 
  return (
 

 
 <div>
  <div class="header">   
  <svg id="Layer_1"  xmlns="http://www.w3.org/2000/svg"   //logo
      height="35px" viewBox="0 0 512 512">
 <path d="M352,255.5l-192,96v-192L352,255.5z M512,31.5v448H0v-448H512z M320,95.5h64v-32h-64V95.5z M224,95.5h64v-32h-64V95.5z
    M128,95.5h64v-32h-64V95.5z M32,95.5h64v-32H32V95.5z M96,415.5H32v32h64V415.5z M192,415.5h-64v32h64V415.5z M288,415.5h-64v32h64
   V415.5z M384,415.5h-64v32h64V415.5z M480,415.5h-64v32h64V415.5z M480,127.5H32v256h448V127.5z M480,63.5h-64v32h64V63.5z"/>
 </svg>

 <div className="header-right">    {/*Login and Book show buttons */}
         
    {
    bookShow &&( <Link to={"/screens/bookshow/"}><Button variant="contained" color="primary">
     BOOK SHOW
    </Button></Link>)}                   {/*Link to Book Show page */}
    <Button variant="contained" color="default" onClick={handleModal} >                                      {/*opening modal */}
      Login
    </Button>
      </div>

 </div>   


 <Modal className="mod" isOpen={y}>
     
      
        
   
    

    
    
    
    
    
    
    
     <Tabs value={value} onChange={handleTabs}>   {/*switching tabs*/}
     <Tab label="LOGIN"/>
     <Tab label="REGISTER"/>
     </Tabs>
     
     {value==0 &&<div>
     
      <ValidatorForm>                                 
     <FormControl required className="formControl">  {/*Login tab*/}

     <InputLabel htmlFor="Username">
Username
</InputLabel>
<Input
                 id="Username"
                 validators={['required']}
                 onChange={UnameChangeHandler}       
                 
               />
               <FormHelperText className="Uname" >                       
           <span className="red">Required</span>
         </FormHelperText>   
               
             </FormControl><br/><br/>
 
             <FormControl required className="formControl">
               <InputLabel htmlFor="Password">
                 Password
               </InputLabel>
               <Input
                 id="Password"
                 type='password'
                 validators={['required']}
                 onChange={PassChangeHandler}
                 />
                <FormHelperText className="Pass" >
           <span className="red">Required</span>
         </FormHelperText>
       

             
             </FormControl><br/><br/>
 
                 
 
              
             <Button type="submit" variant="contained" color="primary"  onClick={loginHandler}   
     
   >
  LOGIN
 </Button>
 </ValidatorForm>
 </div>    }
 
   
 
 
 
 
   { value>0 &&<div>                               {/*Register tab*/}
       
 
        <ValidatorForm>
       <FormControl required className="formControl">
         <InputLabel htmlFor="First">
          First Name
         </InputLabel>
         <Input
           id="First"
           onChange={FnameChangeHandler}
           validators={['required']}
         />
         <FormHelperText className="Fname">
           <span className="red">Required</span>
         </FormHelperText>
       </FormControl><br/>
 
       <FormControl required className="formControl">
         <InputLabel htmlFor="Last">
           Last Name
         </InputLabel>
         <Input
           id="Last"
           onChange={LnameHandler}
           validators={['required']}
         />
         <FormHelperText className="Lname" >
           <span className="red">Required</span>
         </FormHelperText>
       </FormControl><br/>
 
       <FormControl required className="formControl">
         <InputLabel htmlFor="Email">
           Email
         </InputLabel>
         <Input
           id="Email"
           onChange={EmailHandler}
           validators={['required']}
         />
         <FormHelperText className="Email">
           <span className="red" >Required</span>
         </FormHelperText>
       </FormControl><br/>
 
       <FormControl required className="formControl">
         <InputLabel htmlFor="Password">
           Password
         </InputLabel>
         <Input
           id="Password"
           type='password'
           onChange={PasswordChangeHandler}
           validators={['required']}
         />
         <FormHelperText className="Password" >
           <span className="red">Required</span>
         </FormHelperText>
       </FormControl><br/>
 
       <FormControl required className="formControl">
         <InputLabel htmlFor="Contact">
           Contact No
         </InputLabel>
         <Input
           id="Contact"
           onChange={ContactChangeHandler}
           validators={['required']}
         />
         <FormHelperText className="Contact" >
           <span className="red">Required</span>
         </FormHelperText>
       </FormControl><br/>
 
       {reg && <h4>Registration Successful.Please Login!</h4>}    
       
       
       <Button onClick={handleReg} variant="contained" color="primary">
    REGISTER
 </Button>
 </ValidatorForm>
 </div>
 }
 
       
</Modal>

</div>
 

  );
}