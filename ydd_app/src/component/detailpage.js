// import { useState } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import Comment from "./comment";
import "../style/detailpage.scss"
import { useState } from "react";

function Detailpage() {
    // const [comentarr, setComentarr] = useState([indcontent.comment]) 
    const { id } = useParams()
    const [counts,setCounts] = useState('0')

    const hold = useSelector((state) => state.blogcontent.contentvalue);
    const count = (sample)=>{
        setCounts(sample.length)
        console.log(counts)
    }


    const indcontent = hold.filter(content => content.id === id);
    // console.log(indcontent);
    // const commentnum= content.comment.length;
    // console.log(commentnum)


    return (
        <div className="dc">
            <div className="details" >
                {indcontent.map((cont) => (
                    <section key={cont.id}>
                        <div className="nd">
                            <h1 className="">{cont.title}</h1>
                            <div className="usid"><span className="" >by Olumyco | Jan. 31, 2019 at 03 : 08 am</span></div>
                        </div>
                        <div className="dbody">
                            <div className="cd">
                                <div dangerouslySetInnerHTML={{__html:cont.body}}/> 
                            </div>
                        </div>
                        <div className="lc">
                            <div>7 Likes</div>
                            <div>{counts} Comments</div>
                        </div>
                        <div className="lsc">
                            <div> Like</div>
                            <div> Share</div>
                            <div> Comment</div>
                        </div>
                        <div className="cs bs">
                            <Comment cont={cont} key={cont.id} count={count} />
                        </div>

                    </section>
                ))}
            </div>
        </div>
    )
}

export default Detailpage