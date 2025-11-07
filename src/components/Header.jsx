import { Link } from "react-router-dom";

export default function Header() {
  // NAVBAR
  return (
    <>
      <div>
        <nav className="cnt-nav">
          <Link to="/">
           Bool-Road
          </Link>
        </nav>
      </div>
    </>
    )
}