import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './main.css'
import '../members/index.css'

export function Video(props) {

	return (<> 
	
	

		<div className="c_usr_qw1">
      
      
			<div><img alt="" src={props.img} className="c_usr_img1"/></div>
		
      
      
        
         <div className="pdnvof1zqwe"> 
            <Link className="pvidcl1" to={props.vidurl}>
                {props.vname} 
            </Link>
         </div>
         
      
      <div className="pbdrqz_1qwe"> </div>
      
      <div className="MBlosg_p4d4">
      
      
			<div className="put_bhorfv">	
         
         <div>
            <img alt="" className="pic_for_vid1" src="/pics/0oRxrSt0fdw.jpg"/> 
         </div>

              <div className="pp_cvfl1">
                  <div>
                     <Link className="secColor" to={props.aurl}>{props.name}</Link>
                  </div>
                  
                  <div className="MblogDetails">
                     <span>{props.views} views</span>
                  </div>
                  
                </div>
            
			</div>
         
         
       </div>  
         
         
         
         
		</div>
	
	
	
	</>)
}


export function Showrigtblogs(props) {
	return (<>
	


<div>


<div className="maykchild"> 


	<div><Link to="/page/video/1">{props.name}</Link></div>	
	<div><Link to="/" className="MblogDetails">{props.author}</Link>
	
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








export default function Videos() {
   
 const vidList = [
 
 
{
    video_pic:'/blogs/blog-post-thumb-1.jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},


{
    video_pic:'/video/Abstract+stars.jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/2',
    vid_url:'/page/video/2',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},
{
    video_pic:'/video/maxresdefault.jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/3',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},
{
    video_pic:'/video/maxresdefault (1).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/3',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (2).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/4',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (3).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/5',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (4).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (5).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (6).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (7).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (8).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},
{
    video_pic:'/video/maxresdefault (9).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (10).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (11).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (12).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (13).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (14).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},{
    video_pic:'/video/maxresdefault (15).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
},





 ]  
   
   
   
	return (<>
   
	
<Main>



<div className="col-9 cmnt2z1qwer">



<div className="col-12">
	
	

<div className="cz_mn_2_1 mb151z">


<div className="PbannerBox2"> 
   <img alt="" src="/components/240_F_729040089_t2FPQmBGZ1rM3PWsRUlclLqm0GnjGPZu.jpg"/>
   <h3>Video</h3>  
</div>
  
  
  
</div>





      <Link to="/" className="pfrovid1">
         <span className="material-symbols-outlined vidspn2">movie</span> Post new
      </Link>




<div className="member_fl3">

   <div>
      <textarea placeholder="Search videos"></textarea>
   </div>
   
<div>

   <div className="diz2">

      <select>
         <option value="">By Male</option>
         <option value="">By Female</option>
         <option value="">Both</option>
      </select>
      
      <select>
         <option value="">With description</option>
         <option value="">Without description</option>
         <option value="">Doesn't matter</option>
      </select>


      <button>Search</button>

   </div>
   
</div>

</div>



<div className="angle_video_2">

   <div className="ver1">
      <div className=""><span className="material-symbols-outlined">local_fire_department</span> Popular</div>
      <div className=""><span className="material-symbols-outlined">star</span> Saved</div>
      <div className=""><span className="material-symbols-outlined">search</span> Search</div>
      <div className=""><span className="material-symbols-outlined">schedule</span> History</div>
   </div>
   
</div>



<div className="P_vid_lists1">
	
{/*
  
  
{
    video_pic:'/video/maxresdefault (11).jpg',
    author_pic:'/pics/0oRxrSt0fdw.jpg',
    author_url:'/profile/1',
    vid_url:'/page/video/1',
    views:'1700',
    name:'[Lyrics] QM: 9 Songs of the Moving Heavens Full Song',
}   
   
   */}	


{vidList.map((k,v) => (<>
   
  <Video 
  img={k.video_pic} 
  vname={k.name}
  aurl={k.author_url} 
  apic={k.author_pic} 
  vidurl={k.vid_url} 
  views={k.views} 
  vname={k.name} 
  name={'John koberidze'} />
 
</>))}
	
	

	
	

<div>
	{/*	
   <div className="bpblock11">

      <a href="/" className="seeingallpblog">Next page  <svg className="right" width="24"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-long" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"></path></svg>

      </a> 

   </div>
*/}

	



</div>



	

</div>





</div>



</div>

	

<div className="col-3">


<div className="rprflmn">


<div className="act_ive"><a href="/">Saved</a></div>
<div><a href="/">History</a></div>
<div><a href="/">Liked videos</a></div>
<div><a href="/">Most popular</a></div>
<div><a href="/">My videos</a></div>

</div>



<div className="ndsg4">

<div className="t21">Random videos</div>


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


