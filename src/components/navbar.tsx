import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

function NavBar() {
  return (
    <Navbar className="navbar-light navbar-expand" expand="lg">
      <Container fluid className="new flex-column" style={{width:"100%"}}>
        <Navbar.Brand href="#home" className="brand text-center" style={{fontSize:"2em"}}><div className="gText">Морские сражения</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100 d-flex justify-content-center ">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="li mx-3" style={{flex:"1"}}><div className="gText">Главная</div></Nav.Link>
            <Nav.Link href="/bmstu-frontend/seabattles" className="li mx-3" style={{flex:"1"}}><div className="gText">Архив</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
  );
}

export default NavBar;