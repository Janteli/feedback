import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
// const title = 'Blog Post'
// const body = 'This is my blog post'
// const comments = [
//     {id: 1, text:'comment-1'},
//     {id: 1, text:'comment-2'},
//     {id: 1, text:'comment-3'},
// ]

// const loading = false;
// const showComments = false;

// if(loading) return <h1>Loading..</h1>
const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            {/* <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            {showComments ? 'yes' : 'No'}

            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index)=>(
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div> */}
            {/* <Header text="Hello World"/> */}
            
            <FeedbackList feedback={feedback}/>
        </>
    )
}
// html attribute used in react is called jsx eg class-> className label for ->htmlFor

export default App