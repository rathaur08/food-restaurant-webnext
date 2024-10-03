import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container">
            <Link class="navbar-brand" href="/">JetSetGO</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/profile">Profile</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/restaurant">Login/Sinup</Link>
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