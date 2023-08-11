import { useState } from "react"
import Commentform from "../form/commentform"
import Comment2 from "./comment2"
import "../style/commentbody.scss"

function Comment({cont,count}) {
    const [comments,setComments] = useState(cont.comment)
    const[isreplying,setIsreplying] = useState(false)
    const [showreply, setShowreply] = useState(false)
    const oncomment =(ncomment)=>{
        setComments([...comments,ncomment]);
        count(comments);
    }
    return(
        <>
            <div className="ch">
                <span>Comments</span>
            </div>
            <Commentform oncomment={oncomment} setIsreplying={setIsreplying} setShowreply={setShowreply}/>
            <div className="ccc">
                {comments.map((comt)=>(
                    <Comment2 comt={comt} key={cont.id}/>
                ))}
            </div>
        </>
    )
}

export default Comment