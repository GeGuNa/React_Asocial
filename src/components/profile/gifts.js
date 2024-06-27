import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Main, is_int } from '../../page/funcs.js'
import './Private.css'
import '../blog/view.css'



export function Shwimg({pic, alt}){
	return (<>
            <div>
               <img  alt={alt} src="/photos/jJ7g1VXRvqw.jpg"/>
            </div>
      </>)}






export function DisImgWlinks(props){
   
 return  <Link to={props.link}> <img alt="" src={props.src}/> </Link>;

   
}



export default function Privateprof() {

return (<>
  
  
<Main>






<div className="col-9">



   <div className="MyProf_Prof_Data_things_Text31">

      <div className="Chzz_Datqa_Crhld3">
         <div className=""><img alt="" className="pp_hh_23z" src="/pics/282.jpg"/></div>
         <div className="w_8101z"><div><a className="angle_profile_url_color" href="/">Nini koberidze</a></div>
         <div className="angle_ntop3"><span className="k_angletime">6 Jan at 2:00 am</span></div>

      </div>

   </div>
   
  
   
   
   

</div>



<div className="angle_giftswidget">
  

   <div className="angle_links_horizontally">
         <a href="/" className="active1">Trending</a>
         <a href="/">Sticker</a>
         <a href="/">Romance </a>
         <a href="/">Flowers</a>
   </div>

  <div className="angle_gift_lists">
  
  

<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />
<DisImgWlinks src="/gifts/256.jpg" link="/page/gifting/15/send" />


  </div>
  
  
  <div className="angle_pagination">
   
      <Link to="/" className="active1"> 1 </Link>
      <Link to="/"> 2 </Link>
      <Link to="/"> 3 </Link>
  </div>
  
  
  </div> 



</div>
	

<div className="col-3">

<div className="rnmgqq33">


<div className="rprflmn">


<div><Link to="/">News</Link></div>
<div><Link to="/">Reactions</Link></div>
<div><Link to="/">Search</Link></div>
<div><Link to="/">My page</Link></div>

</div>


</div>

















	
	

</div>	



	</Main>
    
    </>
    
    
  );
  
}


/*************/



export function SendGiftTouser() {

const uid = useParams();
const navigate = useNavigate();


React.useEffect(() => {
 
var s = uid.id
      
  if (!is_int(s))
     navigate("/");


},[])


/*
http://localhost:3000/page/gifting/1/send
*/


return (<>
  
  
<Main>






<div className="col-9">



      <div className="MyProf_Prof_Data_things_Text31">
         Gift for Nini koberidze

      </div>



<div className="angle_giftswidget">
  


  <div className="angle_gift_lists">
  
      <img alt="" src="/gifts/256.jpg"/>

  </div>
  
  
 <div className="angle_giftBalance">
  

   <div> Price: <b>5$</b> </div>
   <div>  You have <b>0$</b> </div>
 
 </div> 
 
 
 <div>
 <textarea placeholder="Whatver you want"></textarea>
 </div>
  
  <button className="button angle_button">  Send gift </button>
  
  </div> 



</div>
	

<div className="col-3">

<div className="rnmgqq33">


<div className="rprflmn">


<div><Link to="/">News</Link></div>
<div><Link to="/">Reactions</Link></div>
<div><Link to="/">Search</Link></div>
<div><Link to="/">My page</Link></div>

</div>


</div>

















	
	

</div>	



	</Main>
    
    </>
    
    
  );
  
}

