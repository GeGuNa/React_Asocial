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
<img alt="" src={prflpic} width="25" height="25"/>  <a href=".">{prflname}</a>
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
	
return (<div><img  alt="" src={pic}/></div>)
}



function Home() {
	
const [cz, Setcz] = useState({aba:'15',baba:'25'})	


console.log(Useraw())


	
 return (<>
  
  
  
<NotAuthorized>


   <div className="responsiveForNotAuthorized">




{/**/}
<div className="angl_home">


        <div className="angle_br1zh3">
            <h5 className="inp232z">Reset Password</h5>
         </div>
         


      <form className="angele_form frmtop15 anglq_mp23531" style={{marginTop:'0px'}}>
         
         <div className="angle_mpb52">Please enter your email or mobile number to search for your account.</div>
         <input type="text" placeholder="Enter your Username" className="account__logininput" name="user"/>
               

      
         
         <button className="angle_button2">Send request</button>
    
         
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
