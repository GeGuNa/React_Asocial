import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './chat.css';

export function User(props) {
	return (<> 
	
	

		<div className="pDisplayinUSer1">
      
         <div className="pflexingSt12">
         
         
               <div className="ppf_zcen">
               
               
               <div className="pflexingSt412">
                  <div> <img  alt="" src={props.img} className="c_uqwesr_img1stqw"/> </div>
               
               
                     <div>
                     
                              <div className="pdn_bt1z">
                                 <a className="pfiseblo1fsz1g1" href="/">
                                    {props.name}
                                 </a>
                              </div>
            
                  <div className="MblogDetails">
                     <span> 7:45 AM </span>
                  </div>
               
               
               
               
                      </div>
               
               </div>
                  
               
               
               	
               
               </div>
         
         
                     
      <div className="c_fl1xflqp">
      
      {/* */}
      
      
      
      
      	<div className="MBlog_pd" id="blogdistanceBetween">	
         
   
            {/*
				<div className="ppusr_to5p1 btn2fl">
               <div> <button className="btn_f1"> Add friend </button></div>
               <div> <button className="btn4_f41">  Message </button> </div>
            </div>
            */}
            
			</div>
      
      
      
      {/* */ }
      </div>
         
         
         
         
         </div>
         
			
     <div className="ftextda">
     
     qweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqw
     
     eqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweqqweq 
     
     
     <div className="c_chat1">
        <a className="Psqwe_id_lk frlinksa ctex2t1" href="/">Reply</a>
        <a className="frlinksa ctex2t1" href="/">Like</a>
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








export default function Users() {
   
 const howmany = 15;  
   
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">



<div className="col-12">

   
 <div className="PbannerBox"> 
   <img  alt="" src="/components/pexels-photo-4307868.jpeg"/>
   <h3>Live Chat</h3>  
</div>
  
   
   
   
<div className="pcha123_zqe"></div>



<div className="PostingArea">

<div> <img  alt="" src="/blogs/blog-post-thumb-1.jpg" className="c_uqwesr_img1stqw"/> </div>
<div className="textarea1"> <textarea className="PostingAreatexta" placeholde="Text"></textarea> </div>
<div> <button className="btn4_f441">  Send </button> </div>

</div>


<div className="PlacingHorizontally">
	
	

	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
		
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>	
	<User img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	
	
	
	
	
	
	

<div>
	{/*	
   <div className="bpblock11">

      <a href="" className="seeingallpblog">Next page  <svg className="right" width="24"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-long" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"></path></svg>

      </a> 

   </div>
*/}

	



</div>



	

</div>





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



</div>
	
	
	
	
	


</Main>	
	
	
	</>)
}


