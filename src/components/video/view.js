import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './main.css'



export function Showcmnt(props) {
	return (<> 
	
	

<div>


<div className="left pdvdrhwrqw">
	<img className="pVidevqwCPHeO31" alt="" src={props.pic}/>		
</div>
	
<div className="left">


   <div className="p_viodflex1">

      <div>
         <Link to="/profile/1" className="nickCVdqzOloerQzk1zq">{props.name}</Link> 
      </div>
      
      <div className="textChat">{props.text}</div>
      
   </div>

     
 
   <div className="chat_zq_5">

      <div> <Link to="/" className="clrWpstofLink">Like</Link> </div>
      <div> <Link to="/" className="clrWpstofLink">Reply</Link> </div>
      <div> <Link to="/" className="clrWpstofLink">Del</Link></div>
      <div> <span className="czRz22z_25"> {props.posted} </span> </div>

   </div>  
     
     
      
</div>
	
   


</div>
	
	
	
	</>)
}


export function Showvdmayknow({name, img, author,view, posted}) {
	return (<>
	

<div>

      <div className="row3z">
            <div className="">
               <img alt="" className="angle_vidmimg2" src={img}/>	
            </div>
               
            <div className="">
               <div><Link to="/" className="VidmayLnk">{name}</Link></div>
               <div><Link to="/" className="czvdpo">{author}</Link></div>
               <div>{view}, {posted}</div>
            </div>

      </div>	

</div>	
	
	
</>)
}




export default function Videoview() {
	
const params = useParams();
  
if (isNaN(params.id)) {

return (<Navigate to="/" replace={true} />)
  
} else {
	return (<Videoviewmain id={Math.abs(params.id)}/>);
}
  
}







export function Videoviewmain({id}) {



/*

var s1 = localStorage.getItem("cnt");


if (!s1) {
   localStorage.setItem("cnt", 0);
}


const [getLoc, setLoc] = useState(s1);



//const fun1 = () => localStorage.setItem("cnt", s1++);

const fun1 = () => { 
   const s3z1 = parseInt(s1)+1;
   localStorage.setItem("cnt", s3z1)
   setLoc(s3z1);
};

<button onClick={fun1}>Test</button>

{getLoc}




*/


	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">


<div className="col-12 mcqwzfrd">
	
	

<div className="VidDetails">

<iframe title="zViedo" src="https://www.youtube.com/embed/5zrMVrYofnQ" style={{width:'100%',height:'450px'}}></iframe>

</div>


<div style={{marginBottom:'10px',paddingLeft:'10px'}}>
<strong >Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》 
</strong>
</div>


<div className="ViddDetail2">
	
   
   
	<div className="ff_lvido1gaping1">
		
		<div className='pdvdlft10'><img className="vidauthorpicszie1" alt="imgofauthor" src="/chat/channels4_profile.jpg"/></div>
		
		<div className='pdvdlft10 slsub1centerization1'>
			<div><Link to="/">Videomaker</Link></div>
			<div>2.49K subscribers</div> 
		</div>
		

	</div>	
   
   
	

   <div className="slsub1centerization1">
      <div><Link className="subscr1eqw" to="/">Subscribe</Link></div>
	</div>




</div>


	
	<div className="vv_reactions_1">
	
	
		<div><Link className="rbtnlp_qz" to="/"><span className="MatiCons51">thumb_up</span></Link></div>
		<div><Link className="rbtnlp_qz" to="/"><span className="MatiCons51">share</span></Link></div>
		<div><Link className="rbtnlp_qz" to="/"><span className="MatiCons51">download</span></Link></div>
		<div><Link className="rbtnlp_qz" to="/"><span className="MatiCons51">bookmarks</span></Link></div>	
		<div><Link className="rbtnlp_qz" to="/"><span className="MatiCons51">flag</span></Link></div>	
		

	</div>	


</div>



<div className="vidDsd123Decs">
Description:  <br/>
<strong>
	Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》 Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》
</strong>
</div>




   <div className="pVideCmeqwnt12">

         <div className="pVideCmeqwnt123">
            <div className="c1"><img alt="" className="pVideCPHO1" src="/pics/HvP81gXfstQ.jpg"/>	</div>
            <div className="c2 s3110"><textarea className="pVideCPHO1txt" placeholder="Enter text"></textarea></div>
            <div className="c2"><button className="pVideCPHO1txt">Post</button></div>
         </div>

   </div>






<div className="Recmnd">



<div className="VidCmnts">





<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>





</div>




		
		
</div>







</div>

	

<div className="col-3">



<div className="VidmNQE">

<div className="t21">Videos you may like </div>


<div className="Angle_vid_mayknow">



<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>


<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>







</div>


<div className="rnmg31">
<a href="/" className="seeingall">See all</a>
</div>


</div>







</div>
	
	
	


</Main>	
	
	
	</>)
}


