export const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000/">
          Binance
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item mx-2">
              <a class="nav-link active" aria-current="page" href="http://localhost:3000/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                All Coin
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link active"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Abouts Us
              </a>
            </li>

            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle active"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contacts Us
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Tel
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Address
                  </a>
                </li>
                <li></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Email
                  </a>
                </li>
              </ul>
            </li>
            <button class="btn btn-outline-info mx-5" type="submit">
              SingIn
            </button>
            <button class="btn btn-outline-warning mx-5" type="submit">
             SignUp
            </button>

          </ul>
          
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            
          </form>
        </div>
      </div>
    </nav>
  );
};
