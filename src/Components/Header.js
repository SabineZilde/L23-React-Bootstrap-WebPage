import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src="https://www.pinclipart.com/picdir/big/580-5808922_fmes-fox-logo-transparent-fox-logo-png-clipart.png" width="35" height="40" alt="logo" />
                    </NavLink>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink exact to="/" className="nav-link px-2 text-secondary">Home</NavLink></li>
                        <li><NavLink to="/article" className="nav-link px-2 text-white">Article</NavLink></li>
                        <li><NavLink to="/tags" className="nav-link px-2 text-white">Tags</NavLink></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;