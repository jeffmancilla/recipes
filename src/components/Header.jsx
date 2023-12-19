import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <input type="search" placeholder="search"></input>
            </div>
        </header>
    )
}

export default Header