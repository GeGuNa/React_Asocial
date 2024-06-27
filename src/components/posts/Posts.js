import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './Posts.css'



export function Shwimg({pic, alt}){
	return (<>
            <div>
               <img alt="" src="/photos/jJ7g1VXRvqw.jpg"/>
            </div>
      </>)}


export function PstReactions(){
  return (<>
 
 
 <div className="r_eact1">
 
 <div> 
 
         <div className="r_eact2">
         
            <div>
               <div className="rflear1_z3">
                  <div>😂</div>
                  <div>😢</div>
               </div>
            </div>
           
           <div>1521</div>
            
            
         </div> 
 
 </div>

 <div> 22 Comments </div>
 
 
 </div> 
  
  
</>) 
}


export function ShowPosts(){
   return (<>
   
   
    <div className="cm_ntfr1">
   
   
      <div><img alt="" src="/pics/282.jpg" className="blm_cmnt1pic2"/></div>
   
   <div className="cmn1z_f1">
   
      <div className="pb_rq123zbakc23">
      
         <div>
            <a className="clz1z_wq412z1" href="/">George Washington</a>
            <div><span className="MblogDetails">an hour ago</span></div>
         </div>
         
         <div className="pmess1z">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
         </div>
      
      </div>
   
      <div id="pstQWEZ" className="pcnalingle1">
      
         <a className="Psqwe_id_lk frlinksa ctex2t1" href="/">Reply</a>
         
         <a className="frlinksa ctex2t1" href="/">Like</a></div>
         
      </div>
   
   </div>
   
   
   </>)
   
}


export function USRPost(){
  
 return (<> 
 

<div className="col-12">

<div  className="snacks6">

<div className="ce12524">

<div>

<div className="left snacks7">
   <img alt="" className="brdr21" src="/pics/KXTvmL_0KAs.jpg" width="50" height="50"/> 
</div>

<div className="left snacks8">
   <div><a href="/">Nini koberidze</a></div>
   <div><span className="snacks9">6 Jan at 2:00 am</span></div>
   </div><div className="right snacks10">
   
   <div>
            <div><a href="/"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg> </a></div>
   
   </div>
</div>

   <div className="crlrbth">
      <div className="text">Nice very nice, i like this one !!!</div>
      <div className="eb_marg1">     <img alt="" src="/blogs/image_2.jpg.webp"/> </div>
   </div>
   
   
  <PstReactions />
   
   
      
   <div className="cl_flprfy1_113btn">
      <div className=""><span className="material-symbols-outlined">thumb_up</span> Reaction</div>
      <div className=""><span className="material-symbols-outlined">mode_comment</span> Comment</div>
      <div className=""><span className="material-symbols-outlined">share</span> Share</div>
   </div>

   <div className="crlrbth k_dd_fl1zbrq">
      <div className="dd_flex2">
         <img alt="" className="dd_flex2_ph" src="/user/azzouz.jpg"/>
         <input type="text" placeholder="Comment as Phantom" />
         <button>Post</button>
      </div>
   </div> 

<div className="bbrdq12_2"></div>


</div>

   <div>


<div className="BLog_Cmnt">
   
<ShowPosts/>
   <ShowPosts/>
   
   <ShowPosts/>
   
   <ShowPosts/>
   
   <ShowPosts/>
   
   
   
   
</div>



   </div>
   


</div>

</div>

</div>


 
 </>) 
   
   
}


export function Showfrndofps({pic, alt, name}){
	return (<> 
	
	
   <div>

      <div>

         <div><img src={pic} alt={alt} className="cProfFrRightListFlxcolPHtround"/>	</div> 

         <div className="CprqweCLrqcnt"><Link className="CprqweCLrq" to="/">{name}</Link></div>

      </div>

   </div>

	
</>)
}



export default function Privateprof() {

return (<>
  
  
<Main>



<div className="col-9">



   <div className="col-12"> 


      <USRPost />


   </div>
      


</div>
	

<div className="col-3">


<div className="rnmg30">

<div className="t21">Gifts <Link to="/gifts"> <b>5000</b> </Link></div>


<div className="prfrmn">


<div>
<img alt="" src="/gifts/256 (9).jpg" width="80" height="80"/>	
</div>


<div>
<img alt="" src="/gifts/256 (7).jpg" width="80" height="80"/>	
</div>


<div>
<img alt="" src="/gifts/256.jpg" width="80" height="80"/>	
</div>


<div>
<img alt="" src="/gifts/256.jpg" width="80" height="80"/>	
</div>


<div>
<img alt="" src="/gifts/256.jpg" width="80" height="80"/>	
</div>


<div>
<img alt="" src="/gifts/256.jpg" width="80" height="80"/>	
</div>


<div>
<img alt="" src="/gifts/256 (1).jpg" width="80" height="80"/>	
</div>


<div>
<img alt="" src="/gifts/256 (4).jpg" width="80" height="80"/>	
</div>

</div>


<div className="rnmg31">
<Link to="/" className="rnm5g3521213">All gifts</Link>
</div>


</div>










<div className="rnmg33">


<div className="rprflmn">


<div><Link to="/">News</Link></div>
<div><Link to="/">Reactions</Link></div>
<div><Link to="/">Search</Link></div>
<div><Link to="/">My page</Link></div>

</div>






</div>









<div className="cProfFrRight">

<div className="cfRlsTTl">Friends <Link to="/" className="cfRlsTTlNk"> 1,128 </Link></div>


<div className="cProfFrRightList">




<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>


</div>



</div>





<div className="Cz134z_22">


<div className="cfRlsTTl"> <span>Following</span> <Link to="/" className="cfRlsTTlNk"> 1,128 </Link> </div>




<div className="cZQEFlWEQ22">



<div>

<div><img className="brdr21" src="/photos/CYjP_-UxpPs.jpg" alt="" width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link to="/" className="CZD_11zz">Not everyone will understand</Link></div>	
	<div className="CZr_desc">Dont need description</div>	
</div>	

</div>



<div>

<div><img className="brdr21" src="/photos/CYjP_-UxpPs.jpg" alt="" width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link to="/" className="CZD_11zz">Miss Universe :D</Link></div>
	<div className="CZr_desc">Without description</div>	
</div>	



</div>



<div>

<div><img className="brdr21" src="/photos/CYjP_-UxpPs.jpg" alt="" width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link to="/" className="CZD_11zz">Japanese culture</Link></div>	
	<div className="CZr_desc">Everything about Japan</div>	
</div>	



</div>





</div>








</div>









	
	

</div>	



	</Main>
    
    </>
    
    
  );
  
}




