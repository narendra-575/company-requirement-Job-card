import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props.brandname)
    return (
   
    
    <div className="card">
    <div className="top">
        <img src={props.brandlogo} alt="" />
        <button>Save  </button>
   </div>
    <div className='center'>
        <h2>{props.brandname}</h2>
        <h3>{props.role}</h3>
        <p>{props.tag1}</p>
 </div>
   
    <div className='bottom'> 
        <h3>{props.salary}</h3>
        <button>Apply Now</button>
         </div>
        
    
    </div>
  
   
    )
}

export default Card;