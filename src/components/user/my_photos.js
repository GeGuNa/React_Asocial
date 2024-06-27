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
















<div className="col-12 mcqwzfrd mm_usr_bot1m5 ">
	



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


<div><a href="/">Settings</a></div>
<div><a href="/">Comments</a></div>
<div><a href="/">Reactions</a></div>

</div>



</div>
	
	
	




</Main>	
	
	
	</>)
}


