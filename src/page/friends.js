import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from './funcs.js'



			function Chngqlqnk(event) {
						window.location = "?id=3624&type="+event.value;
						//console.log(event.value)
					}
					
					
					function Reloc(val) {
						window.location = val
					}




	
	
export function Friend(props) {
	return (<> 
	
	

		<div className="c_usr_qw1 CenteringDiv PTB">
      
      
			
      
        
   <div className="pdnvof1zqwe">
   
     <img alt="" src={props.img} className="c_usr_img1frFriends"/>
		
      
    
    </div>
         
      
      
      <div className="MBlosg_p4d4">
      
    

              <div className="pp_cvfl1">
              
                  <div>
                     <a href="/"><b>{props.name}</b></a>
                  </div>
                  
                  <div className="MblogDetails">
                     <span>From: Georgia</span>
                  </div>
                  
                </div>
            
		
         <div className="PTB_Boxes">
            <button className="button"> Add Friend </button>
         </div>
         
       </div>  
         
         
         
         
		</div>
	
	
	
	</>)
}




export default function Friends() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">





<div className="uoppfr_crbrrMain3Yoo borderBottom">
	
	
<div className="aKDiplayImage" style={{ 
      backgroundImage: `url('/Abstract+stars.jpg')` 
    }}>
    
	<div className="ph_fr1zztpsiz15">
		
		<div className="pp_abs41z">
			<div> 
            <img alt="" className="pz_nick2" src="/us_man.png" width="128" height="128"/>
         </div>
			<div className="pz_nick1">Daily</div>
		</div>
		
		
	</div>


</div>




</div>


















<div className="pBlueWw2">
	
<div className="lLTl21zblt"> 
<a href="/">Posts</a>
</div>	

<div className="lLTl21zblt "> 
<a href="/">About</a>
</div> 


<div className="lLTl21zblt active" active="">  
<a href="/">Friends</a>
</div>


<div className="lLTl21zblt">  
<a href="/">Photos</a>
</div>
	
	
</div>












<div>


			

		<div className="phtshnq11a">
			
			
			<div>

				<div className="phthdrsctns">
					<div>
               
                     <div className="">
                      
                      <div className="Boxes">
                        <span className="B_clr1">All Friends </span>
                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> </span>
                      </div>
                      
                      
                    
                     </div>
                     
               </div>
               
               
               
               
				</div>			
				
			</div>


			<div>
				
				
								
					<input type="text"  value="" className="ppintpu123z pff1_zlkqe1z" placeholder="Search friends..."/>
				
				
			
			</div>
		
		
		</div>




</div>









  <div className="cztr1frnd21 frmbot115">
	

<div className="cnf213zble"> 
<a href="?id=3624">All</a>
</div> 

<div className="cnf213zble"> 
<a href="?id=3624&amp;type=online">Online </a>
</div> 



 


	
<div className="cnf213zble"> 
<a href="?id=3624&amp;type=sent">Sent </a>
</div>
	
	
	
<div className="cnf213zble"> 
<a href="?id=3624&amp;type=new">Requests </a>
</div>	

	
</div>   
   
   








<div className="col-12">
	





{/*    <div className="cz213_srch">
      
      <div className="cz1"> 	
         <input type="text" className="wi_100" placeholder="Searching by name"/> 
      </div>

      <div className="cz2"> 	
         <button className="czsrchz__2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button>
      </div>


   </div>
   */}





<div className="Fr_displaying_friends">


<Friend img={'/pics/ANIME-PICTURES.NET_-_783237-2958x1665-original-akatsuki+(4941086)-single-long+hair-looking+at+viewer-blush.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>

<Friend img={'/pics/ANIME-PICTURES.NET_-_783237-2958x1665-original-akatsuki+(4941086)-single-long+hair-looking+at+viewer-blush.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>

<Friend img={'/pics/ANIME-PICTURES.NET_-_783237-2958x1665-original-akatsuki+(4941086)-single-long+hair-looking+at+viewer-blush.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>

<Friend img={'/pics/ANIME-PICTURES.NET_-_783237-2958x1665-original-akatsuki+(4941086)-single-long+hair-looking+at+viewer-blush.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>

<Friend img={'/pics/ANIME-PICTURES.NET_-_783237-2958x1665-original-akatsuki+(4941086)-single-long+hair-looking+at+viewer-blush.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>

<Friend img={'/pics/ANIME-PICTURES.NET_-_783237-2958x1665-original-akatsuki+(4941086)-single-long+hair-looking+at+viewer-blush.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>

<Friend img={'/pics/ANIME-PICTURES.NET_-_783237-2958x1665-original-akatsuki+(4941086)-single-long+hair-looking+at+viewer-blush.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>

<Friend img={'/pics/ANIME-PICTURES.NET_-_783237-2958x1665-original-akatsuki+(4941086)-single-long+hair-looking+at+viewer-blush.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>



</div>



	

</div>





</div>
	

<div className="col-3">


<div className="rprflmn">


<div><a href="/">Friend requests</a></div>
<div><a href="/">Sent requests</a></div>
<div><a href="/">Find friends</a></div>

</div>



</div>
	
	
	




</Main>	
	
	
	</>)
}


