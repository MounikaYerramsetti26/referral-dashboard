import Cookies from "js-cookie";

const Navbar = () => {

  const logout = () => {
    Cookies.remove("jwt_token");
    window.location.replace("/login");
  };

  return (
    <nav className="navbar">

      <h2>Go Business</h2>

      <div>

        <button>Home</button>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </nav>
  );
};

export default Navbar;