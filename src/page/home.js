import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Main } from '../page/funcs.js'
import { Useraw } from '../inc/User.js'

export function Pstwdtls({pic, text, date,prflpic,prflname,like,share,comment}) {
		

return (<>



<div className="czlast">

<div className="left cz_pdng21"><img src={pic}/></div>

<div className="cz_datq_pdngaz">
<div>{text}</div>
</div>


<div className="left cz_datq_pdngazz">
<img src={prflpic} width="25" height="25"/>  <a href="/">{prflname}</a>
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
	
return (<div><img src={pic}/></div>)
}



function Home() {
	
const [cz, Setcz] = useState({aba:'15',baba:'25'})	


console.log(Useraw())


	
 return (<>
  
  
<Main>


   <div className="col-12">



{/**/}
<div className="angl_home">


      <form className="angele_form frmtop15" style={{marginTop:'0px'}}>
         
         <div className="anmglq_entr2">
            <h5 className="inp232z">Welcome Back !</h5>
            <p> Sign in to continue to angle.</p>
         </div>
         
         
         <div className="inp2">Username</div>
         <input type="text" placeholder="Enter your Username" className="account__logininput" name="user"/>
               
         <div className="inp2">Password</div>
         
         <input type="text"  placeholder="Enter your password" className="account__logininput" name="pass"/>
         
              <div className="angl_2231"> 
               <span><input type="checkbox"/> Remember me </span>
               <a className="angl_lnkr_2">Forgot password? </a>
            </div>
         
         
         
         <button className="angle_button2">Enter</button>
         
         
      
         <div className="angle_brbot1"></div>
         
            <div className="angl_forps"> 
            Not a member?    <Link className="angl_lnkr_2" to="/signup">Sign Up</Link>
            </div>
        
  
          
          <div className="angle_flxBoxes">
            <a href="/" className="account__sociallink">Facebook</a>
            <a href="/" className="account__sociallink google">Google</a>
            <a href="/" className="account__sociallink twitter">Twitter</a>
          </div>
         
         </form>
       
         

   </div>
 {/**/} 






   </div>

  
 </Main> 
   
    
    </>
    
    
  );
}

export default Home;
