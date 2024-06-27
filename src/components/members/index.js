import React from 'react'
import { Link } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './index.css'



	
	
export default function Members() {
	

function DsUser(){
   return     <div className="mmebrMAin">
            <div className="r_ow1">
                  <div><img alt="" src="/user/elise.jpg"/></div>
                  <div><Link to="/profile/1">Abracada</Link></div>
             </div>
             <div className="rfl"> 
                  <button> Message</button>
             </div>
      </div>
}
	
	
	return (<>
	




<Main>

<div className="col-9 cmnt2z1qwer">



<div className="cz_mn_2_1 mb151z">
<div className="PbannerBox2">

   <img alt="" src="/components/240_F_729040089_t2FPQmBGZ1rM3PWsRUlclLqm0GnjGPZu.jpg"/>
   <h3>Members</h3>

</div>
</div>





   
<h4 className="elh">Members</h4>   
   
   
  
   
   
<div className="member_fl">
   <a href="/" className="a_active">Popular</a>
   <a href="/">Boys</a>
   <a href="/">Girls</a>
   <a href="/">New</a>
   <a href="/">Old</a>
</div>   
      
   
   
   
<div className="member_fl3">
   <div>
         <textarea placeholder="Search users"></textarea>
   </div>
   <div>
   
         <div className="diz2">
            <select>
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Both</option>
            </select>


            <select>
            <option value="">With photo</option>
            <option value="">Without photo</option>
            <option value="">Doesn't matter</option>
            </select>
      
         <button>Search</button>
         
         </div>

   </div>

</div>   
   
   
 

<DsUser/>
<DsUser/>
<DsUser/>
<DsUser/>
<DsUser/>
<DsUser/>
<DsUser/>
<DsUser/>  
  
  
  
  
  
  

</div>






















	<div className="col-3">


		<div className="rprflmn">

			<div><a href="/">News</a></div>
			<div><a href="/">Reactions</a></div>
			<div><a href="/">Search</a></div>


		</div>

	</div>





</Main>





	
	
	</>)	
	
}










