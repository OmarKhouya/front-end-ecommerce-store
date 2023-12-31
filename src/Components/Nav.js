import { Link } from "react-router-dom"
import styled from "styled-components"

const LiNav = styled.li`
    text-decoration: none;
    color: black;
    // border: solid 0.5px white;
    text-align: center;
    /* border-radius: 10px;
    :hover {
        text-align: center;
        border-radius: 10px;
        background-color: white;
        color: black;
    } */
`

export default function Nav() {

    const navItems = ["smartphones","laptops","home-decoration","groceries","skincare","fragrances"]

    return (
        <nav className="col-lg-3 col-md-3 col-sm-12 mt-4 mb-2">
            <div className="mx-3 p-3 rounded d-flex "  style={{backgroundColor: "#BFEAF5",minHeight: "100%"}}>
                <ul className="navbar-nav nav w-100 flex-column justify-content-around">
                    {
                        navItems.map(
                            nav=><LiNav className="nav-item"><Link className="nav-link" to={`Home/${nav}`}>{nav}</Link></LiNav>
                        )
                    }
                </ul>
            </div>
        </nav>
        
    )
}