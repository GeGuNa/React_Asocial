import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './Private.css'


export function Shwimg({pic, alt}){
	return <div style={{ paddingRight: '10px', marginBottom:'3px'}}><img alt={alt} src={pic}/></div>
}





export function Showrecomm(props) {
	return (<> 
	
	

		<div className="card3zqqq1">
			<div><img alt="" src={props.img} className="ww_dg1porgr31"/></div>
		
			<div className="MBlog_pd" id="blogdistanceBetween">	
         
				<div><Link to="/page/group/1/" className="pfiseblo1fsz1g1">{props.name}</Link></div>
            
				<div className="MblogDetails">
               <span className="fs_p1z">{props.desc}</span>
            </div>
            
            
			</div>
		</div>
	
	
	
	</>)
}



	

export function SdescGroups(props) {
	return (<> 
	
	

		<div className="c_usr_qw1">
      
      
			<div className="pr_anlg_rel">
         <img alt="" src={props.img} className="c_usr_img1"/>
         <div className="pr_anlg_rel_abs">
            2 days ago
         </div>
         </div>
		
      

      
        
         <div className="pdnvof1zqwe"> 
         
               <div className="boxCategory">CODING</div>
         
         
            <div className="boxTitle2"> <Link to="/page/group/1/">Commnity of coders</Link> </div> 
         </div>
         
      
      <div className="pbdrqz_1qwe"> </div>
      
      <div className="MBlosg_p4d4">
      
      
		

              <div className="SpcForGroups">
              
                  <div>
                     <a href="/" className="grlnkz22zclrq3">
                        {/* {props.name} */}
                              5.7k members
                     </a>
                  </div>
                  
                  <div className="spfForGroup3img1">
                     <img alt="" className="spfForGroupimg1" src="/user/dan.jpg"/>
                     <img alt="" className="spfForGroupimg1" src="/user/dan.jpg"/>
                     <img alt="" className="spfForGroupimg1" src="/user/dan.jpg"/>
                  </div>
                  
                </div>
            
			
         
         
       </div>  
         
         
         
         
		</div>
	
	
	
	</>)
}



export function Showfrndofps({pic, alt, name}){
	return (<> 
	
	
<div>

<div>

<div><img src={pic} alt={alt} className="cProfFrRightListFlxcolPHtround"/>	</div> 

<div className="CprqweCLrqcnt"><Link className="CprqweCLrq" to="/">{name}</Link></div>

</div>

</div>

	
</>)
}



export default function Groups() {

return (<>
  
  
<Main>






<div className="col-9 cmnt2z1qwer">


<div className="PbannerBox mb151z">
   <img src="/components/947455e68c4fafcdd6032b6e3dd2dcdf.jpg"/>
   <h3>Groups</h3>
</div>



<div className="spaceBetweeNfl1">
<div><h5>Groups</h5></div>
<div><a href="/" className="button2">New Group</a></div>
</div>





<div className="member_fl3">

   <div>
      <textarea placeholder="Search Groups"></textarea>
   </div>
   
<div>

   <div className="diz2">
      
      <select>
         <option value="">Active community</option>
         <option value="">Inactive community</option>
         <option value="">Doesn't matter</option>
      </select>

      <select>
         <option value="">Governed by men</option>
         <option value="">Governed by women</option>
         <option value="">Doesn't matter</option>
      </select>


      <button>Search</button>

   </div>
   
</div>

</div>




<div className="p_groumn1">
	
	

	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>
	<SdescGroups img={'/blogs/blog-post-thumb-1.jpg'} name={'John koberidze'} mutual={'1 mutual friend'}/>

  </div>






















</div>
	

<div className="col-3">


<div className="rprflmn">
   <div className="act_ive"><a href="/">My communities</a></div>
   <div><a href="/">Liked</a></div>
   <div><a href="/">Search</a></div>
   <div><a href="/">My Comments</a></div>
   <div><a href="/">Popular Groups</a></div>
</div>




<div className="ndsg4">

<h5 className="cazrdbodzy">Recommended communities</h5>

      <div className="card1">

       	
      <Showrecomm img={'/blogs/blog-post-thumb-1.jpg'} name={'Coding blog'} desc={'Lorem ipsum dolor'}/>
      <Showrecomm img={'/blogs/blog-post-thumb-1.jpg'} name={'For programmers'} desc={'Lorem ipsum dolor'}/>
      <Showrecomm img={'/blogs/blog-post-thumb-1.jpg'} name={'For programmers'} desc={'Lorem ipsum dolor'}/>
      <Showrecomm img={'/blogs/blog-post-thumb-1.jpg'} name={'For programmers'} desc={'Lorem ipsum dolor'}/>
      <Showrecomm img={'/blogs/blog-post-thumb-1.jpg'} name={'For programmers'} desc={'Lorem ipsum dolor'}/>
      <Showrecomm img={'/blogs/blog-post-thumb-1.jpg'} name={'For programmers'} desc={'Lorem ipsum dolor'}/>
      <Showrecomm img={'/blogs/blog-post-thumb-1.jpg'} name={'For programmers'} desc={'Lorem ipsum dolor'}/>


	
	
	
	
	<div className="rnmg31"><a href="/" className="sqeeinqgallp3zblog">See all</a></div>


   </div>



</div>



</div>










	</Main>
    
    </>
    
    
  );
  
}




