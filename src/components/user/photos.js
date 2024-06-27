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
            <img alt="" src={props.img} className="c_usr_img1"/>
         </div>
		</div>
	
	
	
	</>)
}



export default function Photos() {
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


















<div className="pBlueWw2 mrfor_152">
	

<div className="lLTl21zblt"> 
<Link to="/profile/1">Posts</Link>
</div>	

<div className="lLTl21zblt "> 
<Link to="/user/about/1">About</Link>
</div> 


<div className="lLTl21zblt">  
<Link to="/user/friends/1">Friends</Link>
</div>


<div className="lLTl21zblt active"  active="">  
<Link to="">Photos</Link>
</div>
	
	
	
</div>













<div className="col-12 mcqwzfrd mm_usr_bot1m5 mrfor_152">
	



<div className="us_rf_flzex1">

<div><h5 className="pp_h21">Photos</h5></div>

<div><a href="/" className="a_forflex">Upload new</a></div>

</div>




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


