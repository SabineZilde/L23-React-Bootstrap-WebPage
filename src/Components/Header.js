import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [mainMenuCollapsed, setManMenuCollapsed] = useState(true);

    const toggleMainMenu = () => {
        setManMenuCollapsed(!mainMenuCollapsed);
    }

    let mainMenuClasses = 'collapse navbar-collapse';
    if (!mainMenuCollapsed) {
        mainMenuClasses += ' show';
    }

    let mainTogglerButtonClasses = 'navbar-toggler';
    if (!mainMenuCollapsed) {
        mainTogglerButtonClasses += ' collapsed';
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button onClick={toggleMainMenu} className={mainTogglerButtonClasses} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={mainMenuClasses} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/article">Article</NavLink>
                            <NavLink className="nav-link" to="/tags">Tags</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;