import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/editor"}>
                  Editor
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/datatable"}>
                  Data Table
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
              <img src="https://eduport.webestica.com/assets/images/avatar/01.jpg"    alt="" 
              width={40} 
              className="rounded-circle mx-3" />
            {/* <button 
                class="btn btn-outline-success"
                onClick={() => navigate("/create")}
            >
              Insert Product
            </button> */}
            <button 
                class="btn btn-outline-success"
                onClick={() => navigate("/login")}
            >
             Login
            </button>
            <button 
                class="btn btn-outline-success m-3"
                onClick={() => navigate("/login")}
            >
             Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
