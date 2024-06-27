import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './Private.css'


export function Shwimg({pic, alt}){
	return <div style={{ paddingRight: '10px', marginBottom:'3px'}}><img alt={alt} src={pic}/></div>
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
   
   <div className="pmess1z">zzzzzzs</div>
   
   </div>
   
   <div id="pstQWEZ" className="pcnalingle1">
   
   <a className="Psqwe_id_lk frlinksa ctex2t1" href="/">Reply</a>
   
   <a className="frlinksa ctex2t1" href="/">Like</a>
   
   </div>
   
   </div>
   
   </div>
   
   
   </>)
   
}



export function Display_lastReactions(){
   return (<>
   
   
 <div className=" g_rrbrtop1 ">
 
 <div className="Rzecddzqwy1zr3_2">Reactions:</div>
 
 <div className="W1hoa_rzeacted">
 
    <div>
       <div className="W1hoa_rzeacted_img1z_1zh2z">
         <img alt=""  className="W1hoa_rzeacted_img1z" src="/pics/282.jpg"/>
         <div className="Gr_Po31stz_Rectd3">😂</div>
       </div>
    </div>
 
 <div>
    <div className="W1hoa_rzeacted_img1z_1zh2z">
      <img alt=""  className="W1hoa_rzeacted_img1z" src="/pics/282.jpg"/>
      <div className="Gr_Po31stz_Rectd3">😢</div>
    </div>
 </div>
 
 

 
 </div>
 
 </div>  
   
   
   
   
   </>)
   
}




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





export function USRPost(props){
  
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
      
      
      
      
      {props.pic && <div className="">     <img alt="" className="m_blpic1" src={props.pic} /> </div> }
   </div>
   
   
  <PstReactions />
   
   
   

      
   <div className="cl_flprfy1_113btn">
      <div className=""><span className="material-symbols-outlined">thumb_up</span> </div>
      <div className=""><span className="material-symbols-outlined">mode_comment</span> </div>
      <div className=""><span className="material-symbols-outlined">share</span> </div>
   </div>

   <div className="crlrbth k_dd_fl1zbrq">
      <div className="dd_flex2">
         <img alt=""  className="dd_flex2_ph" src="/user/azzouz.jpg"/>
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

export function ShwSgstions (){
   return (<> 
      
            <div className="qGroupflx qGroupfl1bg1x"> 
            
                     <div>  <img className="wGrp1z bRqz41" src="/user/jenna.webp"/> </div>
                     
                      <div> 
                           <div> <Link to=""> For programmers</Link> </div>
                           <div className="ppdBlogWhite">1253 members</div>
                      </div>    
                      
            </div>
   
   
   </>)
}



export default function Group() {

return (<>
  
  
<Main>






<div className="col-9 cmnt2z1qwer">

<div className="rnmg24">

<div> 

<div className="Prfol_ph">
   <div className="Prfol_ph_2">Change cover</div>
</div>

<img src="/pics/0oRxrSt0fdw.jpg" alt="" className="MyProfz_img2z"/>

</div>



<div className="angle_profData">

<div className="angle_rpfo21z">
	
<div className="rnmg26">

<img src="/pics/0oRxrSt0fdw.jpg"  alt="" className="GR_ADMin_32_img_prf"/>

</div>




<div className="rnmg28">
   <div className="fntpspgrp21">Programmers</div>
   <div> <a href="/">1253 members </a> </div>
</div>

</div>


<div className="angle_lnksforProfile2">
	
	
	

	
	
	<div>
		
	<button className="btn32"> Follow</button>
	
	</div>
	
	<div> 	
         <button className="btn32"> {/*<span className="material-symbols-outlined">send</span>*/}  Message </button>
	 </div>
	
	
</div>




</div>



   <div className="c123zdspltzc123">
      <div><a href="/">Home</a></div>
      <div><a href="/">About</a></div>
      <div><a href="/">Members</a></div>
      <div><a href="/">Videos</a></div>
      <div><a href="/">Posts</a></div>
      <div><a href="/">More</a></div>
   </div>

</div>




{/* */}

<div className="row">

<div className="col-sm-6">
<div className="MyProf_Prof_Data_things_Text">


<div>
	<div className="Chzz_Data_Chld3">
	<div className=""><img alt=""  className="MyProf_Prof_Data_things_Text_pOStImg" src="/pics/282.jpg"/></div>
	<div className="w_8101z"><textarea placeholder="Write something"></textarea></div>
	</div>
</div>


<div><button>Post</button></div>













</div>
</div>

<div className="col-sm-6">
<div className="qq_rghsdzflx">

<h5 className="hh5">About</h5>

<div className="h_pdn5bt"> Talk about anything and everything about Linux </div>
<div className="q_qq_posdefusGrp1z"> <span className="material-symbols-outlined">public</span> Public</div>
<div className="q_qq_posdefusGrp1z"> <span className="material-symbols-outlined">visibility</span> Visible </div>
<div className="q_qq_posdefusGrp1z"> <span className="material-symbols-outlined">info</span> <a href="/" className="bbl_1z">ITDev.Com</a> </div>



</div>
</div>

</div>

{/* */}










<div className="col-12"> 




<USRPost pic="/blogs/image_2.jpg.webp" />


<USRPost />

















 </div>













</div>
	

<div className="col-3">




<div className="rnmg30">

<div className="t2rr1">
   <b>Members</b> 
   <a href="/" className="cl_lc1w21"> 5,140</a>
</div>

<div className="Gr_Liqwest">


<div>
   <img alt=""  src="/pics/282.jpg"/>	
   <div className="ps_grq_lg1snick">  <a href="/">KoKO</a> </div>
</div>


<div>
   <img alt=""  src="/pics/282.jpg"/>	
    <div className="ps_grq_lg1snick">  <a href="/">John</a> </div>
</div>


<div>
   <img  alt="" src="/pics/282.jpg"/>	
    <div className="ps_grq_lg1snick">  <a href="/">George</a> </div>
</div>


<div>
   <img alt=""  src="/pics/282.jpg"/>	
   <div className="ps_grq_lg1snick">  <a href="/">KoKO</a> </div>
</div>

<div>
   <img alt=""  src="/pics/282.jpg"/>	
  <div className="ps_grq_lg1snick"> <a href="/">Angel</a> </div>
</div>

<div>
   <img  alt="" src="/pics/282.jpg"/>	
   <div className="ps_grq_lg1snick">  <a href="/">Angel</a> </div>
</div>

<div>
   <img alt=""  src="/pics/282.jpg"/>	
   <div className="ps_grq_lg1snick">  <a href="/">Angel</a> </div>
</div>

<div>
   <img alt=""  src="/pics/282.jpg"/>	
   <div className="ps_grq_lg1snick">  <a href="/">Angel</a> </div>
</div>



<div>
	
	
</div>


</div>


<div className="rnmg31">
<a href="/" className="Gr_Inviting">Invite people</a>
</div>


</div>











<div className="Gr_Desc">


   <div className="hh_51z">About group</div>

<div className="Gr_DescText">Everything about  C/C++/D/LLVM IR/Js/Python/Pointers/allocations/Coding styles/Syntaxes and so on and so forth</div>


</div>









<div className="GR_admin">

<div className="hh_51z">Group Admin</div>


<div className="GR_ADMin_2 mm_grqtop151zq">

	
   <div className="PBlogg1">

      <div className="left">
            <img className="wGrp1z" src="/user/jenna.webp"/>
      </div>	

      <div className="left">
         <a href="/"> Clara williams</a>	
         <div className="ppdBlogWhite">Owner</div>
      </div>

   </div>	



</div>




</div>





{/**/}



<div className="Gsuggestions PB2logg1Mn">
   <div className="hh_51z qGroupflxNDp31 pgn15ttz">Groups for you</div>
   
   
<ShwSgstions/>
<ShwSgstions/> 
<ShwSgstions/> 
<ShwSgstions/>
<ShwSgstions/> 


</div>

{/**/}


	
	

</div>	



	</Main>
    
    </>
    
    
  );
  
}




