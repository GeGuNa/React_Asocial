import React from 'react'
import { Link } from 'react-router-dom'
//import { useParams } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './chat.css'



	
	
export function Chatid() {
	
//const qq = useParams()


const qqzData1 = [
{},
{},
{},
{},
{},
{},
{},
{},
];

	
	
	return (<>
	




<Main>

<div className="col-9 cmnt2z1qwer">




					<div className="header">
						
					<div>For boys</div>


					<div>

					<Link to="/Chats/"> <svg stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg> </Link>

					</div>

					</div>


<div className="pSUDQWZz">


<form action="?id=1" method="post" enctype="multipart/form-data">


 <input type="file" className="none" name="file1" id="imgInp" accept="image/*;capture=camera"/>



<div className="c_d1">
	
<div>
	<img alt="" style={{borderRadius:'50%'}} src="/photos/CYjP_-UxpPs.jpg" width="40" height="40"/></div>	
	
<div className="c_d2">

<textarea onfocus="setFcs1Btn()" onblur="setUnFcs1Btn()" name="message" id="bb_textarea" className="csttxt2_3z" maxlength="1024" placeholder="What's on your mind?"></textarea>


<div id="dispEmojiPicker" className="kZm213Mo"></div>


</div>	










</div>


<div className="CPosTFleXjust">
	

	


<div>

<div className="skscht_1">
	
	<img alt="" src="/pics/1jV.png" className="crzPDNGR"/>
	<img alt="" src="/pics/1rn.png" className="crzPDNGR"/>

		
</div>


</div>	


<div>





<button name="cfms" className="cc_btn2 pkqw_chta_1z">
	
	
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
			<path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
		</svg>
	
	
</button>


</div>





</div>



</form>





</div>






<div className="chat_zq_3">


{qqzData1.map((val,ind) => (
	

<div className="chat_zq_1">
	

		<div>
			<img alt="" style={{borderRadius:"10px"}} src="/photos/CYjP_-UxpPs.jpg" width="48" height="48"/>		</div>





		
<div className="chat_zq_4"> 

			<div className="chat_zq_2"> 
							
<div> 
	
	
	<a href="/">
		<span className="nickCOlorQzk1zq">Fish in the ocean</span>
	</a>  
	

								
	
	
	</div>
								
								
								 
								<div>	
									<span className="textChat"> Rapidly, Xz  why do you even care what others think  ? Matters only what do you think .... </span>  
								</div>
								
			
							

						</div>



	


<div>

	<div className="chat_zq_5"> 
		
		<div>
			<a  href="/" className="clrWpstofLink">Like</a>
		</div> 	

		<div>
			<a href="/" className="clrWpstofLink">Reply</a>
		</div> 


	
<div>

	

		
		<a className="clrWpstofLink" href="/">
		
	Del
		
		
		</a>



</div>


		<div> <span className="czRz22z_25"> 02 Nov 2023 19:32 </span> </div></div>
		
	


</div>


</div>

			

				








</div>	
	
	
	))}




</div>









</div>























	<div className="col-3">


		<div className="rprflmn">

			<div><a href="/">News</a></div>
			<div><a href="/">Reactions</a></div>
			<div><a href="/">Search</a></div>
			<div><a href="/">Updates</a></div>
			<div><a href="/">Comments</a></div>
			<div><a href="/">Videos</a></div>
			<div><a href="/">Photos</a></div>
			<div><a href="/">Recommended</a></div>
			<div><a href="/">Settings</a></div>
			<div><a href="/">My page</a></div>
			<div><a href="/">Pages</a></div>

		</div>

	</div>





</Main>





	
	
	</>)	
	
}



export function Chats() {
	
let QChatRoomData = [
	{pic: '/pics/chat/boys.png',name:'For boys',url:'1',visitors:3},
	{pic: '/pics/chat/girls.png',name:'For girls',url:'2',visitors:0},
	{pic: '/pics/chat/Rainbow.png',name:'Rainbow',url:'3',visitors:5},
	{pic: '/pics/chat/Black.jpeg',name:'Black hole',url:'4',visitors:0},
	{pic: '/pics/chat/Love.png',name:'Love',url:'5',visitors:3},
	{pic: '/pics/chat/Party.png',name:'Party day',url:'6',visitors:5},
	{pic: '/pics/chat/keke.png',name:'Women things',url:'7',visitors:2},
	{pic: '/pics/chat/indigo.png',name:'Indigo',url:'8',visitors:5},
	{pic: '/pics/chat/meal.png',name:'Kitchen & meal',url:'9',visitors:1},
	{pic: '/pics/chat/boys.png',name:'Love',url:'10',visitors:0},
	{pic: '/pics/chat/boys.png',name:'Love',url:'11',visitors:0},
	{pic: '/pics/chat/boys.png',name:'Love',url:'12',visitors:4}
];


	
return (<>
	
	

<Main>


<div className="col-9 cmnt2z1qwer">


	<div className="kAppPagePhtChatHeading">
			<div className="klmanchlq1illumniation"></div>
			<div className="knmaninhedq123q">Chat rooms</div>
			<div className="lmkmnaingq331">Chit-chatting with the people!</div>
	</div>





	<div className="topic_match_for_you_cats chMarginTopBt1a">
			<Link to="/chats/activity">Chat activity</Link>
	</div>




<div className="gqchat_3">


<div className="row" style={{rowGap: '15px'}}>



	{QChatRoomData.map((chatRoom, index) => ( 
		
	<div className="col-sm-4" key={index}>

		<div className="gqca51231">
			
				<div className="pchat1_m">
						
						<div>
							<img  alt="xz" className="kPhx80x80" src={`${chatRoom.pic}`} />
						</div>
				 

						<div className="pFlexAlCenter">
							
							
							<div className="kchTDName1F2za">
								<Link className="kchTDName1F" to={`/Chats/${chatRoom.url}/`}>${chatRoom.name} </Link>
							</div>
							
							<div className="mdtxtWhza1">
								 
									{`${chatRoom.visitors === 0 ? "Room is empty" : `${chatRoom.visitors} Chatters`}`}	</div>
							
					
							
							
							
						</div>


				</div>
		</div>


	</div>	
		
	))}



</div>
</div>










</div>























	<div className="col-3">


		<div className="rprflmn">

			<div><a href="/">News</a></div>
			<div><a href="/">Reactions</a></div>
			<div><a href="/">Search</a></div>
			<div><a href="/">Updates</a></div>
			<div><a href="/">Comments</a></div>
			<div><a href="/">Videos</a></div>
			<div><a href="/">Photos</a></div>
			<div><a href="/">Recommended</a></div>
			<div><a href="/">Settings</a></div>
			<div><a href="/">My page</a></div>
			<div><a href="/">Pages</a></div>

		</div>

	</div>


</Main>

	
	
	
	
	
	</>)

}







function ShowText(props){
   return (<>
   
   
<div className="knChatstr1">



	<div className="knChatstr2">
		<div><img alt="" src="/photos/4jAAUJR4oVq3MRoYScwf_pic__16975369495320084_8473216_picx5b4_iq5qc1240pcy1t_u23486t17131_w25zvay3412y.jpg" className="ph_ch_r1z" /></div>
		
		
		<div>
				<div>
	<a href="/">
		<span className="nickCOlorQzk1zq">Exploding</span>
	</a></div>
				<div className="textgrey">07 Aug 2023 02:46</div>
		
		</div>
		
		
	</div>
	
	
	
	<div className="kpdng10az">Daily, mmmmmmmmmm</div>
	
	
	
<div className="brdrbtmqz012zd1"></div>	
	
<div className="knChatstr31zq1">
	<div><a href="/">Room 1</a></div>
	<div><a href="/" className="bSuccesr2s">Reply</a></div>
</div>	
				
	
	
	
</div>   
   
   
    </>)
}



export function ChatsActivity() {
	

	
return (<>
	
	

<Main>


<div className="col-9 cmnt2z1qwer">


	<div className="kAppPagePhtChatHeading">
			<div className="klmanchlq1illumniation"></div>
			<div className="knmaninhedq123q">Chat rooms</div>
			<div className="lmkmnaingq331">Answers in the chats</div>
	</div>








<div className="knChatMnqz3261">


   <ShowText />
   <ShowText />
   <ShowText />
   <ShowText />
   <ShowText />
   <ShowText />
   <ShowText />
   <ShowText />
   <ShowText />
   <ShowText />
   <ShowText />





</div>










</div>























	<div className="col-3">


		<div className="rprflmn">

			<div><a href="/">News</a></div>
			<div><a href="/">Reactions</a></div>
			<div><a href="/">Search</a></div>
			<div><a href="/">Updates</a></div>
			<div><a href="/">Comments</a></div>
			<div><a href="/">Videos</a></div>
			<div><a href="/">Photos</a></div>
			<div><a href="/">Recommended</a></div>
			<div><a href="/">Settings</a></div>
			<div><a href="/">My page</a></div>
			<div><a href="/">Pages</a></div>

		</div>

	</div>


</Main>

	
	
	
	
	
	</>)

}







