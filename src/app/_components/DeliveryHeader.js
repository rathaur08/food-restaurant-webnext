import Link from "next/link";

const DeliveryHeader = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link className="navbar-brand" href="/">
              JetSetGo Delivery
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
                {/* {
                  user ?
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" href="/my-profile">{user.user_fullname}</Link>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link btn btn-link" href="/" onClick={userLogOut}>Logout</button>
                      </li>
                    </>
                    :
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" href="/user-auth">Login/Signup</Link>
                      </li>
                    </>
                } */}

                <li className="nav-item">
                  <Link className="nav-link" href="/">Add</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default DeliveryHeader