import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Recipes</Link>
                    </li>
                    <li>
                        Categories
                    </li>
                    <li>
                        Cuisine
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header