import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import { PRecentProducts } from './main.js'

import './main.css';

	

	
	
export function Product(props) {
	return (<> 
	
	

		<div className="c_usr_qw1 PTB2">
      
      
			
      
        
   <div className="pdnvof1zqwe CenteringDiv">
   
     <img alt="" src={props.img} className="c_usr_img1frshops"/>
    
    </div>
         
      
      
      <div className="MBlosg_p4d4">
      
    

              <div className="pp_cvfl1">
              
                  <div>
                      <Link to="/shop/product/2"><b>{props.name}</b></Link>
                  </div>
                  
                  <div className="MPro2pD">
                     <span>{props.desc}</span>
                  </div>
                  
                </div>
            
		<div className="productSctions">
      
      
      <div className="center1s">
      
         <div>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>  </div>
         <div>  {props.heart} </div>
     
      </div>
      
      
         <div>
            <button className="button"> {props.price} </button>
         </div>
      
      </div>
         
       </div>  
         
         
         
         
		</div>
	
	
	
	</>)
}


export function Dshares(props){ 
   return <img alt="" className="pp_img_s1" src={`/assets/${props.name}`}/>
}




export default function Productmn() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">





<div className="row" id="prd_page_1z">


<div className="col-6" id="nv41">

   <div>
      <img className="pr_pgimg2" alt="" src="/shop/1.png"/>
   </div>
   
   
   <div className="row bforprs">
      <div className="col-6"> <button> Add to cart</button> </div>
       <div className="col-6"> <button> Buy now </button> </div>
   </div>

</div>


<div className="col-6"  id="nv41">
   <div className="prd_page">
   {/**/}
   
   <h3>Valencia Orange - Imported</h3>
   
   
   
 <div className="Margin15">
   <span className="forAlmostWhite"> Current price:  </span> <strong>1525 $</strong> 
 </div> 
   
   <div className="fl_spct1">
   
   
   <div>
      <div><strong>Delivery</strong> </div>
      <div> <span className="forAlmostWhite"> Free </span> </div>
    </div>
   
   
    <div> </div>
   
   </div>
   
   
   
 <div className="rowFL1qwe">
 
 <div className="psnapCat13"> 
  <div> Categories:  </div>
 
 
   <div className="psnapCat1">
          <span className="forAlmostWhite">Sunglasses</span>, 
          <span className="forAlmostWhite">Winter</span>,
           <span className="forAlmostWhite">Cool</span>,
          <span className="forAlmostWhite">Shorts</span>
        </div>  
 
 
 </div>  

 <div className="psnapCat13">
 
 
      <div> Tags:  </div>
       <div className="psnapCat1">
          <span className="forAlmostWhite">Fashion</span>, 
          <span className="forAlmostWhite">Women</span>,
          <span className="forAlmostWhite">Winter</span>
        </div>  
        
        
   </div>  
 
 
 
 
 <div className="psnapCat13">
 
 
      <div> Posted:  </div>
       <div className="psnapCat1">
          <span className="forAlmostWhite">20 may</span>
        </div>  
        
        
   </div>  
 
 
  <div className="psnapCat13">


      <div> Share:  </div>
       <div className="psnapCat1 pc_cnt1al1">
          <Dshares name="icons8-facebook.svg"/>
          <Dshares name="icons8-instagram.svg"/>
          <Dshares name="icons8-linked-in.svg"/>
           <Dshares name="icons8-twitter.svg"/>
        </div>  
        
        
   </div> 
 
 

 
 
 
 
 </div>  
   
   
   <div>
   
   
   <strong className="pst1_st41">Product Details <br/></strong>

High quality Fresh Orange fruit exporters from South Korea for sale. All citrus trees belong to the single genus Citrus and remain almost entirely interfertile. This includes grapefruits, lemons, limes, oranges, and various other types and hybrids. The fruit of any citrus tree is considered a hesperidium, a kind of modified berry; it is covered by a rind wall.
   </div>
   
   
   {/* */}
   </div>
</div>

 
 <div className="tT_z1">
   
   <div className="ppflex_2"> 
      <div> <img  className="pp_img3_4sz1" alt="" src="/pics/rGFZz-pr9CI.jpg"/> </div>
       <div className="pc_cnt1al131">
         <div> <a className="fTeFLink2" href="/">Who cares?</a> </div>
         <div>   <span className="forAlmostWhite">An empty vessel</span> </div>
        </div>
   </div>
   
 
 </div>



</div>









<h4 className="styleeq2_zq">You may want</h4>

















   








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


<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/><Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>


</div>



	

</div>





</div>
	

<div className="col-3">


<div className="rprflmn">


<div><a href="/">Cart</a></div>
<div><a href="/">Products</a></div>
<div><a href="/">Trending</a></div>
<div><a href="/">Recommended</a></div>
<div><a href="/">Most popular</a></div>
</div>


<div className="mangle21 mangle21T">

<span className="widgeth5">Random Products</span>


{/**/}


   <PRecentProducts />
   <PRecentProducts />
   <PRecentProducts />
   <PRecentProducts />
   <PRecentProducts />
   <PRecentProducts />
   <PRecentProducts />

{/**/}

</div>








</div>
	
	
	




</Main>	
	
	
	</>)
}


