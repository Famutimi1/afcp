
import Listingpage from "./listingpage";
import { useSelector } from "react-redux";
import "../style/homepage.scss"

function Homepage () {
    // setBlogcontent([document);

    const hold = useSelector((state)=>state.blogcontent.contentvalue)
    console.log(hold)

    return(
        <div className="homepage" >
            <div className="hm">
                {hold.map((content => <Listingpage key={content.id} content={content}/>))}
            </div>
        </div>
    );
};

export default Homepage;