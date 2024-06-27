import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main, Computer, Mobile, ResponsiveComponent, ResponsiveComponentPc } from '../../page/funcs.js'
import './Private.css'
import '../blog/view.css'



export function Shwimg({pic, alt}){
	return (<>
            <div>
               <img alt="" src="/photos/jJ7g1VXRvqw.jpg" alth="" />
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

export function USRPost(props){
  
 return (<> 
 

<div className="col-12">

<div  className="Sangle_postMaincontainer ce12524556">

<div className="ce125245">

<div>


{/**/}
     
<div className="Sangle_postMflexing">

<div>

        <div className="Sangle_postMflexing"> 
                 
               <div className="">
                  <img className="brdr21" alt="" src="/pics/KXTvmL_0KAs.jpg" width="50" height="50"/> 
               </div>

               <div className="">
                     <div><a href="/">Nini koberidze</a></div>
                     <div><span className="snacks9">6 Jan at 2:00 am</span></div>
               </div>
         </div>

</div>


             <div>
                 <a href="/"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg> </a>
                  
              </div>
            





</div>


  
      
  
      
 {/**/}     
      
      

      <div className="crlrbth">
         <div className="text">Nice very nice, i like this one !!!</div>
         {props.pic && <div className="eb_marg1">     <img alt="" src={props.pic}/> </div> }  
      </div>
      
   <PstReactions />
         
      <div className="cl_flprfy1_113btn">
         <div className="">
         <span className="material-symbols-outlined">thumb_up</span> 
          <span id="maxWidth340px">1534</span>
         
         </div>
         <div className=""><span className="material-symbols-outlined">mode_comment</span> 
          <span id="maxWidth340px">15</span>
         
         </div>
         
         <div className=""><span className="material-symbols-outlined">share</span> 
         
               <span id="maxWidth340px">25</span>
         
         </div>
         
         
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
   
   
   <div className="cm_ntfr1">
   <div>
   
   <img alt="" src="/pics/282.jpg" className="blm_cmnt1pic2"/></div>
   
   <div className="cmn1z_f1">
   
   <div className="pb_rq123zbakc23">
   
   <div><a className="clz1z_wq412z1" href="/">George Washington</a><div>
   
   <span className="MblogDetails">an hour ago</span></div>
   
   </div>
   
   <div className="pmess1z">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</div>
   
   </div>
   
      <div id="pstQWEZ" className="pcnalingle1">
         <a className="Psqwe_id_lk frlinksa ctex2t1" href="/">Reply</a>
         <a className="frlinksa ctex2t1" href="/">Like</a>
      </div>
   
   </div>
   
   </div>
   
   
   
   
</div>
   </div>
   


</div>

</div>

</div>


 
 </>) 
   
   
}


export function Showfrndofps({pic, alt, name}) {
	return (<> 
	
	
<div className="col-4 cl_flex1btm">

   <div className="cl_flex1">

      <div><img src={pic} alt="" className=""/>	</div> 

      <div className="">
         <Link className="" to="/">{name}</Link>
      </div>

   </div>

</div>

	
</>)
}



export default function Privateprof() {


//Computer, Mobile


return (<>
  
  
<Main>






<div className="col-9 cmnt2z1qwer">




{/**/}

<ResponsiveComponent>



<div className="rnmg24">

   <div> 

      <div className="Prfol_ph">
         <div className="Prfol_ph_2">Change cover</div>
      </div>
      
    <img alt="" src="/pics/0oRxrSt0fdw.jpg" className="MyProf_img2z"/>

   </div>
	
   <div className="angle_ffl_top1z">
      <img alt=""  src="/pics/0oRxrSt0fdw.jpg" className="rnmg273picofusr"/>
   </div>
   
   
   <div className="angle_ffl_t2op13z angle_mtb">
   
   
   <div><strong>Gega Koberidze</strong></div>

   <div>

   My hearing's as good as elves last seen three hours ago 🤯
   </div>


   <div>
            <div className="angle_profile_flexing angle_profile_flexingMarig"><span className="material-symbols-outlined angle_whiteclr">location_on</span><a href="/" className="angle_coutnry_color"> Georgia, Batumi</a></div>
   </div>


   </div>


<div className="angle_mob_itemns1z">
<div className="s_22"> <a className="angle_moqz_s22a angle_flxing" href="/"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path></svg> Edit profile</a></div>




<div className="s_222"> <a className="angle_moqz_s22a angle_flxing" href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"></path></svg></a></div>

</div>


</div>





</ResponsiveComponent>



{/* */}





<ResponsiveComponentPc>

<div className="rnmg24">

<div> 

<div className="Prfol_ph">
<div className="Prfol_ph_2">Change cover</div>
</div>
<img src="/pics/0oRxrSt0fdw.jpg" alt="" className="MyProf_img2z"/>

</div>



<div className="angle_profData">

<div className="angle_rpfo21z">
	
   <div className="rnmg26_31">
      <img src="/pics/0oRxrSt0fdw.jpg" alt=""  className="rnmg273picofusr"/>
   </div>




<div className="rnmg28">
<div className="cppfsiNmus1">Mariam koberidze</div>
<div><a href="/">Add information about yourself </a></div>
</div>

</div>


<div className="angle_lnksforProfile">
	
	
	

	
	
	<div>
		
	<button className="btn32"> Edit profile</button>
	
	</div>
	
	<div> 	
   <button className="btn32">  More  <svg style={{marginTop: '-3px'}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M24 24H0V0h24v24z" opacity=".87"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></svg></button>
   
   
	 </div>
	
	
</div>




</div>


   <div className="c123zdspltzc123">
      <div><Link to="/profile/">Post</Link></div>
      <div><Link to="/user/about/1">About</Link></div>
      <div><Link to="/user/friends/1">Friends</Link></div>
      <div><Link to="/user/videos/1">Videos</Link></div>
      <div><Link to="/user/gifts/1">Gifts</Link></div>
   </div>

</div>




</ResponsiveComponentPc>







<div className="angle_items" style={{ marginTop: '15px'}}>

<div className="angle_fl_items_v2">
   <div className="active2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M256 0H576c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h80 48H552c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128h96V384v32c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V384H512v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V312c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H72zm336 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H424c-8.8 0-16 7.2-16 16z"></path></svg> Photos</div>
   <div className=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg> Videos</div>
   <div className=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><g id="Music_Note_1"><path d="M20.05,3.657a2.487,2.487,0,0,0-2.03-.56l-7.88,1.33a2.483,2.483,0,0,0-2.08,2.46v8.82a3,3,0,1,0,1,2.23V9.387l10.88-1.83v6.22a2.936,2.936,0,0,0-2-.77,3,3,0,1,0,3,3V5.567A2.513,2.513,0,0,0,20.05,3.657ZM6.06,19.937a2,2,0,1,1,2-2A1.993,1.993,0,0,1,6.06,19.937Zm11.88-1.93a2,2,0,1,1,2-2A2,2,0,0,1,17.94,18.007Zm2-11.46L9.06,8.377V6.887a1.483,1.483,0,0,1,1.25-1.47l7.88-1.33a1.493,1.493,0,0,1,1.75,1.48Z"></path></g></svg> Music</div>
   <div className=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5M10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM13 8h-2V6h2z"></path></svg> Topics</div>
</div>



<div className="MyProf_Prof_Data_things31z anglle_itemns_ChildrenPadding">


<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>






</div>

<div className="rnmg31">
<Link to="/" className="rnm5g3521213">See all</Link>
</div>

</div>



<div className="col-12">

<div className="MyProf_Prof_Data_things_Text">


<div>


	<div className="prof_flex1U">
   
      <div className="">
         <img alt=""  className="mpsu50" src="/pics/282.jpg"/>
      </div>
   
      <div className="profflex100">
         <textarea placeholder="What's on your mind?"></textarea>
      </div>
   
   
	</div>
   
   
	
	</div>


      <div>

               <div className="proaddThings">
                  <div><img alt=""  src="/icons8-photo-48.png"/> Photo</div>
                  <div><img alt=""  src="/icons8-video-48.png"/> Video</div>
                  <div><img alt=""  src="/icons8-smile-100.png"/> Emotions</div>
                  <div><img alt=""  src="/icons8-event-48.png"/> Events</div>
               </div>
      </div>



</div>




</div>





<div className="col-12"> 



<USRPost pic="/blogs/image_2.jpg.webp" />
<USRPost />
<USRPost/>
<USRPost/>



	






























 </div>













</div>
	

<div className="col-3">




   <div className="cardMain2">



<div className="separating_divs2">  

          <div className="sz3">
                  Gifts 
            </div>
            
            <div className="sz5"><Link to="/user/gifts/1">See all gifts</Link></div>
</div>


         <div className="Prof_giftmain">

            <img alt=""  src="/gifts/256 (9).jpg" />	
            <img alt=""  src="/gifts/256 (7).jpg"/>	
            <img alt=""  src="/gifts/256.jpg"/>	
            <img alt=""  src="/gifts/256.jpg"/>	
            <img alt=""  src="/gifts/256.jpg"/>	
            <img alt=""  src="/gifts/256.jpg"/>	
            <img alt=""  src="/gifts/256 (1).jpg"/>	
            <img alt=""  src="/gifts/256 (4).jpg"/>	


         </div>




   </div>










<div className="rnmg33">


<div className="rprflmn">


<div className="act_ive"><Link to="/">News</Link></div>
<div><Link to="/">Reactions</Link></div>
<div><Link to="/">Search</Link></div>
<div><Link to="/">My page</Link></div>

</div>






</div>










   <div className="cardMain2 cardHeading2mrg15">

<div className="separating_divs">  

          <div className="sz3">
                  Friends 
                  <p className="snacks9">503 friends</p>
            </div>
            
            <div className="sz5"><Link to="/user/friends/1">See all friends</Link></div>
</div>


<div className="row g-0">




   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>
   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>
   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>
   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>
   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>
   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>
   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>
   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>
   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Nuki koberidze'} alt={'Some pic who knows'}/>


</div>



</div>












	
	

</div>	



	</Main>
    
    </>
    
    
  );
  
}





/***************************************************/




export function PublicProfile() {

return (<>
  
  
<Main>






<div className="col-9 cmnt2z1qwer">

<div className="rnmg24">

<div> 

<div className="Prfol_ph">
<div className="Prfol_ph_2">Change cover</div>
</div>
<div src="pics/0oRxrSt0fdw.jpg" className="MyProf_img"></div>

</div>



<div className="angle_profData">

<div className="angle_rpfo21z">
	
   <div className="rnmg26_31">
      <img alt=""  src="/pics/0oRxrSt0fdw.jpg" className="rnmg273picofusr"/>
   </div>




<div className="rnmg28">
<div className="cppfsiNmus1">Mariam koberidze</div>


   <div className="angle_profile_flexing angle_profile_flexingMarig">

      <span className="material-symbols-outlined angle_whiteclr">location_on</span>
      <a href="/" className="angle_coutnry_color"> Georgia, Batumi</a>

   </div>


</div>

</div>


<div className="angle_lnksforProfile">
	<div> 
   
   <a  href="/" className="btn32 angle_lnfkforurl1">  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"></path></svg> Message</a>
   
   </div>
   
   
   <div> 
   
   <a href="/"  className="anlge_profbtn32 angle_proqzccl1 angle_profsvgFLexi1"> 
 
   
  
<svg stroke="currentColor" fill="#447bba" stroke-width="0" viewBox="0 0 640 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path></svg>
  
  
  
  
  
   
   </a> 
   
   

   

   </div>
   
   
   
  <div>
  
  
       <a href="/"  className="anlge_profbtn32 angle_proqzccl1 angle_profsvgFLexi1"> 
 
   


  
  <svg stroke="currentColor" fill="#447bba" stroke-width="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"></path></svg>
  
   </a>  
   
  
  </div> 
   
   
   
</div>




</div>



<div className="angle_for_flex_horLinks">
<div><Link to="/profile/1">Posts</Link></div>
<div><Link to="/user/about/1">About</Link></div>
<div><Link to="/user/friends/1">Friends</Link></div>
<div><Link to="/user/videos/1">Videos</Link></div>
<div><Link to="/user/gifts/1">Gifts</Link></div>
</div>

</div>

<div className="col-12">


   <div className="anlge_frw2s">
      
      <div><a href="/" className="angle_withfon1">152 Friends </a></div>
      
      <div className="">
            <div className="angle_for_fleex_hozrLinks3">
                 <a href="/" className="angle_withfon1"><img alt=""  src="/user/daniel.jpg"/></a> 
                 <a href="/" className="angle_withfon1"><img alt=""  src="/user/elise.jpg"/></a> 
                 <a href="/" className="angle_withfon1"><img alt=""  src="/user/daniel.jpg"/></a> 
            </div>
      </div>
   </div>
</div>



<div className="col-12">

<div className="MyProf_Prof_Data_things_Text">

   <div>

      <div className="prof_flex1U">

            <div className="">
               <img alt=""  className="mpsu50" src="/pics/282.jpg"/>
            </div>

            <div className="profflex100">
               <textarea placeholder="What's on your mind?"></textarea>
            </div>

      </div>

   </div>

   <div>

      <div className="proaddThings">
         <div><img alt=""  src="/icons8-photo-48.png"/> Photo</div>
         <div><img alt=""  src="/icons8-video-48.png"/> Video</div>
         <div><img alt=""  src="/icons8-smile-100.png"/> Emotions</div>
         <div><img alt=""  src="/icons8-event-48.png"/> Events</div>
      </div>

   </div>

</div>

</div>







<div className="col-12"> 



<USRPost pic="/blogs/image_2.jpg.webp" />
<USRPost />
<USRPost/>
<USRPost/>



	






























 </div>













</div>
	

<div className="col-3">




   <div className="cardMain2">



<div className="separating_divs2">  

          <div className="sz3">
                  Gifts 
            </div>
            
            <div className="sz5"><Link to="/user/gifts/1">See all gifts</Link></div>
</div>


         <div className="Prof_giftmain">

            <img alt=""  src="/gifts/256 (9).jpg" />	
            <img alt=""  src="/gifts/256 (7).jpg"/>	
            <img alt=""  src="/gifts/256.jpg"/>	
            <img  alt="" src="/gifts/256.jpg"/>	
            <img  alt="" src="/gifts/256.jpg"/>	
            <img alt=""  src="/gifts/256.jpg"/>	
            <img  alt="" src="/gifts/256 (1).jpg"/>	
            <img alt=""  src="/gifts/256 (4).jpg"/>	


         </div>


   </div>












<div className="rnmg33">


<div className="rprflmn">
   <div className="act_ive"><Link to="/">News</Link></div>
   <div><Link to="/">Reactions</Link></div>
   <div><Link to="/">Search</Link></div>
   <div><Link to="/">My page</Link></div>
</div>






</div>










   <div className="cardMain2 cardHeading2mrg15">




<div className="separating_divs">  

          <div className="sz3">
                  Friends 
                  <p className="snacks9">503 friends</p>
            </div>
            
            <div className="sz5"><Link to="/user/friends/1">See all friends</Link></div>
</div>

<div className="row g-0">




   <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Mary koberidze'} alt={'Some pic who knows'}/>
    <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Mary koberidze'} alt={'Some pic who knows'}/>
    <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Mary koberidze'} alt={'Some pic who knows'}/>
    <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Mary koberidze'} alt={'Some pic who knows'}/>
    <Showfrndofps pic={'/photos/tUFKFNOnc7VgO0jLNTyQ_pic__16975369358556572_5418870_pic3z545t1_ip1581tyb1267a4cqw013yx_2_4232vycqu41.jpg'} name={'Mary koberidze'} alt={'Some pic who knows'}/>
 

</div>



</div>









	
	

</div>	



	</Main>
    
    </>
    
    
  );
  
}


