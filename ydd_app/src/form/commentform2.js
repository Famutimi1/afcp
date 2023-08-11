import { useState } from "react"
import { Button } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';
import red from '@mui/material/colors/red';

function Commentform2({ oncomment, setIsreplying }) {

    const [commentchange, setCommentchange] = useState("")
    const disable = commentchange.trim().length === 0

    const change = (e) => {
        setCommentchange(e.target.value)
    }

    if (commentchange) {

    }

    const theme = createTheme({
        palette: {
            primary:{
                main:"#8A2BE2"
            },
            secondary: red,
        },
    });


    const handlesubmit = (e) => {
        e.preventDefault();
        const newcomment = {
            commentbody: commentchange,
            comment: []
        }

        oncomment(newcomment)

        setCommentchange("")
        setIsreplying(false);
    }

    return (
        <form className="form" onSubmit={handlesubmit}>
            <input className="in" name="commentchange" placeholder="what ere your thought" value={commentchange} onChange={change} />
            <ThemeProvider theme={theme}>
                <Button color="primary" type="submit" disabled={disable} size="small" className="button" variant="contained">submit</Button>
            </ThemeProvider>
            {/* <div className="but">
                <button type="submit" disabled={disable}>submit</button>
            </div> */}
        </form>
    )
}

export default Commentform2