import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, ResponsiveComponent, ResponsiveComponentPc } from '../page/funcs.js'
import '../messaging.css'



export function UsrPmessage(){
   return (<>
   
   
              <div className="frrow1 angl_mtop_152">
               
               <div> <img alt="" src="/user/elise.jpg" className="angle_imgborder50"/> </div>
               <div> 
               
               
               <div className="angl_msgBr1"> 
               
               <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                   <div className="angl_br1zclr2"> 10hr ago </div>
               
               </div>
               
               
           
               

 </div>
            </div> 
   
   
   </>)
}




export function UsrPmessageRghtSide(){
   return (<>
   
    
              <div className="frrow1 angl_mtop_152 angl_flexrev">
               
               <div> <img alt="" src="/user/dan.jpg" className="angle_imgborder50"/> </div>
               <div> 
               
               
               <div className="angl_msgBr1"> 
               
               <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                   <div className="angl_br1zclr2"> 10hr ago </div>
               
               </div>
               
               
           
               

 </div>
            </div> 
   
   
   </>)
}






export default function Messaging() {
   
   
const [verson, setVersion] = useState(0)   
  
  
const setUActive = (id) => setVersion(id);
  




function Shdt({pic,name,status, active="", whmany = '0'}) {
	return (<>
	
   <div className={`${active}`}>
      
      <div className="angle_mess_flex13z_sep" onClick={()=>setUActive('1')}>
      
         <div>
               <div className="angle_cmsglstflxgp1">
                     <div className="">
                        <img alt="" className="angle_mess_flex13zangl_ms_153" src={pic} />
                     </div>

                     <div className="">
                        <div className="Angle_usrname">{name}</div>
                        <div className="Angle_usrLastPost">Hey, How are you?</div>
                     </div>
              </div>   
         </div>
         
         
         
         <div>
            <div className="nmessroundinghdgp">
                  <div className="angl_br1zclr2"> 1h </div>
                  {whmany>0 && <div className="nmessrounding">15</div>} 
            </div>
         </div>
         
         
         
      </div>
    


   </div>

	</>);
}





   
   
	return (<>
   
   


   <Nav />


{/**/}
	
	<div className="col-12 angle_message2">
		
	<div className="row g-0">
		
		
	
	<div className="col-3 mnqwe22lzzz msg_leftsdbr1 l_meshd41">
		   



<div>

<div className="angle_mess_flex1">
   <img src="/user/daniel.jpg" alt="" className="imgz31"/>
   <input type="text" className="angle_message23 angle_zmes1" placeholder="Search..."/>
</div>


</div>



<div className="angle_cmsglst">

<span className="angl_tzmes2 chatspan">Chats</span>


   <div className="rovrflssy">
   
   
   
   
   
   <Shdt whmany="15" active="mes_active2" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="13" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
  <Shdt whmany="12" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="11" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="15" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="1" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="17" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="3" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="4" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="31" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="44" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="15" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="15" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt whmany="15" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   
   
   </div>




</div>





	
		</div>
		
		
		
		<div className="col-9 msg_leftsdbr1 l_meshd431">
			
{verson !== 0 && (<>
   
 <div className="angle_messheader">
	
   
      <div>
            <div className="angle_flexsidebyside angle_flexsidebysidecenterizing">
            
                  <div className="">
                     <div className="pflex1">
                        <span onClick={()=>setUActive(0)} className="crs1 material-symbols-outlined">arrow_back</span>   
                        <img alt="" src="/user/elise.jpg" className="angle_imgborder50"/>
                     </div>	
                  </div>	
                  
                  
                  <div className="">
                     <div><strong>Mariam koberidze</strong></div>
                  </div>	
                  
            </div>	
            
         
      </div>
	
	
	<div className="Hddnfrmob">
	
	<div className="right">
	
	<button className="btn "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>
	
	<button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button>
	
	<button className="btn "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal feather-lg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
	
	</div>
	
	
	</div>
	
	</div>
	  
   
   
   
   
</>) }
		
{verson !== 0 && (<>
   
 <div className="angle_messaging_body">
   {/**/}
   
   
   <div className="mess_3zh">
          
          

         <UsrPmessage /> 
         <UsrPmessageRghtSide />
         <UsrPmessage/>
         <UsrPmessageRghtSide />
         <UsrPmessage/>
         <UsrPmessage/>
         <UsrPmessageRghtSide />
         <UsrPmessage/>
         <UsrPmessage/>
         <UsrPmessageRghtSide />
         <UsrPmessage/>
         <UsrPmessageRghtSide />
         <UsrPmessage/>
          
            
   </div>
   
   
   {/**/}
   
   </div>
   
      {/**/}



</>)}
   
  
  
  {verson !== 0 && (<>
     
      <div className="angle_zmx">
                  <div className="div2">
                  
                  
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"></path></svg>
                  
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M355.9 161.1c-8.6 0-15.6 7-15.6 15.6v194.4c0 20.3-8 40.4-22 55.1-13.9 14.6-35.2 23.7-55.5 23.7h-13.6c-19.6 0-39.5-8.9-54.8-24.6-15.2-15.5-23.9-35.6-23.9-55.2V119.3c0-14.9 6.2-28.9 17.3-39.5 11.1-10.5 25.7-16.3 41-16.3 15.1 0 29.3 5.8 39.8 16.2 10.5 10.5 16.4 24.6 16.4 39.6v234.2c0 17.1-13.6 32.2-29 32.2-13.6 0-28.2-12.9-28.2-32.2V219.9c0-8.6-7-15.6-15.6-15.6s-15.6 7-15.6 15.6v133.6c0 35.5 25.5 62.3 59.4 62.3 16.5 0 31.7-6.1 42.7-17.3 11.3-11.4 17.5-27.4 17.5-45V119.3c0-23.4-9.1-45.4-25.7-61.8C274 41 252 32 228.5 32s-45.5 9-62.2 25.5c-16.7 16.5-25.9 38.4-25.9 61.9v250.8c0 28.7 12.2 57.9 32.6 78 20.9 20.6 47.9 31.9 76.1 31.9h13.6c27.6 0 55.3-11.7 75.9-32.1 10.2-10.1 18.2-21.7 23.9-34.6 5.9-13.5 8.9-27.7 8.9-42.1V176.7c.1-8.6-6.9-15.6-15.5-15.6z"></path></svg>
                     
                     
                     
                     <input type="text" placeholder="Type something"/>
                     <button>Send</button>
                  </div>
            </div>   
     
     
</>)}



<ResponsiveComponent>

   {verson === 0 && (<>
   
   <div className="rovrflssy rovrflssy2">
   
   <h4 className="rw_vldv231">Chats</h4>
   
 <Shdt active="mes_active2" pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
   <Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/> 
   
     
      </div>
      
</>) }

</ResponsiveComponent>




<ResponsiveComponentPc>


      <div className="m_angl_chatm2">

         <h4>Chatting</h4>
         
         <div className="angl_e2p1">
            <div className="anmgl_clr1">There's nothing</div>
            
            <div> 
               <button>Start chatting</button>
            </div>
         </div>  
         
         
      </div>          


</ResponsiveComponentPc>







      {/**/}
   	
		
		</div>
		
		
		
		</div>
		
		</div>
		
		
	
	
	</>)
}
