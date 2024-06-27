import { Routes, Route, useParams, Navigate } from 'react-router-dom'
import { UserA } from './inc/User.js';


import Messaging from './page/messaging.js';
import Video from './components/video/main.js';
import Videoview from './components/video/view.js';
import VideovNew from './components/video/new.js';
import Friends from './page/friends.js';
import FUriends from './components/friends/';
import Shop from './components/shop/main.js';
import Sproduct from './components/shop/product.js';
import { Chats,Chatid, ChatsActivity } from './components/chat/chat.js';
import { Hlsupport, Hlsupportwchat } from './components/help/help.js';
import Group from './components/group/index.js';
import GroupMain from './components/group/main.js';
import Bloglst from './components/blog/index.js';
import Blogview from './components/blog/view.js';
import Profileprivate, {  PublicProfile } from './components/profile/Private.js';
import Profilegifts, { SendGiftTouser } from './components/profile/gifts.js';
import DetailedPosts from './components/posts/Posts.js';
import Communities, { Community } from './components/communities/';
import Photos from './components/user/photos.js';
import Users from './components/users/';
import Alerts from './components/alerts/';
import Usrvids from './components/user/videos.js';
import Abtusr from './components/user/about.js';
import Lchat from './components/live_chat/chat.js';
import Usettings from './components/settings/';
import UMain from './components/main.js';
import UserPage from './components/user.js';
import MyPhotos from './components/user/my_photos.js';
import HomeIndex from './home/index.js';
import RecoveryPage from './home/password.js';
import SignUpPage from './home/signup.js';
import UserMembers from './components/members/';
import UserGifts from './components/gifts/';
import Weather from './components/weather/';

import {useEffect} from 'react'


const qqzqwe = {buha:15, add:25}



export function Errordetection() {
	return (<Navigate to="/" replace={true} />)
}

//just a test nothing else  you can remove this one 
export function Aba() {
 
  const params = useParams();
  

	return (<>
	{params.id}
	</>)
	

}








export default function App() {
   
   
useEffect(()=> {


    const handleClick = (event) => {
       
      const target = event.target.closest('a');
      
      if (target) {
        event.preventDefault();
        const href = target.getAttribute('href');
        
  
          window.scrollTo({top: 0, behavior: 'smooth'});

      
        
      
        
      }
      
      
    };





   //one time deal
   setTimeout(()=> {
           document.addEventListener('click', handleClick);  
   },1000)
   
   
},[])
   
   
  return (
<UserA.Provider value={qqzqwe}>
<Routes>
  

<Route path="/" element={<HomeIndex />} />
<Route path="/signup" element={<SignUpPage />} />
<Route path="/password/recovery" element={<RecoveryPage />} />
<Route path="/friends" element={<Friends/>} />
<Route path="/user/photos/:id" element={<Photos />} />
<Route path="/user/videos/:id" element={<Usrvids />} />
<Route path="/user/friends/:id" element={<FUriends />} />
<Route path="/user/about/:id" element={<Abtusr />} />
<Route path="/page/members" element={<UserMembers />}/>
<Route path="/shop/" element={<Shop />} />
<Route path="/shop/product/:id" element={<Sproduct />} />
<Route path="/user/settings" element={<Usettings />} />      
<Route path="/Live_chat" element={<Lchat />} />
<Route path="/home" element={<UMain />} />
<Route path="/user/box" element={<UserPage />} />
<Route path="/my/photos" element={<MyPhotos />} />
<Route path="/user/notification" element={<Alerts />} />
<Route path="/page/community/:id" element={<Community/>} />
<Route path="/page/community/" element={<Communities/>} />
<Route path="/page/group/:id" element={<Group />} />
<Route path="/page/group/" element={<GroupMain />} />
<Route path="/users" element={<Users/>} />
<Route path="/page/gifting/:id" element={<Profilegifts />} />
<Route path="/page/gifting/:id/send" element={<SendGiftTouser />} />
<Route path="/user/gifts/:id" element={<UserGifts />} />
<Route path="/post_details/:id" element={<DetailedPosts />} />
<Route path="/profile" element={<Profileprivate />} />
<Route path="/profile/:id" element={<PublicProfile />} />
<Route path="/Chats" element={<Chats />} />
<Route path="/Chats/:id" element={<Chatid />} />
<Route path="/Chats/activity" element={<ChatsActivity />} /> 
<Route path="/Help" element={<Hlsupport />} />
<Route path="/Help/chat" element={<Hlsupportwchat />} />
<Route path="/page/blogs" element={<Bloglst/>} />
<Route path="/page/blogs/:id" element={<Blogview/>} />
<Route path="/page/video/" element={<Video />} />	
<Route path="/page/video/:id" element={<Videoview/>} />      
<Route path="/page/video/new" element={<VideovNew />} />      
<Route path="/Messaging/:id" element={<Messaging />} />
<Route path="/Weather" element={<Weather />} />




{/*you can remove this one also*/}
<Route path="/aba/:id" element={<Aba/>}/>	

{/*you can also remove this one if you dont want error path detection to be there evne without this this app can run without any problems  */}
<Route path="*" element={<Errordetection/>} />

</Routes>
</UserA.Provider>
  );
}

