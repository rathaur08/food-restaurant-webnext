import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link className="navbar-brand" href="/">JetSetGO</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/restaurant">Login/Sinup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default RestaurantHeader;