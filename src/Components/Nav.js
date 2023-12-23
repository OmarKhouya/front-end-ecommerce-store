import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className=" nav d-flex px-4 py-3 justify-content-around border-bottom shadow rounded-bottom">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Electronics
                </button>
                <ul className="dropdown-menu">
                    <li><Link to={`Home/smartphones`} className="nav-link dropdown-item">smartphones</Link></li>
                    <li><Link to={`Home/laptops`} className="nav-link dropdown-item">laptops</Link></li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    House 
                </button>
                <ul className="dropdown-menu">
                    <li><Link to={`Home/home-decoration`} className="nav-link dropdown-item">home decoration</Link></li>
                    <li><Link to={`Home/groceries`} className="nav-link dropdown-item">groceries</Link></li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                </button>
                <ul className="dropdown-menu">
                    <li><Link to={`Home/skincare`} className="nav-link dropdown-item">skincare</Link></li>
                    <li><Link to={`Home/fragrances`} className="nav-link dropdown-item">fragrances</Link></li>
                </ul>
            </div>
        </nav>
    )
}