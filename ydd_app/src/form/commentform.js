import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import blueviolet from "@mui/material/colors/purple";
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

function Commentform({ oncomment, setIsreplying, setShowreply }) {
  const theme = createTheme({
    palette: {
      primary:{
        main:"#8A2BE2"
      }
    },
   });

  const [commentchange, setCommentchange] = useState("");
  const disable = commentchange.trim().length === 0;

  const change = (e) => {
    setCommentchange(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const newcomment = {
      commentbody: commentchange,
      comment: [],
    };

    oncomment(newcomment);

    setCommentchange("");
    setIsreplying(false);
    setShowreply(true);
  };

  return (
    <form className="form" onSubmit={handlesubmit}>
      <input
        className="in"
        name="commentchange"
        placeholder="what ere your thought"
        value={commentchange}
        onChange={change}
      />
      <ThemeProvider theme={theme}>
        <div className="button">
          <Button
            color="primary"
            disabled={disable}
            className="butn"
            size="medium"
            variant="contained"
            type="submit"
          >
            submit
          </Button>
        </div>
      </ThemeProvider>
    </form>
  );
}

export default Commentform;
