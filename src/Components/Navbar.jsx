const Navbar = () => {

    return(
        <>
            <header>
            <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand link-light" href="#">AJA Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active link-light" aria-current="page" href="#">Categoria 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active link-light" aria-current="page" href="#">Categoria 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active link-light" aria-current="page" href="#">Categoria 3</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active link-light" aria-current="page" href="#">Categoria 4</a>
        </li>
      </ul>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" classname="bi bi-cart link-light" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      </div>
    </div>
  </div>
</nav>
            </header>
        </>
    )
}

export default Navbar;