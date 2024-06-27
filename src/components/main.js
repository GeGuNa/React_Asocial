import React, { useState, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../page/funcs.js'
import './user/photos.css';
import './group/Private.css'

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
   <Link className="clz1z_wq412z1" to="/profile/1">George Washington</Link>
   </div>
   
   <div className="pmess1z">zzzzzzs</div>
   
   </div>
   
   <div className="angle_t">
   
   <a href="/">15m</a>
   <a className="" href="/">Reply</a>
   <a className="" href="/">Like</a>
   
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
         <img alt="" className="W1hoa_rzeacted_img1z" src="/pics/282.jpg"/>
         <div className="Gr_Po31stz_Rectd3">😂</div>
       </div>
    </div>
 
 <div>
    <div className="W1hoa_rzeacted_img1z_1zh2z">
      <img alt="" className="W1hoa_rzeacted_img1z" src="/pics/282.jpg"/>
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

<div  className="snacks6 angle_st2yleqe">

<div className="anlge_ce12524">


<div className="c_post_mn1">

   <div>

      <div className="angle_flexgap">
               <div className="">
                  <img alt="" className="dd_flex2_ph" src="/user/azzouz.jpg"/> 
               </div>

               <div className="">
                  <div><Link className="angle_profile_url_color" to="/profile/1">Nini koberidze</Link></div>
                  <div className="angle_ntop3"><span className="k_angletime">6 Jan at 2:00 am</span></div>
               </div>
      </div>
       

   </div>

<div>

 
         <div><a href="/"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg> </a></div>
    


</div>


</div>






   <div className="crlrbth">
      <div className="text">Nice very nice, i like this one !!!</div>
      {props.pic && <div className="eb_marg1">     <img alt="" src={props.pic} /> </div> }
   </div>
   
   
  <PstReactions />
   
   
   

      
   <div className="cl_flprfy1_113btn">
      <div className=""><span className="material-symbols-outlined">thumb_up</span> 12</div>
      <div className=""><span className="material-symbols-outlined">mode_comment</span> 241</div>
      <div className=""><span className="material-symbols-outlined">share</span> 1252</div>
   </div>

   <div className="k_anglefrin">
      <div className="dd_flex2">
         <img  alt="" className="dd_flex2_ph" src="/user/azzouz.jpg"/>
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




export function ShowStory(props) {

	return (<>
         
   <div className=""> 
   
   <div className="mang_storiespoabsT">
         <img alt="" src="/pics/MO_LxM2yi48.jpg"/>
   </div>
   
         <img  alt="" src="/pics/cGbkaoE2WQM.jpg" /> 
         
         <div className="mang_storiespoabs">
            {props.name}
         </div>
         
   </div>

</>)
   
}



export default function Main_2() {
   
const qq = localStorage.getItem('lastname')  
   
 function setloc(){
    localStorage.setItem("lastname", "Smith");
 }  
  
  
//How many objects are there
const [ShowToScroll, setShowToScroll] = useState(0)
 
//scrolled how many times  to the left side
const [scrollL, setscrollL] = useState(0)

//scrolled how many times  to the right side
const [scrollR, setscrollR] = useState(0)

const [hwmNAyTimsScroll,sethwmNAyTimsScroll] = useState(0)




const [sizeofaDiv,setsizeofaDiv] = useState(0)
const [sizeofaCurrent,setsizeofaCurrent] = useState(0)


const sSize1 = useRef(0);

var s = 0;
var sZ = 0

React.useEffect(()=> {

 
     setTimeout(() => {
            

         var ss_hm = sSize1.current.scrollWidth   //scrolling size  including overflow size
         var ss_hm2 = sSize1.current.offsetWidth   //where it is right now 
         
         //var ss_hm = ss_hm/150


         setShowToScroll(1)
         var crnqchild = sSize1.current.children.length  //how many children does element have

if (crnqchild>0) {
   

var sz = crnqchild*150
var sz3 = parseInt(ss_hm2/150)

if (sz>ss_hm2) {
   
   
           if (sz>ss_hm2+150) { 
              
            var hwmtimes =  (parseInt(parseInt(ss_hm-ss_hm2)/150))
            
            
            console.log(`hwmnay1 = ${hwmtimes}`)
            sethwmNAyTimsScroll(hwmtimes+1)
            
            
         } else {
            var hwmtimes =  1
            console.log(`hwmnay2 = ${hwmtimes}`)
            sethwmNAyTimsScroll(hwmtimes)
         }
   
   
} else {
   
   var hwmtimes =  0
    console.log(`hwmnay3 = ${hwmtimes}`)  
   sethwmNAyTimsScroll(0)
   
}


} else {
   var hwmanytimes = 0
    console.log(`hwmnay4 = ${hwmtimes}`)
   sethwmNAyTimsScroll(0)
}

         console.log(crnqchild)
         
         console.log(` offset  ${sSize1.current.offsetWidth}`)
         console.log(` width  ${sSize1.current.scrollWidth}`)

         var AvailableScrollings = parseInt(Math.abs(sSize1.current.scrollWidth/150));

            
      }, 1);

 


},[])


/*


const [scrollL, setscrollL] = useState(0)
const [scrollR, setscrollR] = useState(0)


*/
function setScrollToRight() {
   

   sSize1.current.scrollLeft +=150
   setscrollR(scrollR+1)
   
   if (scrollL>0) {
      setscrollL(scrollL-1) 
   }


}
   
 function setScrollToLeft() {
    
   sSize1.current.scrollLeft -=150
   setscrollL(scrollL+1) 

   if (scrollR>0) {
      setscrollR(scrollR-1) 
   }

         
 }
      
      
      
      
  



   
   
/*  
s21zs.onscroll = (event) => {

      console.log(event.scrollY)
};
  */ 
  
  
     
 const a = new Array(15).fill(1)  
   
  
  
	return (<>
	
<Main>



      <div className="col-9 cmnt2z1qwer">



<div className="MStoriesCont">



{(ShowToScroll == 1 && hwmNAyTimsScroll>0) && (<>
  
   {hwmNAyTimsScroll > 0 && scrollR>0 && scrollR!=0 && (<>
     <div className="pleft" onClick={setScrollToLeft}>
         <span className="material-symbols-outlined">arrow_back_ios</span>
     </div> 
   </>)}
    
</>)}




   <div className="mang_stories" ref={sSize1}>
            
    {a.map((k,v) => <ShowStory index={k} name={`zura ${v}`} />)}        
      
   </div>





{(ShowToScroll == 1 && hwmNAyTimsScroll>0) && (<>


{hwmNAyTimsScroll > 0 && scrollR!=hwmNAyTimsScroll && (<>
   <div className="pright" onClick={setScrollToRight}> 
         <span className="material-symbols-outlined">arrow_forward_ios</span>
       </div>
</>)}

</>)}




</div>


{/* */}


<div className="col-12">



<div>


</div>

<div className="MyProf_Prof_Data_things_Text31">


      <div className="Chzz_Datqa_Crhld3">
      
         <div className="">
            <img alt=""  className="pp_hh_23z" src="/pics/282.jpg"/>
         </div>
      
         <div className="w_8101z">
         
            <textarea className="styletext" placeholder="Write something"></textarea>
         
         </div>
         
         
         
      
         <button className="styletext st_pdng1">Post</button>
      
      </div>


<div><div class="proaddThings"><div><img alt="" src="/icons8-photo-48.png"/> Photo</div><div><img alt="" src="/icons8-video-48.png"/> Video</div><div><img alt="" src="/icons8-smile-100.png"/> Emotions</div><div><img alt="" src="/icons8-event-48.png"/> Events</div></div></div>


</div>
</div>

{/* */}





      <div className="col-12"> 



            <USRPost />

            <USRPost />

            <USRPost />


            <USRPost pic="/blogs/image_2.jpg.webp" />


            <USRPost />


            <USRPost pic="/blogs/image_2.jpg.webp" />

      </div>
         
  
  
  
  

</div>
	 
   
   
   
   

   <div className="col-3">


      <div className="rprflmn">
         <div><a href="/">Photos</a></div>
         <div><a href="/">Search</a></div>
         <div><a href="/">Comments</a></div>
         <div><a href="/">Reactions</a></div>
         <div><a href="/">Random</a></div>
      </div>



   </div>
      
	
	




</Main>	
	
	
	</>)
}


