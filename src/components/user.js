import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Main } from '../page/funcs.js'
import './user/photos.css';
import './group/Private.css'





export function Purls(props){
 
 return   <div className="col-sm-6">
      <Link to={props.url}>
      <div className="uisr_Borx1"> <span className="material-symbols-outlined">{props.cssname}</span> {props.uname}</div>
      </Link>
   </div>  
   
}



export default function UserPage() {

  const navigate = useNavigate();


  function NavIgation(url) {
      navigate(url);
  }


const URls = [
{url: '/profile',urlname:"My page",cssIcon : 'account_circle'},
{url: '/home',urlname:"News Feed",cssIcon : 'newspaper'},
{url: '/notification',urlname:"Notifications",cssIcon : 'notifications'},
{url: '/messaging/1',urlname:"Messages",cssIcon : 'chat'},
{url: '/friends',urlname:"Friends",cssIcon : 'group'},
{url: '/page/group',urlname:"Groups",cssIcon : 'diversity_3'},
{url: '/page/blogs',urlname:"Blog",cssIcon : 'event_note'},
{url: '/user/gifts/1',urlname:"Gifts",cssIcon : 'featured_seasonal_and_gifts'},
{url: '/home',urlname:"Applications",cssIcon : 'apps'},
{url: '/live_chat',urlname:"Live Chat",cssIcon : 'sms'},
{url: '/page/video',urlname:"Videos",cssIcon : 'movie'},
{url: '/chats',urlname:"Chat rooms",cssIcon : 'forum'},
{url: '/Weather',urlname:"Weather",cssIcon : 'sunny'},
{url: '/shop',urlname:"Marketplace",cssIcon : 'storefront'},
{url: '/page/members',urlname:"Members",cssIcon : 'person'},
{url: '/user/settings',urlname:"Settings",cssIcon : 'settings'},
{url: '/help',urlname:"Help & Support",cssIcon : 'help'},
{url: '/',urlname:"Logout",cssIcon : 'logout'},
];



	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">

{/* */}


<div className="col-12">
<div className="MyProf_Prof_Data_things_Text31">


      <div className="Chzz_Datqa_Crhld3">
      
      <div className="">
         <img alt="" className="pp_hh_23z" src="/pics/282.jpg"/>
      </div>
      
      <div className="w_8101z">
      
        <div>
            <Link className="angle_profile_url_color" to="/profile/">Nini koberidze</Link>
        </div>
        
        <div className="angle_ntop3"><span className="k_angletime">6 Jan at 2:00 am</span></div>
      
      </div>


      
      </div>






</div>



{/* */}


<div className="">


<div className="row uisr_Borx1a">



{URls.map((v,k)=> <Purls url={v.url} cssname={v.cssIcon} uname={v.urlname } />)}



</div>




 
</div>


{/**/}



</div>

{/* */}




	
  

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


