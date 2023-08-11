import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatecontentlist } from "../redux/content";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { redirect } from "react-router-dom";
import "../style/writecontent.scss";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import BlotFormatter from "quill-blot-formatter";
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/blotFormatter", BlotFormatter);
import { ThemeProvider, createTheme } from "@mui/material/styles";
import blueviolet from "@mui/material/colors/purple";
import { dark } from "@mui/material/styles/createPalette";

function WriteContent(params) {
  const [content, setContent] = useState();
  const [contentchange, setContentchange] = useState({});
  const id = useRef();
  const title = useRef();
  const postsummary = useRef();
  const body = useRef();
  const navigate = useNavigate();

  // const disable = contentchange.trim().length === 0
  const theme = createTheme({
    palette: {
      primary: {
        main: "#8A2BE2",
        // dark:"#8A2BE2"
      },
    },
  });

  const dispatch = useDispatch();
  const change = (e) => {
    setContentchange({
      id: id.current.value,
      title: title.current.value,
      postsummary: postsummary.current.value,
      body: body.current.value,
      Date: new Date().toDateString(),
      comment: [],
    });
  };

  const disable = contentchange.id?.trim().length === 0;

  // const  modules  = {
  //     toolbar: [
  //         [{ font: [] }],
  //         [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //         ["bold", "italic", "underline", "strike"],
  //         [{ color: [] }, { background: [] }],
  //         [{ script:  "sub" }, { script:  "super" }],
  //         ["blockquote", "code-block"],
  //         [{ list:  "ordered" }, { list:  "bullet" }],
  //         [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
  //         ["link", "image", "video"],
  //         ["clean"],
  //     ],
  //     imageResize: {
  //         // displaySize: true
  //         // parchment: Quill.import('parchment'),
  //         // modules: ['Resize', 'DisplaySize']
  //     }
  // };

  var modules = {
    toolbar: [
      [{ header: "1" }, { header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["blockquote", "code-block"],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
      maxwidth: "500px",
      maxheight: "500px",
    },
    blotFormatter: {},
  };

  // const formats = [
  //     'font','size',
  //     'bold','italic','underline','strike',
  //     'color','background',
  //     'script',
  //     'header','blockquote','code-block',
  //     'indent','list',
  //     'direction','align',
  //     'link','image','video','formula',
  // ]

  // const updatedoc = ()=>{
  //     dispatch(updatecontentlist());
  // }

  const handlesubmit = (e) => {
    e.preventDefault();
    setContent(contentchange);
    console.log(content);
    dispatch(updatecontentlist(contentchange));
    setContentchange("");
    navigate("/");
  };

  let note;

  useEffect(() => {
    note = content;
    console.log(note);
  }, [content]);
  {
    /* className="udf" */
  }
  return (
    <div className="fc">
      <div className="df">What do we have totay</div>
      <form className="c-form udf" onSubmit={handlesubmit}>
        <div className="cli">
          <label>content ID</label>
          <input
            className="cc"
            name="id"
            placeholder="ID"
            ref={id}
            onChange={change}
          />
        </div>
        <div className="cli">
          <label> Post Title</label>
          <input
            className="cc"
            name="title"
            placeholder="title"
            ref={title}
            onChange={change}
          />
        </div>
        <div className="cli">
          <label> Post Summary</label>
          <input
            className="cc"
            name="postsummary"
            placeholder="title"
            ref={postsummary}
            onChange={change}
          />
        </div>
        <h5>write the body of the content and format it the way you want</h5>

        <ReactQuill
          className="quill"
          theme="snow"
          onChange={change}
          ref={body}
          modules={modules}
          placeholder="text........................"
          // formats={formats}
        />

        <ThemeProvider theme={theme}>
          <div className="button">
            <Button
              color="primary"
              disabled={disable}
              className="butn"
              size="large"
              variant="contained"
              type="submit"
            >
              submit
            </Button>
          </div>
        </ThemeProvider>
      </form>
    </div>
  );
}

export default WriteContent;
