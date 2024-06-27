import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './fr.css';



	
	
export function Gift(props) {
	return (<> 
	
	

		<div className="Category2 CenteringDiv PTB">
      
      
			
      
        
   <div className="pdnvof1zqwe">
   
     <img alt="" src={props.img} className="c_usr_img1frFriends"/>
		
      
    
    </div>
         
      
      
      <div className="MBlosg_p4d4">
      
    

              <div className="pp_cvfl1">
              
                  <div>
                     <Link href="/profile/1" className="a">
                        <span className="Iname">{props.author}</span>
                     </Link>
                  </div>
                  
                  <div className="MblogDetails">
                     <span>{props.when}</span>
                  </div>
                  
                </div>
            
		
         <div className="PTB_Boxes">
         
         </div>
         
       </div>  
         
         
         
         
		</div>
	
	
	
	</>)
}




export default function Gifts() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">





<div className="uoppfr_crbrrMain3Yoo borderBottom">
	
	
<div className="aKDiplayImage" style={{ 
      backgroundImage: `url('/Abstract+stars.jpg')` 
    }}>
    
	<div className="ph_fr1zztpsiz15">
		
		<div className="pp_abs41z">
			<div> 
            <img alt="" className="pz_nick2" src="/us_man.png" width="128" height="128"/>
         </div>
			<div className="pz_nick1">Daily</div>
		</div>
		
		
	</div>


</div>




</div>

















  <div className="cztr1frnd21 frmbot115 mr_gfrgiftop15">
	

<div className="cnf213zble"> 
<a href="/">By boys</a>
</div> 

<div className="cnf213zble"> 
<a href="/">By girls </a>
</div> 


	
</div>   
   
   








<div className="col-12">
	





<div className="Fr_displaying_friends">


<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>

<Gift img={'/gifts/256 (7).jpg'} author={'John koberidze'} when={'10m ago'}/>




</div>



	

</div>





</div>
	

<div className="col-3">





<div className="rprflmn">
   <div className="act_ive"><Link to="/">Friend requests</Link></div>
   <div><Link to="/">Sent requests</Link></div>
   <div><Link to="/">Find friends</Link></div>
   <div><Link to="/">From you city</Link></div>
</div>




</div>
	
	
	




</Main>	
	
	
	</>)
}


