import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './main.css'


export function Video(props) {
	return (<> 
	
	

		<div className="c_usr_qw1">
      
      
			<div><img alt="" src={props.img} className="c_usr_img1"/></div>
		
      
      
        
         <div className="pdnvof1zqwe"> <strong> [Lyrics] QM: 9 Songs of the Moving Heavens Full Song </strong> </div>
         
      
      <div className="pbdrqz_1qwe"> </div>
      
      <div className="MBlosg_p4d4">
      
      
			<div className="put_bhorfv">	
         
         <div>
            <img alt="" className="pic_for_vid1" src="/pics/0oRxrSt0fdw.jpg"/> 
         </div>

              <div className="pp_cvfl1">
                  <div>
                     <a href="/"><b>{props.name}</b></a>
                  </div>
                  
                  <div className="MblogDetails">
                     <span>Published: 10 July, 2021</span>
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








export default function Videos() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">



<div className="col-12">
	
	

<div className="cz_mn_2_1 mb151z">
	<div className="page-banner-box bg-10">
                    <h3>Video</h3>
                </div>
</div>





	{/**/}


<div className="ftrwithborder">

<form>

<h5 className="cpANglevidt12">Add new video</h5>

<div className="pHPD1FRM1">
   <label className="pHPD1FRM2">Youtube video id </label>
   <input type="text" name="page" className="inpText mnrgo12300" placeholder="qwe13qz" maxlength="3"/>
</div>


<div className="form-group">
			<label className="form-label">Description</label>
			<textarea name="description" maxlength="1024" placeholder="Description"></textarea>
</div>



<button className="dbutton cpANglevidt1">Post</button>

</form>


</div>


<div className="cpAnlge_Vidlnk">
<Link className="" to="/page/video/">Back</Link>
</div>


{/**/}





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


