import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './photos.css';


export function Photo(props) {
	return (<> 
	
	

		<div className="c_usr_qw1">
      
      
         <div className="pp_usr1z">
               <span className="pfontforround1 proundedoBj">edit</span>
         </div>
         
			<div>
            <img alt=""  src={props.img} className="c_usr_img1"/>
         </div>
		</div>
	
	
	
	</>)
}



export default function Videos() {
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











<div className="pBlueWw2">
	

<div className="lLTl21zblt"> 
<Link to="/profile/1">Posts</Link>
</div>	

<div className="lLTl21zblt"> 
<Link to="/user/about/1">About</Link>
</div> 


<div className="lLTl21zblt">  
<Link to="/user/friends/1">Friends</Link>
</div>


<div className="lLTl21zblt">  
<Link to="/user/photos/1">Photos</Link>
</div>
	
	
</div>









<div className="White_Widgs2">
	
   <div className="White_Widgs">

         <div>

            <div className="phthdrsctns">
               <div>Videos</div>
            </div>

         </div>

         <div>


<div className="White_Widgs3 s31z">

<div className="s31z">  
   <input type="text" className="ppintpu123z pff1_zlkqe1z" placeholder="Search" value=""/>
 </div>
 
  <div className="s31z">  
                  <select className="">
                   <option> Sort by</option>
                     <option> By name</option>
                     <option> By time</option>
                     <option> Newest</option>
                     <option> Oldest</option>
                  </select>
               </div>
 
 
</div>
           

              

         </div>
         
         
         
         

   </div>

</div>
      













<div className="col-12 mcqwzfrd mm_usr_bot1m5">
	






<div className="Photo_listofusr1">
	
	
	
 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
	 	<Photo img={'/blogs/blog-post-thumb-1.jpg'}/>
			





</div>













	

</div>





</div>
	

<div className="col-3">


<div className="rprflmn">


<div><a href="/">Friend requests</a></div>
<div><a href="/">Sent requests</a></div>
<div><a href="/">Find friends</a></div>

</div>



</div>
	
	
	




</Main>	
	
	
	</>)
}


