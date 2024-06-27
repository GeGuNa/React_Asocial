import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import { ShowBlogs } from './view.js';

export function Showblogs(props) {
	return (<> 
	
	

		<div className="angle_bblog2Widet">
			<div><img src={props.img} alt="" className="anlge_MBlog_img "/></div>
		
      <div> 
            <div className="angle_flblogfl">
            
            
               <div>  <img alt="" className="angle_bblog2Widetimg" src="/user/dan.jpg"/></div>
          <div>  
            <div> <Link to="/profile/1"> George Koberidze </Link></div>
            <div className="annge_whcl"> 10.15.2022 </div>
          </div>
            
            
            
            </div>
      </div>
      
      
      
			<div className="MBlog_pd" id="blogdistanceBetween">	
         
				<div>
               <Link className="pfiseblo1fsz1g1 angle_blgPostName" to="/page/blogs/1">{props.name}</Link>
            </div>
            
				<div className="MblogDetails">
               <span>{props.time}</span> 
               <span className="MblogDetailsPoint"></span> 
               <span>{props.comments}</span>
            </div>
            
				<div>{props.desc}</div>
            
            
			</div>
		</div>
	
	
	
	</>)
}


export function Showrigtblogs(props) {
	return (<>
	


<div className="card1">

   <div><Link to="/page/blogs/1" className="brq_topzz3123">{props.name}</Link></div>	
      
   <div> <span className="link__secondary">{props.time}</span> </div>
   
</div>


{/*
<div><img src={props.img} className="p_img_blog1" />	</div>
*/}



	
	
   
   {/*  <div>  <a className="MblogDetails" href="">{props.author}</a>*/}
	
{/*	{props.time && <>
	<span className="MblogDetailsPoint"></span> 
   <span className="MblogDetails">{props.time}</span>
   </>}

	<div>
*/}   
   


	
	



	
</>)
}








export default function Bloglst() {
	return (<>
	
<Main>


{/*mcqwzfrd*/}
<div className="col-9 cmnt2z1qwer">



<div className="col-12 ">
	
	
 <div className="PbannerBox">
      <img src="/components/3487d041793002c797df70289f72e728.jpg"/>
      <h3>Blogs</h3>
 </div>  
   
  

<a className="pfrovid1 mr_tp_q15 pfzrovid11z" href="/">
<span className="material-symbols-outlined vidspn2">add</span> Post new
</a>

<div className="cz213_srch">
	
<div className="cz1"> 	
<input type="text" className="wi_100" placeholder="Search by name"/> 
</div>

<div className="cz2"> 	
<button className="czsrchz__2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button>
</div>


</div>



<div className="angle_bblog2">
	
	

	
	<Showblogs img={'/blogs/blog-post-thumb-1.jpg'} name={'Top 3 JavaScript Frameworks'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	
	
	
	
	
	<Showblogs img={'/blogs/blog-post-thumb-2.jpg'} name={'About Remote Working'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	
		<Showblogs img={'/blogs/blog-post-thumb-3.jpg'} name={'A Guide to Becoming a Full-Stack Developer'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	
	

		<Showblogs img={'/blogs/blog-post-thumb-4.jpg'} name={'High Performance JavaScript'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	

		<Showblogs img={'/blogs/blog-post-thumb-5.jpg'} name={'Learn React in 24 Hours'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	

		<Showblogs img={'/blogs/blog-post-thumb-6.jpg'} name={'Learn React in 24 Hours'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	
	
	
	
	
	

<div>
		
<div className="bpblock11">

<a href="/" className="seeingallpblog">Next page  <svg className="right" width="24"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-long" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"></path></svg>

</a> 

</div>


	



</div>



	

</div>





</div>



</div>

	

<div className="col-3">



<div className="rprflm3nq1 mrqk_qrp115">

      <div className="rprflm3nq13z">

        <div className="ww_1081"> <input type="text" className="ww_1001" placeholder="Search"/> </div>
        <div>  <button className="button bnt_fr_blog1">Search</button> </div>

      </div>

</div>







<div className="rprflmn">


   <div><a href="/">Saved</a></div>
   <div><a href="/">History</a></div>
   <div><a href="/">Categories</a></div>
   <div><a href="/">Most popular</a></div>
   <div><a href="/">My blog</a></div>

</div>



<div className="ndsg4">

<h5 className="cardbody">Popular Posts</h5>

<div className="card1">



<Showrigtblogs time={'An hour ago'} name={'C++ pointers'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Objects'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Classes'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Memory allocations'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ templates'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Good sides'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>







</div>



</div>






{/**/}




<div className="ndsg4">

<h5 className="cardbody">Tags</h5>

<div className="card1">



<div className="blog_angle_tags">
<a href="/" className="btnWqlng2">Java</a>
<a href="/" className="btnWqlng2">Ruby</a>
<a href="/" className="btnWqlng2">Perl</a>
<a href="/" className="btnWqlng2">Php</a>
<a href="/" className="btnWqlng2">C#</a>
<a href="/" className="btnWqlng2">C++</a>
<a href="/" className="btnWqlng2">JavaScript</a>
<a href="/" className="btnWqlng2">Dlang</a>
<a href="/" className="btnWqlng2">Reactjs</a>
<a href="/" className="btnWqlng2">Angular</a>
<a href="/" className="btnWqlng2">SQL</a>
<a href="/" className="btnWqlng2">MySQL</a>
<a href="/" className="btnWqlng2">MariaDB</a>
<a href="/" className="btnWqlng2">PostgreSQL</a>
<a href="/" className="btnWqlng2">Haskell</a>
<a href="/" className="btnWqlng2">DNS</a>
<a href="/" className="btnWqlng2">TCP</a>
<a href="/" className="btnWqlng2">UDP</a>
</div>






</div>



</div>



{/**/}

</div>
	
	
	
	
	


</Main>	
	
	
	</>)
}


