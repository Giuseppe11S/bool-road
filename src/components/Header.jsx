import { Link } from "react-router-dom";

export default function Header() {
  // NAVBAR
  return (
    <>
      <div className="container-header">
        <nav className="cnt-nav">
          <Link to="/">
            <h1>Bool-Road</h1>
          </Link>
        </nav>
      </div>
    </>
  )
}