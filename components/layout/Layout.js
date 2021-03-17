import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

function Layout({ children }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="nav" className="mr-auto">
            <Link className="nav__link" href="/">
              Home
            </Link>
            <Link className="nav__link" href="/results">
              Results
            </Link>
            <Link className="nav__link" href="/about-us">
              About Us
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container-fluid">{children}</div>
    </>
  );
}

export default Layout;
