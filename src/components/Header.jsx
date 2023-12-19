import { Link } from "react-router-dom"

const Header = () => {

    return(
        <header>
            <div>Recipes</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header