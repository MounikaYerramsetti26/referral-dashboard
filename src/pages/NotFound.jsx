import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for doesn't exist.
      </p>

      <Link to="/" className="back-home">
        ← Back to Dashboard
      </Link>

    </div>
  );
};

export default NotFound;