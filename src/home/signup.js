import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NotAuthorized } from '../page/funcs.js'
import { Useraw } from '../inc/User.js'

export function Pstwdtls({pic, text, date,prflpic,prflname,like,share,comment}) {
		

return (<>



<div className="czlast">

<div className="left cz_pdng21"><img alt="" src={pic}/></div>

<div className="cz_datq_pdngaz">
<div>{text}</div>
</div>


<div className="left cz_datq_pdngazz">
<img alt="" src={prflpic} width="25" height="25"/>  <a href="/">{prflname}</a>
</div>

<div className="left cz_datq_pdngazz mnlstgnd cz_2z">{date}</div>

<div className="right" id="rght_details" style={{paddingRight: '10px'}}>
<span><svg className="cp_share_11"></svg> {share}</span>
<span><svg className="cmnts_otqz22"></svg> {comment}</span>
<span><svg className="lzzzf123a_22"></svg> {like} </span>
</div>
</div>


</>)
}






export function Shwpfr({pic}) {
	
return (<div><img alt="" src={pic}/></div>)
}



function Home() {


 return (<>
  
  
  
<NotAuthorized>


   <div className="responsiveForNotAuthorized">





{/**/}
<div className="angl_home">


      <form className="angele_form frmtop15" style={{marginTop:'0px'}}>
         
         <div className="anmglq_entr2">
            <h5 className="inp232z">Create an Account</h5>
            <p>Register here if you are a new customer.</p>
         </div>

         
         <div className="inp2">Username</div>
         <input type="text" placeholder="Enter your Username" className="account__logininput" name="Username"/>
      
          <div className="inp2">Email</div>
         <input type="text"  placeholder="Enter your Email" className="account__logininput" name="Email"/>
           
      
               
         <div className="inp2">Password</div>
         <input type="text"  placeholder="Enter your password" className="account__logininput" name="Password"/>
         
         
         <div className="inp2">Confirm Password</div>
         <input type="text"  placeholder="Confirm Password" className="account__logininput" name="Repassword"/>
                  
         
         
         
              <div className="gapflex2"> 
              
               <span><input type="checkbox"/> </span>

               <span>I have read and agree to <a className="angl_lnkr_2" href="/">the terms & conditions </a></span>
            </div>
         
         
         
         <button className="angle_button2">Sign up</button>
         
         
   
         
            <div className="angl_forps"> 
            Already member?    <Link className="angl_lnkr_2" to="/">Sign In</Link>
            </div>
        
         
         </form>
       
         

   </div>
 {/**/} 






   </div>

  
 </NotAuthorized> 
   
    
    </>
    
    
  );
}

export default Home;
