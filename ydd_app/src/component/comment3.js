import Commentform2 from "../form/commentform2";
import { useState } from "react";
import { Button } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';

function Comment3({comt,comments2,setComments2}) {
    const [comments3,setComments3] = useState(comt.comment)
    const[isreplying,setIsreplying] = useState(false)
    const oncomment =(ncomment)=>{
        setComments2([...comments2,ncomment]);
    }
    // comments2={comments2} setComments2={setComments2}
    const theme = createTheme({
        palette: {
            secondary: red,
        },
    });
    return(
        <div className="nestcm">
            <div className="commentbody1 ad">

                <div className="cb1 one" >
                    <span>beardedprince |</span> <span>Feb. 1, 2019 at 10 : 39 am</span>
                </div>

                <div className="cb2 two">
                    <h3>{comt.commentbody}</h3>
                </div>
                <div className="cb3 three" >
                    <div>  1 Like(s)</div>
                    <div>0 Dislike(s)</div>
                    <div className="btn ry" onClick={()=>setIsreplying(true)}>reply</div>
                </div>
                {isreplying && <Commentform2 oncomment={oncomment} setIsreplying={setIsreplying}/>}
                <div className="can">
                <ThemeProvider theme={theme}>
                    {isreplying && <Button variant="contained" color="secondary" size="small" className="cancled" onClick={()=>setIsreplying(false)} >cancel</Button>}
                </ThemeProvider>
                </div>
            </div>
        </div>
    )
}
export default Comment3