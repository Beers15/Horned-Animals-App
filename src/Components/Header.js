import { Component } from 'react';
import logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''};
  }

  updateSearchVal = (searchQuery) => {
    this.props.updateSearchVal(searchQuery);
  }

  handleChange = (e) => {
    this.props.selectNumHorns(e.target.value);
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
        <Container className="drop-down">
          <Navbar.Brand>
            <Form>
              <Form.Select onChange={this.handleChange}>
                <option value="-1">Number of Horns</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">One-Hundred</option>
              </Form.Select>
            </Form>
          </Navbar.Brand>
        </Container>
        <Container className="search-bar">
          <Navbar.Brand>
            <SearchBar updateSearchVal={this.updateSearchVal} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
