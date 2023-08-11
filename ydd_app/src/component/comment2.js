import { useState } from "react"
import Commentform from "../form/commentform"
import Comment3 from "./comment3"
import "../style/commentbody.scss"
import { Button } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';
import red from '@mui/material/colors/red';

function Comment2({ comt }) {
    const [isreplying, setIsreplying] = useState(false)
    const [comments2, setComments2] = useState(comt.comment)
    const [showreply, setShowreply] = useState(false)
    const oncomment = (ncomment) => {
        setComments2([...comments2, ncomment]);
    }

    const theme = createTheme({
        palette: {
            primary: purple,
            secondary: red,
        },
    });


    const handlereplyshow = () => {
        setShowreply(prev => !prev)
    }
    // comments2={comments2} setComments2={setComments2}
    return (
        <div className="commentbody1 bs">
            <div className="cb1" >
                <span>beardedprince |</span> <span>Feb. 1, 2019 at 10 : 39 am</span>
            </div>
            <div className="cb2" >
                <h3>{comt.commentbody}</h3>
            </div>
            <div className="cb3" >
                <div>  1 Like(s)</div>
                <div>0 Dislike(s)</div>
                <div className="btn ry" >{!showreply ? <span onClick={handlereplyshow} class="material-symbols-outlined">expand_more</span>
                    : <span class="material-symbols-outlined" onClick={handlereplyshow}>expand_less</span>}
                    <span className="reply" onClick={() => setIsreplying(true)}>reply</span>
                </div>
            </div>
            <div>
                {isreplying && <Commentform oncomment={oncomment} setIsreplying={setIsreplying} setShowreply={setShowreply} />}
                <ThemeProvider theme={theme}>
                    {isreplying && <Button color="secondary" className="cancle" size="medium" variant="contained" onClick={() => setIsreplying(false)} >cancel</Button>}
                </ThemeProvider>
            </div>
            <div>
                {comments2.map((comtS) => (
                    <>
                        {showreply ? <Comment3 key={comt.id} comt={comtS} comments2={comments2} setComments2={setComments2} /> : null}
                    </>
                ))}
            </div>
        </div>
    )
}
export default Comment2