import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './photos.css';




export default function Videos() {
   
   document.title = "About user"
   
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

<div className="lLTl21zblt active" active=""> 
<Link to="">About</Link>
</div> 


<div className="lLTl21zblt">  
<Link to="/user/friends/1">Friends</Link>
</div>


<div className="lLTl21zblt">  
<Link to="/user/photos/1">Photos</Link>
</div>
	
	
</div>










<div className="cm_stex_8z21z">
	
	
	
<div className="cm_stex_5">Personal Information</div>




	
	<div className="cm_stex_7">
		<div>
			<span className="cm_stex_6">Birthplace:</span> 
			<span className="cm_stex_8"> Georgia</span> 
		</div>
	</div>



	<div className="cm_stex_7">
		<div>
			<span className="cm_stex_6">Full name:</span> 
			<span className="cm_stex_8"> Koberidze </span> 
		</div>
	</div>





	<div className="cm_stex_7">
		<div>
			<span className="cm_stex_6">Birthday:</span> 
			<span className="cm_stex_8"> Jan 1, 2014 </span> 
		</div>
	</div>



	<div className="cm_stex_7">
		<div>
			<span className="cm_stex_6">Email:</span> 
			<span className="cm_stex_8">  whocares@mail.com  </span> 
		</div>
	</div>



	<div className="cm_stex_7">
		<div>
			<span className="cm_stex_6">Gender:</span> 
			<span className="cm_stex_8">  Male  </span> 
		</div>
	</div>





	<div className="cm_stex_7">
		<div>
			<span className="cm_stex_6">Languages:</span> 
			<span className="cm_stex_8">  English  </span> 
		</div>
	</div>






	<div className="cm_stex_7">
		<div>
			<span className="cm_stex_6">Joined:</span> 
			<span className="cm_stex_8">  23 Jul, 2023  </span> 
		</div>
	</div>



	<div className="cm_stex_7">
		<div>
			<span className="cm_stex_6">Last visit:</span> 
			<span className="cm_stex_8">   now  </span> 
		</div>
	</div>



<div className="cm_stex_6 p1_21z"> About me  </div>	
	
<div className="cm_stex_5 p1_z21z">

	<div className="cm_stex_8">	Who cares	</div>

</div>






<div className="kkppr_2"></div>

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


