import React from 'react'
import { Link } from 'react-router-dom'
import { Main } from './funcs.js'
import { useCookies } from 'react-cookie'




function Login() {

const [email, Setemail] = React.useState("")
const [pass, Setpass] = React.useState("")



const [cookies, setCookie] = useCookies()	
	
	
/*React.useMemo(() => {	

	setCookie('name','baha')
	
	console.log(cookies)
	
},[setCookie, cookies])	*/


const smail = (event) => Setemail(event.target.value)
const spass = (event) => Setpass(event.target.value)
  
   
  function handleButton(event){
    setCookie('login', email)
    setCookie('pass', pass)
    event.preventDefault()
  }


  return (
<Main>

<div className="col-12">
			
			
			
		<div className="row">
		
		
		<div className="col-9">
		
		
		
			<div className="row" style={{marginTop: '10px'}}>
	
	


<div className="col-12 mnlstgnd">


	


<div className="auth_nv2">
<div className="active"><Link to="/login">Login</Link></div>
<div><Link to="/signup">Registration</Link></div>
</div>
	
	
	
	
<div className="forma">
	
<div className="Entrst">Enter to the site</div>	


<form>
	
<input type="text" value={email} onInput={smail} placeholder="Email" maxLength="129"/> <br/>
<input type="text" value={pass} onInput={spass} placeholder="Password" maxLength="129"/> <br/>



 <br/>
 
 
 <div>  Don't remember password ? <a href="/" className="fntlfq123"> recover it</a></div>

 
 <br/>

<button onClick={handleButton}>Login</button>

</form>


</div>	




<div className="auth_lqnk4">

<div>  Don't have an account? <a href="/" className="fntlfq123"> Sign up</a></div>

</div>	
	
	

</div>
	



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		

		</div>
		
			
		
		
		
		</div>
		
		
		<style>
		
		
		</style>
		
		<div className="col-3" style={{paddingRight: '20px'}}>
		
		


		
	<div className="col-12" style={{marginRight: '2px'}}>


<div className="cz_datq">


<div className="t21">New posts <a href="/"> <b>5000</b> </a></div>




<div className="right_unauth_posts czlast">
	


<div className="left cz_pdng21">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/>
</div>




<div className="cz_datq_pdngaz">
	
<div><a href="/">What happened in ukraine?</a></div>		
	
<div>
qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe  
</div>

</div>

<div className="kk_1"> 

<div className="left cz_datq_pdngazz">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg" width="25" height="25"/>	 <a href="/">Michell</a>  
</div>


<div className="left cz_datq_pdngazz mnlstgnd cz_2z">
 2023-01-11
</div>

<div className="right kk_2" id="rght_details">
	
<span>
<svg className="lzzzf123a_22"></svg> 15 
</span>

</div>


</div>





</div>



<div className="right_unauth_posts czlast">
	


<div className="left cz_pdng21">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/>
</div>




<div className="cz_datq_pdngaz">
	
<div><a href="/">What happened in ukraine?</a></div>		
	
<div>
qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe  
</div>

</div>

<div className="kk_1"> 

<div className="left cz_datq_pdngazz">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg" width="25" height="25"/>	 <a href="/">Michell</a>  
</div>


<div className="left cz_datq_pdngazz mnlstgnd cz_2z">
 2023-01-11
</div>

<div className="right kk_2" id="rght_details">
	
<span>
<svg className="lzzzf123a_22"></svg> 15 
</span>

</div>


</div>





</div>



<div className="right_unauth_posts czlast">
	


<div className="left cz_pdng21">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/>
</div>




<div className="cz_datq_pdngaz">
	
<div><a href="/">What happened in ukraine?</a></div>		
	
<div>
qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe  
</div>

</div>

<div className="kk_1"> 

<div className="left cz_datq_pdngazz">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg" width="25" height="25"/>	 <a href="/">Michell</a>  
</div>


<div className="left cz_datq_pdngazz mnlstgnd cz_2z">
 2023-01-11
</div>

<div className="right kk_2" id="rght_details">
	
<span>
<svg className="lzzzf123a_22"></svg> 15 
</span>

</div>


</div>





</div>




<div className="right_unauth_posts czlast">
	


<div className="left cz_pdng21">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/>
</div>




<div className="cz_datq_pdngaz">
	
<div><a href="/">What happened in ukraine?</a></div>		
	
<div>
qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe  
</div>

</div>

<div className="kk_1"> 

<div className="left cz_datq_pdngazz">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg" width="25" height="25"/>	 <a href="/">Michell</a>  
</div>


<div className="left cz_datq_pdngazz mnlstgnd cz_2z">
 2023-01-11
</div>

<div className="right kk_2" id="rght_details">
	
<span>
<svg className="lzzzf123a_22"></svg> 15 
</span>

</div>


</div>





</div>






</div>



	
</div>	
		

		
			
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	
	
			

		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
		
		
		
		
		
		
		
		</div>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		</div>
		
		
		
		
			
	
		
		
		
		</div>


   
</Main>
  );
}

export default Login;
