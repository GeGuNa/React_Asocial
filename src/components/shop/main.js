import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



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
                     <Link to="/shop/product/1"><b>{props.name}</b></Link>
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
            <button className="button b_btn1"> {props.price} </button>
         </div>
      
      </div>
         
       </div>  
         
         
         
         
		</div>
	
	
	
	</>)
}




export function PRecentProducts(){
   
   return (<>
   
   
   <div className="widget53 mr_angl_top15 forwRespoShop">

<div> <img src="/shop/4.png" alt="" className="cimg2"/> </div>

<div>
               <div className="widget5341z"> 
  
                     <div>  <Link to="/shop/product/1" className="wudg17px">Product Title</Link> </div>
                     <div> 
                           <i className="fa-solid fa-star clrforstars"></i>
                           <i className="fa-solid fa-star clrforstars"></i>
                           <i className="fa-solid fa-star clrforstars"></i>
                           <i className="fa-solid fa-star clrforstars"></i>
                           <i className="fa-solid fa-star clrforstars"></i>
                     </div>
                     <div className="widgetprice"> $200 </div>
   
               </div>

</div>
</div>
   
   
   </>)
}


export function ShowTopPRoducts(props){
   
   return (<>
   <div className="col-sm-4">
   
   
      <div className="ShopLF1flex">
      
   <img alt="" className="ShopTopp_img" src={props.img}/>
   
   
   <div> 
         <div>  <Link to="" className="ellipsis">{props.name}</Link> </div>
         <div>90$ </div>
   </div>
  
   
   
   </div>
   
   
</div>
</>)


}


export default function Shops() {
   
   
const  Pr1 = [
{name: 'Product 1 Spring Red Dress',img:'/shop/1.png'},
{name: 'Product 2 Spring Red Dress',img:'/shop/2.png'},
{name: 'Product 3 Spring Red Dress',img:'/shop/3.png'},
{name: 'Product 4 Spring Red Dress',img:'/shop/4.png'},
{name: 'Product 5 Spring Red Dress',img:'/shop/1.png'},
{name: 'Product 6 Spring Red Dress',img:'/shop/2.png'},
{name: 'Product 7 Spring Red Dress',img:'/shop/3.png'},
{name: 'Product 8 Spring Red Dress',img:'/shop/4.png'},
{name: 'Product 9 Spring Red Dress',img:'/shop/1.png'},
];


   
   
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">



<div className="PbannerBox"> 
   <img alt="" src="/components/template-1599667_1280.png"/>
   <h3>Marketplace</h3>  
</div>




<a className="pfrovid1 mr_tp_q15 pfzrovid11z" href="/">
<span className="material-symbols-outlined vidspn2">add</span> Post new
</a>





<div className="pBlueWw2 pBlueWw231z">
	
   <div className="lLTl21zblt active"> 
      <a href="/">Products</a>
   </div>	

   <div className="lLTl21zblt "> 
      <a href="/">Brands</a>
   </div> 


   <div className="lLTl21zblt">  
      <a href="/">Mine</a>
   </div>

	
</div>
















   








<div className="col-12">
	
   
   
{/**/}   
   
   
 <div className="col-12 Shopbkc1">
	



   <div className="Shop_flexing1">
      <div className="s3z"> Top selling products </div>
      <div className=""> <Link to="" className="s3z3z">  Show All</Link> </div>
   </div>


<div className="row dpngforShopTop">
   {Pr1.map((d,v)=> <ShowTopPRoducts name={d.name} img={d.img} />)}
</div>


</div>  
   
   
   
{/**/}





<div className="col-12 Shopbkc1">
	



<div className="Shop_flexing1">
   <div className="s3z"> Featured products </div>
   <div className=""> <Link to="" className="s3z3z">  All</Link> </div>
</div>



<div className="Fr_displaying_friends">


<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/2.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/3.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/4.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>

</div>


	

</div>




{/**/}




<h5 className="c_h5">Trending products</h5>

<div className="Fr_displaying_friends">


<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>
<Product img={'/shop/1.png'} name={'Spring Red Dress'} price={"15.00$"} heart={"145"} desc={'A beautiful dress for you best evenings and important dates'}/>


</div>



<div className="">
   <Link to="" className="More_bt1z">See more</Link>
</div>

	

</div>





</div>
	

<div className="col-3">


<div className="rprflmn">
   <div><a href="/">Recommended</a></div>
   <div><a href="/">Most popular</a></div>
   <div><a href="/">Search</a></div>
   <div><a href="/">Privacy</a></div>
   <div><a href="/">Conditions</a></div>
</div>

<div className="mangle21 mangle21T">

<span className="widgeth5">Recent Product</span>


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


