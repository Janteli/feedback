
import FeedbackItem from "./FeedbackItem"

function FeedbackList ({feedback})  {
  // console.log(feedback)
  if(!feedback || feedback.length === 0){
    return <p>NO feedback yet</p>
  }
  return <div className="feeback-list">
    {feedback.map((item)=>(
      <FeedbackItem key = {item.id} item = {item}/>
    ))}
  </div>
       
  
}

export default FeedbackList