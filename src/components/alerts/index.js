import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './index.css';





export function ShWd(props) {
	return (<> 
	
	

	<div className="HeadingD22">

	<div>	<img src="/img/143086968_2856368904622192_1959732218791162458_n.png" className="ph_for_alerts"/>	</div>

	<div>

		<div>	
			
	<a href="/">
		<span className="nickCOlorQzk1zq">John Koberidze</span>
	</a> 
			<span className="SpanTimeForText"> 15 Aug 2023 03:03 </span>	
		</div>
	

		<div> 
			<div className="SpanTimeForText">Mentioned you in a live  <a href="/">Chat</a></div>

		</div>



	</div>



</div>
	
	
	
	</>)
}


export function Showrigtblogs(props) {
	return (<>
	


<div>

{/*
<div><img src={props.img} className="p_img_blog1" />	</div>
*/}


<div className="maykchild"> 
	<div><a href="/">{props.name}</a></div>	
	<div><a className="MblogDetails" href="/">{props.author}</a>
	
	{props.time && <>
	<span className="MblogDetailsPoint"></span> 
   <span className="MblogDetails">{props.time}</span>
   </>}
	<div>
         <span className="link__secondary">13 comments</span>
   </div>
	</div>	
	

	
	
</div>	

</div>

	
</>)
}








export default function Alerts() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">



<div className="col-12">
	
	

<div className="privacyh3">Notifications</div>




	

	
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<ShWd img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
		
	
	
	
	






</div>



</div>

	

<div className="col-3">


<div className="rprflmn">


<div><a href="/">Saved</a></div>
<div><a href="/">History</a></div>
<div><a href="/">Categories</a></div>
<div><a href="/">Most popular</a></div>
<div><a href="/">My blog</a></div>

</div>



<div className="ndsg4">

<div className="t21">New blogs</div>


<div className="mayk">



<Showrigtblogs name={'C++ pointers'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Objects'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Classes'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Memory allocations'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ templates'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Good sides'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>







</div>


<div className="rnmg31">
<a href="/" className="seeingallpblog">See all</a>
</div>


</div>



</div>
	
	
	
	
	


</Main>	
	
	
	</>)
}


