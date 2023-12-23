import {ReactComponent as Logo} from "../Logo.svg"
import { Link } from "react-router-dom" 
import { FaSearch } from "react-icons/fa";
import { LuHome } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";
import Nav from "./Nav";
export default function Header() {
    return (
        <header className="row border-bottom shadow sticky-top top-0 bg-body">
            <nav className="navbar navbar-expand-sm d-flex justify-content-between ">
                <div className="navbar-brand">
                    <Logo style={{width: "100px",height: "50px"}}/>
                </div>
                <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navOne">
                    <FaBars />
                </button>
                <div className="collapse navbar-collapse " id="navOne">
                    <ul className="d-flex list-unstyled justify-content-evenly w-100 mb-0">
                        <li className=""><Link to={"/"} className="nav-link text-dark "><LuHome style={{marginBottom: "3px"}} /> Home</Link></li>
                        <li className=""><Link to={"/Cart"} className="nav-link text-dark"><BsCart3 style={{marginBottom: "2px"}} /> Cart</Link></li>
                        <li className=""><Link to={"/Contact"} className="nav-link text-dark"><MdOutlineMessage style={{marginBottom: "-1px"}} /> Contact</Link></li>
                        <li className=""><Link to={"/About"} className="nav-link text-dark"><TbInfoSquareRounded style={{marginBottom: "3px"}} /> About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}