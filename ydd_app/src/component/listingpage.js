import {  useNavigate } from "react-router-dom";

const Listingpage = ({content})=>{
    const navigate = useNavigate()
    const commentnum= content.comment.length;
    console.log(commentnum)
    return(
        <div className="listc" onClick={()=> navigate(`/detailpage/${content.id}/`)} >
            <div className="l1">
                <div className="img">
                    <img src="download1.jpg" alt="wert"/>
                </div>
                <div className=" title">
                    <div className="ti">{content.title}</div>
                    <div className="ud"><span className="s1" >By Olumyco | Jan. 31, 2019 at 03 : 08 am</span></div>

                </div>
            </div>
            <div className="l2">
                <p>{content.postsummary}</p>
            </div>
            <div className="l3">
                    <div>Views: {content.view}</div>
                    <div>Likes: {content.like}</div>
                    <div>Comments: {commentnum}</div>
            </div>
        </div>
    )
}

export default Listingpage;