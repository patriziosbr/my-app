import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <header className="App-header">
            <div>
                <Link to="/">Home </Link>
                <Link to="/about">About Us </Link>
                <Link to="/series">Series </Link>
            </div>
        </header>
    )
}
export default Header;