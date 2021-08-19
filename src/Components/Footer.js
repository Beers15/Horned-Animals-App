import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Navbar.Brand href="#home">
        <Navbar.Text>Author: Alexander Beers</Navbar.Text>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
