import { useLocation, Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


export  function is_int(data) {
/*
if (typeof data !== 'number') {
   return false
}*/

if (isNaN(data))return false


if (/^\d+$/.test(data) && data>0)
	return true;
  

return false
}



export function ResponsiveComponent({children}) {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsWideScreen(true);
      } else {
        setIsWideScreen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      { isWideScreen ? children :  null }
    </>
  );
}





export function ResponsiveComponentPc({children}) {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsWideScreen(true);
      } else {
        setIsWideScreen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <>
         { isWideScreen ? children :  null }
      </>
  );
}





export const zz = (check,url) => {
	return check.test(url);
};


export function Mobile({children}){
   
var s = window.screen.availWidth
//var s1 = window.screen.width


if (s < 900)
   return (<> {children} </>);  
else 
   return (<>  </>);   
   
}

export function Computer({children}){
   
var s = window.screen.availWidth
//var s1 = window.screen.width


if (s > 900)
   return (<> {children} </>);  
else 
   return (<>  </>);   
   
}


/*********/


export function NotAuthorizedHeader(){
   return (<>
         <div className="angle_unauthorizedHeader">
            Yours.com
         </div>
   </>)
}


export function NotAuthorized({children}) {



return (<>
	
	
<NotAuthorizedHeader />
	
   <div className="topSqide1p3c1">

                
                     
                     {children}
                     
               

  </div>




  
 <Footer/> 
	
	
	
	</>)
}





/**********/



export function Main({children}) {


const location = useLocation();

const DifSettings = zz(/^(\/(user\/settings|user\/settings\/.*?)+)$/g, location.pathname.toLowerCase())


//const [getLeftBarSet, setgetLeftBarSet] = useState("10")


	return (<>
	
	
	<Nav/>
	
<div className="col-12 topSide1pc1">


<div className="row g-0">


{DifSettings !== true ? (<> <Leftmenu /> </>) : ""  }



<div id="main_r2" className={`${ DifSettings !== true ? "col-10 paddingTOpFOr1Middle" : "col-12 paddingTOpFOr1Middle"} `}>



<div className="row">


<div className="col-12">


<div className="row">


<div className="col-12">




<div className="row" id="resp_fr" style={{marginLeft:'10px'}}>
	

{children}


	
	
</div>



</div>





</div>



</div>





</div>


</div>






</div>



</div>  
  
  
 <Footer/> 
	
	
	
	</>)
}




export function Nav() {


  const navigate = useNavigate();

  function NavIgation(url) {
      navigate(url);
  }





//const auth_Stat = true;
//console.log(zz(/^(\/community\/[0-9]+)$/g,'/community/15'));

const location = useLocation();

//check if page path is community
const qzz = zz(/^(\/(community|video)\/[0-9]+)$/g, location.pathname.toLowerCase())


//console.log(qzz)


const IfmessageActive = zz(/^(\/(messaging)\/[0-9]+)$/g, location.pathname.toLowerCase())


return (<>

{qzz === true ?  ( <div className="clnav">
<div className="c1">

<div className="clnaqz1_">
	
	
<div className="pdng21"><img alt="Img"  src="/pics/icons8-home-94.png" width="40"/></div>

<div><input className="pdng213zzs4123" placeholder="Searching for the things"/></div>



</div>


<div className="clnaqz2_ cmtkdqflx">


<div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zm0 15.92c-.02.03-.06.06-.08.08H3V5.08L3.08 5h17.83c.03.02.06.06.08.08v13.84zm-10-3.41L8.5 12.5 5 17h14l-4.5-6z"></path></svg></div>


<div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path></svg></div>

<div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg></div>

<div><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path></svg></div>

<div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56z"></path></svg></div>

</div>


<div className="clnaqz3_">

<div>
	<div className="cqmzfqwe2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="L4rKfs~Qrm~k0Pk8MRsoza" x1="32.012" x2="15.881" y1="32.012" y2="15.881" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset=".242" stop-color="#f2f2f2"></stop><stop offset="1" stop-color="#ccc"></stop></linearGradient><circle cx="24" cy="24" r="11.5" fill="url(#L4rKfs~Qrm~k0Pk8MRsoza)"></circle><linearGradient id="L4rKfs~Qrm~k0Pk8MRsozb" x1="17.45" x2="28.94" y1="17.45" y2="28.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset=".363" stop-color="#0e5fa4"></stop><stop offset=".78" stop-color="#135796"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><circle cx="24" cy="24" r="7" fill="url(#L4rKfs~Qrm~k0Pk8MRsozb)"></circle><linearGradient id="L4rKfs~Qrm~k0Pk8MRsozc" x1="5.326" x2="38.082" y1="5.344" y2="38.099" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#889097"></stop><stop offset=".331" stop-color="#848c94"></stop><stop offset=".669" stop-color="#78828b"></stop><stop offset="1" stop-color="#64717c"></stop></linearGradient><path fill="url(#L4rKfs~Qrm~k0Pk8MRsozc)" d="M43.407,19.243c-2.389-0.029-4.702-1.274-5.983-3.493c-1.233-2.136-1.208-4.649-0.162-6.693 c-2.125-1.887-4.642-3.339-7.43-4.188C28.577,6.756,26.435,8,24,8s-4.577-1.244-5.831-3.131c-2.788,0.849-5.305,2.301-7.43,4.188 c1.046,2.044,1.071,4.557-0.162,6.693c-1.281,2.219-3.594,3.464-5.983,3.493C4.22,20.77,4,22.358,4,24 c0,1.284,0.133,2.535,0.364,3.752c2.469-0.051,4.891,1.208,6.213,3.498c1.368,2.37,1.187,5.204-0.22,7.345 c2.082,1.947,4.573,3.456,7.34,4.375C18.827,40.624,21.221,39,24,39s5.173,1.624,6.303,3.971c2.767-0.919,5.258-2.428,7.34-4.375 c-1.407-2.141-1.588-4.975-0.22-7.345c1.322-2.29,3.743-3.549,6.213-3.498C43.867,26.535,44,25.284,44,24 C44,22.358,43.78,20.77,43.407,19.243z M24,34.5c-5.799,0-10.5-4.701-10.5-10.5c0-5.799,4.701-10.5,10.5-10.5S34.5,18.201,34.5,24 C34.5,29.799,29.799,34.5,24,34.5z"></path></svg></div>
</div>


<div>
	<div className="cqmzfqwe2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="B7tH1ezsFVrorVaJSUtbja" x1="23.542" x2="23.542" y1="5.842" y2="41.729" gradientTransform="translate(.435 .317)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#B7tH1ezsFVrorVaJSUtbja)" d="M40.004,41.969L8.031,42c-1.099,0.001-1.999-0.897-2-1.996L6,8.031 c-0.001-1.099,0.897-1.999,1.996-2L39.969,6c1.099-0.001,1.999,0.897,2,1.996L42,39.969C42.001,41.068,41.103,41.968,40.004,41.969z"></path><path d="M29.5,15c-2.413,0-4.455,1.451-5.5,2.364C22.955,16.451,20.913,15,18.5,15 c-3.584,0-6.5,2.916-6.5,6.5c0,5.476,7.578,11.243,10.835,13.468c0.354,0.242,0.76,0.363,1.166,0.363 c0.405,0,0.811-0.121,1.165-0.363C28.423,32.741,36,26.972,36,21.5C36,17.916,33.084,15,29.5,15z" opacity=".05"></path><path d="M29.5,15.5c-2.547,0-4.669,1.747-5.5,2.538c-0.831-0.791-2.953-2.538-5.5-2.538c-3.309,0-6,2.691-6,6 c0,5.384,8.127,11.354,10.618,13.056c0.268,0.183,0.576,0.274,0.883,0.274c0.307,0,0.615-0.092,0.883-0.274 C27.374,32.854,35.5,26.881,35.5,21.5C35.5,18.191,32.809,15.5,29.5,15.5z" opacity=".07"></path><path fill="#fff" d="M24,18.75c0,0,2.463-2.75,5.5-2.75s5.5,2.496,5.5,5.5c0,5.17-8.101,11.072-10.399,12.643 c-0.364,0.249-0.837,0.249-1.201,0C21.101,32.572,13,26.67,13,21.5c0-3.004,2.463-5.5,5.5-5.5S24,18.75,24,18.75z"></path></svg></div>
</div>




<div>
	<div className="cqmzfqwe2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="CC9oZZMzjsmibQMmvMyOwa" x1="24" x2="24" y1="17.053" y2="40.166" gradientUnits="userSpaceOnUse"><stop offset=".88" stop-color="#c71926"></stop><stop offset=".883" stop-color="#b51623"></stop><stop offset=".886" stop-color="#9c131f"></stop></linearGradient><path fill="url(#CC9oZZMzjsmibQMmvMyOwa)" d="M4,17h40v21c0,1.105-0.895,2-2,2H6c-1.105,0-2-0.895-2-2V17z"></path><path fill="#eb6773" d="M44,17v-3.172c0-0.53-0.211-1.039-0.586-1.414l-1.828-1.828C41.211,10.211,40.702,10,40.172,10H7.828 c-0.53,0-1.039,0.211-1.414,0.586l-1.828,1.828C4.211,12.789,4,13.298,4,13.828V17H44z"></path><linearGradient id="CC9oZZMzjsmibQMmvMyOwb" x1="16" x2="32" y1="8.5" y2="8.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e"></stop><stop offset="1" stop-color="#545454"></stop></linearGradient><path fill="url(#CC9oZZMzjsmibQMmvMyOwb)" d="M30.5,7h-13C16.672,7,16,7.672,16,8.5V10h16V8.5C32,7.672,31.328,7,30.5,7z"></path><path d="M37,21.909h-2c-1.054,0-1.909-0.855-1.909-1.909v-4c0-1.054,0.855-1.909,1.909-1.909h2 c1.054,0,1.909,0.855,1.909,1.909v4C38.909,21.054,38.054,21.909,37,21.909z" opacity=".018"></path><path d="M37,21.818h-2c-1.004,0-1.818-0.814-1.818-1.818v-4c0-1.004,0.814-1.818,1.818-1.818h2 c1.004,0,1.818,0.814,1.818,1.818v4C38.818,21.004,38.004,21.818,37,21.818z" opacity=".036"></path><path d="M37,21.727h-2c-0.954,0-1.727-0.773-1.727-1.727v-4c0-0.954,0.773-1.727,1.727-1.727h2 c0.954,0,1.727,0.773,1.727,1.727v4C38.727,20.954,37.954,21.727,37,21.727z" opacity=".054"></path><path d="M37,21.636h-2c-0.904,0-1.636-0.733-1.636-1.636v-4c0-0.904,0.733-1.636,1.636-1.636h2 c0.904,0,1.636,0.733,1.636,1.636v4C38.636,20.904,37.904,21.636,37,21.636z" opacity=".073"></path><path d="M37,21.545h-2c-0.854,0-1.545-0.692-1.545-1.545v-4c0-0.854,0.692-1.545,1.545-1.545h2 c0.854,0,1.545,0.692,1.545,1.545v4C38.545,20.854,37.854,21.545,37,21.545z" opacity=".091"></path><path d="M37,21.455h-2c-0.803,0-1.455-0.651-1.455-1.455v-4c0-0.803,0.651-1.455,1.455-1.455h2 c0.803,0,1.455,0.651,1.455,1.455v4C38.455,20.803,37.803,21.455,37,21.455z" opacity=".109"></path><path d="M37,21.364h-2c-0.753,0-1.364-0.611-1.364-1.364v-4c0-0.753,0.611-1.364,1.364-1.364h2 c0.753,0,1.364,0.611,1.364,1.364v4C38.364,20.753,37.753,21.364,37,21.364z" opacity=".127"></path><path d="M37,21.273h-2c-0.703,0-1.273-0.57-1.273-1.273v-4c0-0.703,0.57-1.273,1.273-1.273h2 c0.703,0,1.273,0.57,1.273,1.273v4C38.273,20.703,37.703,21.273,37,21.273z" opacity=".145"></path><path d="M37,21.182h-2c-0.653,0-1.182-0.529-1.182-1.182v-4c0-0.653,0.529-1.182,1.182-1.182h2 c0.653,0,1.182,0.529,1.182,1.182v4C38.182,20.653,37.653,21.182,37,21.182z" opacity=".164"></path><path d="M37,21.091h-2c-0.602,0-1.091-0.488-1.091-1.091v-4c0-0.602,0.488-1.091,1.091-1.091h2 c0.602,0,1.091,0.488,1.091,1.091v4C38.091,20.602,37.602,21.091,37,21.091z" opacity=".182"></path><path d="M37,21h-2c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v4 C38,20.552,37.552,21,37,21z" opacity=".2"></path><g><path d="M13,21.909h-2c-1.054,0-1.909-0.855-1.909-1.909v-4c0-1.054,0.855-1.909,1.909-1.909h2 c1.054,0,1.909,0.855,1.909,1.909v4C14.909,21.054,14.054,21.909,13,21.909z" opacity=".018"></path><path d="M13,21.818h-2c-1.004,0-1.818-0.814-1.818-1.818v-4c0-1.004,0.814-1.818,1.818-1.818h2 c1.004,0,1.818,0.814,1.818,1.818v4C14.818,21.004,14.004,21.818,13,21.818z" opacity=".036"></path><path d="M13,21.727h-2c-0.954,0-1.727-0.773-1.727-1.727v-4c0-0.954,0.773-1.727,1.727-1.727h2 c0.954,0,1.727,0.773,1.727,1.727v4C14.727,20.954,13.954,21.727,13,21.727z" opacity=".054"></path><path d="M13,21.636h-2c-0.904,0-1.636-0.733-1.636-1.636v-4c0-0.904,0.733-1.636,1.636-1.636h2 c0.904,0,1.636,0.733,1.636,1.636v4C14.636,20.904,13.904,21.636,13,21.636z" opacity=".073"></path><path d="M13,21.545h-2c-0.854,0-1.545-0.692-1.545-1.545v-4c0-0.854,0.692-1.545,1.545-1.545h2 c0.854,0,1.545,0.692,1.545,1.545v4C14.545,20.854,13.854,21.545,13,21.545z" opacity=".091"></path><path d="M13,21.455h-2c-0.803,0-1.455-0.651-1.455-1.455v-4c0-0.803,0.651-1.455,1.455-1.455h2 c0.803,0,1.455,0.651,1.455,1.455v4C14.455,20.803,13.803,21.455,13,21.455z" opacity=".109"></path><path d="M13,21.364h-2c-0.753,0-1.364-0.611-1.364-1.364v-4c0-0.753,0.611-1.364,1.364-1.364h2 c0.753,0,1.364,0.611,1.364,1.364v4C14.364,20.753,13.753,21.364,13,21.364z" opacity=".127"></path><path d="M13,21.273h-2c-0.703,0-1.273-0.57-1.273-1.273v-4c0-0.703,0.57-1.273,1.273-1.273h2 c0.703,0,1.273,0.57,1.273,1.273v4C14.273,20.703,13.703,21.273,13,21.273z" opacity=".145"></path><path d="M13,21.182h-2c-0.653,0-1.182-0.529-1.182-1.182v-4c0-0.653,0.529-1.182,1.182-1.182h2 c0.653,0,1.182,0.529,1.182,1.182v4C14.182,20.653,13.653,21.182,13,21.182z" opacity=".164"></path><path d="M13,21.091h-2c-0.602,0-1.091-0.488-1.091-1.091v-4c0-0.602,0.488-1.091,1.091-1.091h2 c0.602,0,1.091,0.488,1.091,1.091v4C14.091,20.602,13.602,21.091,13,21.091z" opacity=".182"></path><path d="M13,21h-2c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v4 C14,20.552,13.552,21,13,21z" opacity=".2"></path></g><path fill="#fff" d="M35,15h2c0.552,0,1,0.448,1,1v4c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-4 C34,15.448,34.448,15,35,15z"></path><path fill="#fff" d="M11,15h2c0.552,0,1,0.448,1,1v4c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-4 C10,15.448,10.448,15,11,15z"></path></svg></div>
</div>

</div>


</div>
</div>   ) : (  <>

{/*
<div className="cl5123">
	
	<div className="mzn2">Main wqwqe</div>
	
	<div className="pleft">
			
			<div className="inflx" id="S123">
				
	
				
			
			
			
			<div>	<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path></svg></div>	
		
				
				
			<div> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 10l5 5 5-5z"></path></svg>   <span>Mary koberidze</span></div>
			<div><img alt="Img"  className="brdr21" src="/pics/MO_LxM2yi48.jpg" height="40" width="40"/></div>
			
			</div>
			
			
			
			

		</div>
	
	</div>
   */}

<div className="mobHdrfr1s">

{/**/}
<div>
     <div className="col-12 nav_frmob">
         <div className="angle_unauthorizedHeader2">
              
            <div className="plinkhhhff">
               <img src="/logo192.png" alt="" className="phdrsz123z"/>
               <strong className="pwtext">Asocial</strong>
            </div>              
               
               
               
         </div>
          <div className="">
                <div className="fl_frmob2">  
                 <Link to="/messaging/1"> <span className="material2">mail</span> </Link>
                 </div>
          </div>
   </div>
</div>

{/**/}



{/**/}

<div>



<div className={`pHntNV12_3 ${IfmessageActive == true ? "headerForMEssaging" : ""}`}>
	
	
	<div className="col-3 nav_frmobfrrow">
		
		<div className="leftRegionWeb">
			
			<div className="leftRegWeb1">
            <Link to="/home" className="mnlnkstl">
                <img src="/assets/logo-64x64.png" className="ang_hrcimg2" alt="logo"/>
            </Link>
         </div>
			
			<div className="leftregb100w">
				
				<div className="leftregb100w">
					<form><input className="ppng1_3213 input2" type="buha" placeholder="Search for the things" maxlength="128"/></form>
				</div>
	
	
	</div>
		</div>
		
		 
		 
	</div>
	
   
	
	<div className="col-6 nav_frmobmdlrow">

   
		<div className="MiddleRegionWeb">
			<div onClick={() => NavIgation('/home')}><span className="MatiCons">home</span></div>
			<div onClick={() => NavIgation('/user/notification')}><span className="MatiCons">feed</span></div>
			<div onClick={() => NavIgation('/user/friends/1')}><span className="MatiCons">group</span></div>
			<div onClick={() => NavIgation('/page/video')}><span className="MatiCons">smart_display</span></div>
         
         
         <div id="fr_mbl1" onClick={() => NavIgation('/profile')}><span className="MatiCons">account_circle</span></div>
         <div id="fr_mbl1" onClick={() => NavIgation('/user/box')}> <img alt="" className="usr_nvmb" src="/user/daniel.jpg"/></div>
         
         
         
		</div>

	</div>
	
	
		<div className="col-3 nav_frmobscrow">
	
	
		<div className="rightMenuMAz23">
		
	
<div> 
	<div className="rightWebHdrB"> 
   
         <Link to="/user/settings/" id="noCdec">
            <span className="MatiCons30">settings_account_box</span> 
         </Link>
   
   </div>	
</div>


<div> 
	<div onClick={() => NavIgation('/page/members')} className="rightWebHdrB"> 
      <span className="MatiCons30">travel_explore</span> 
   </div>	
</div>


<div  className="prelz_rel1zre"> 
	
		
	<div className="rightWebHdrB"> 
   
      <Link to="/messaging/1" id="noCdec">
         <span className="MatiCons30">Mail</span>
      </Link>
      
      </div> 
</div> 
 	

<div className="kPstRel" tabindex="0" id="ckifUsrbClicked"> 
	
	<div> <Link to="/profile"> <img className="pbor10z" alt="" src="/us_man.png" width="48" height="48"/> </Link> </div> 
	


<div className="pdropDMainContainer HdrDp11_id" id="HdrDp11_id">
	

<div className="drpRightSide1zq"> 
	<div> <img alt="" className="prelz501z" src="/us_man.png" width="40" height="40"/></div>	
	<div className="alignSelfWhw1z">
	<a href="/">
		<span className="nickCOlorQzk1zq">Daily</span>
	</a></div>
</div>
	
	
<div className="alqmSeparator1zq"></div>

	
<div className="pDropDvChlPar">
	
	
	<div>   
		
		<div className="pFlexDiv" >
			<div><span className="MatiCons30">widgets</span></div>
			<div className="pFlexAlCenter"> Personal page </div>
		</div>
		
		
		
		</div>	
	
	
	
	<div>   
		
		<div className="pFlexDiv">
			<div><span className="MatiCons30">Settings</span></div>
			<div className="pFlexAlCenter"> Settings &amp; privacy </div>
		</div>
		
		
		
		</div>
	
	
	<div>
	
	
	
	<div className="pFlexDiv">
			<div><span className="MatiCons30">Help</span></div>
			<div className="pFlexAlCenter"> Help &amp; support </div>
		</div>
	
	
	
	
	</div>
	
	
	
	<div>
	
	
		
		<div className="pFlexDiv">
			<div><span className="MatiCons30">apps</span></div>
			<div className="pFlexAlCenter"> Applications  </div>
		</div>
	
	
	
	
	</div>
		
	
	

	
	
	
	<div> 
	
	
		<div className="pFlexDiv">
			<div><span className="MatiCons30">login</span></div>
			<div className="pFlexAlCenter">Logout </div>
		</div>
	
	
	
	
	
	
	
	</div>
	
	
	
	
</div>	



</div>


	
</div> 
	
		


		
		</div>
	
	
	
	</div>
	
	
		

</div>
   


</div>


{/**/}






</div>
   



   
   
   
   
 </>  )}






</>)	
	
}


export function ForSettings(){
   
 return(<> 
 
 	<div className=""> <span className="material-symbols-outlined">account_circle</span> Personal Information</div>
  	<div className=""> <span className="material-symbols-outlined">manage_accounts</span> General settings</div>
  	<div className=""> <span className="material-symbols-outlined">account_box</span> Change username </div>
  	<div className=""> <span className="material-symbols-outlined">leaderboard</span> Leader status </div>
  	<div className=""> <span className="material-symbols-outlined">lock</span> Profile privacy </div>
  	<div className=""> <span className="material-symbols-outlined">shield_person</span> Change password </div>
  	<div className=""> <span className="material-symbols-outlined">person_cancel</span> Profile deactivation </div>
  	<div className=""> <span className="material-symbols-outlined">help</span> Help Center </div>
   <div className=""> <span className="material-symbols-outlined">logout</span> Logout </div>
 




 
 </>)  
}


export function Leftmenu() {


const location = useLocation();

const DifSettings = zz(/^(\/(user\/settings|user\/settings\/.*?)+)$/g, location.pathname.toLowerCase())




  const navigate = useNavigate();

  function NavIgation(url) {
      navigate(url);
  }





return (<>


<div className="col-2" id="leftSidebaRresponsive">
		    
		
		<div className="Lmenu_2 cl_lfpsfixed">
		
	
{DifSettings == true ? (<> 
   	<div className="lmenusub">
         <ForSettings />
   </div>
   </>) : (<> 
   
   
  	<div className="lmenusub">

         
  	<div className="" onClick={() => NavIgation('/profile')}> <span className="material-symbols-outlined">
account_circle
</span> My page</div>



       
         
		<div className="" onClick={() => NavIgation('/home')}> <span className="material-symbols-outlined">
newspaper
</span> News Feed</div>
		
		<div className="" onClick={() => NavIgation('/user/notification')}> <span className="material-symbols-outlined">
notifications
</span> Notifications</div>
      
      
		<div className="" onClick={() => NavIgation('/messaging/1')}> <span className="material-symbols-outlined">
chat
</span> Messages</div>
      
      
      
      
      
      
		<div className="" onClick={() => NavIgation('/user/friends/1')}> <span className="material-symbols-outlined">
group
</span>  Friends</div>





      <div className="" onClick={() => NavIgation('/page/group')}> <span className="material-symbols-outlined">
diversity_3
</span>  Groups</div>


<div className="" onClick={() => NavIgation('/page/blogs')}>
<span className="material-symbols-outlined">
event_note
</span>    Blog

</div>


<div>

<span className="material-symbols-outlined">
apps
</span> Applications
</div>


   
      <div className=""  onClick={() => NavIgation('/Live_chat')}> <span className="material-symbols-outlined">
sms
</span>  Live Chat</div>
    



      <div className=""  onClick={() => NavIgation('/page/video')}>  <span className="material-symbols-outlined">
movie
</span>  Videos</div>




    <div className=""  onClick={() => NavIgation('/chats')}>  <span className="material-symbols-outlined">
forum
</span>  Chat rooms</div>







      <div className=""   onClick={() => NavIgation('/Weather')}> <span className="material-symbols-outlined">
sunny
</span>  Weather</div>


      <div className=""  onClick={() => NavIgation('/shop')}> <span className="material-symbols-outlined">
storefront
</span>  Marketplace</div>
   
   
   
   
      <div className=""  onClick={() => NavIgation('/page/members')}> <span className="material-symbols-outlined">
person
</span>  Members</div>
   
   
   
   <div className=""   onClick={() => NavIgation('/user/settings')}><span className="material-symbols-outlined">settings</span> Settings</div>
   
   
   <div   onClick={() => NavIgation('/user/box')}>
            <span className="material-symbols-outlined">
help
</span>   Help & Support
   
   </div>
   
   <div className="" onClick={() => NavIgation('/')}> <span className="material-symbols-outlined">
logout
</span>  Logout</div>
   
      
    
    
    
		</div> 
   
   
</>)}
		
		

		
		
		
		
		
		
		</div>
		
		
		</div>
		




</>)


}



export function Footer() {

return (<>

{/*
<div className="snacks123">
(C) Phantom in {(new Date().getFullYear())}
</div>
*/}
</>)

}





























export function MainForAuthorized({children}) {


return (<>
	
	
	<Nav />
	
<div className="cl_mn_forAuthorize to4pSide1p4c1">


<div className="row g-0">



<div className="col-10">



<div className="row">


<div className="col-12">


<div className="row">


<div className="col-12">




<div className="row" style={{marginLeft:'10px'}}>
	

{children}


	
	
</div>



</div>




<div className="col-12"></div>


<div className="col-12"></div>




</div>



</div>





</div>


</div>






</div>



</div>  
  
  
 <Footer/> 
	
	
	
	</>)
}

