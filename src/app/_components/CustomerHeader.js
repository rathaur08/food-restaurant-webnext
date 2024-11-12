import Link from 'next/link';

const CustomerHeader = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link className="navbar-brand" href="/">
              JetSetGo Customer
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/cart-items">Cart Item{0}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/restaurant">Add restaurant</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default CustomerHeader