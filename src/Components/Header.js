import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import { Component } from 'react';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state={searchQuery: ''};
  }

  updateSearchVal = (searchQuery) => {
    this.props.updateSearchVal(searchQuery);
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container className="nav-container">
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="100"
              height="60"
              className="d-inline-block align-top"
            />
            <span className="nav-title">Horned Beasts</span>
          </Navbar.Brand>
        </Container >
        <Container className="nav-container">
          <Navbar.Brand>
            <SearchBar updateSearchVal={this.updateSearchVal} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
