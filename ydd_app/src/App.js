import Homepage from "./component/homepage";
import Detailpage from "./component/detailpage";
// import document from "./component/document";
// import { useState} from "react";
import { useEffect,useState } from "react";
import "./App.css"
import WriteContent from "./form/writecontent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
// import "./Style/app.sass";
function App() {
  // const [blogcontent,setBlogcontent] = useState(document);
  const [scrollPosition, setScrollPosition] = useState(0);

//   {comments2.map((comtS)=>(
//     <Comment3 key={comt.id} comt={comtS} comments2={comments2} setComments2={setComments2} showreply={showreply}/>
// ))} 

// const [showreply,setShowreply] = useState(false)


  useEffect(()=>{
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(scrollPosition)
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[scrollPosition])

  return (
    <Router>
      <div className="app">
        <div className ={`nav ${scrollPosition > 130 ? "sticky" : ''}`}>
          <div className="nav1">Logo</div>
          <div className="nav2">
            <div><Link to={"/writeContent"}>Write Content</Link></div>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/detailpage/:id" element={<Detailpage/>}/>
          <Route path="/writeContent" element={<WriteContent/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
