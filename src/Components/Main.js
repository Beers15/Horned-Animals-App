import { Component } from 'react';
import HornedBeast from './HornedBeast';
import BeastRow from './BeastRow';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beasts: [],
      searchQuery: '',
    };
  }

  componentDidMount() {
    let beasts = this.props.animalData.map((beast, index) => {
      return (
        <HornedBeast
          key={index} //Not rearranging items in array
          title={beast.title}
          description={beast.description}
          imgUrl={beast.image_url}
          alt={beast.keyword}
          selectBeast={this.selectBeast}
        />
      );
    });
    this.setState({beasts: beasts});
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.searchQuery !== prevState.searchQuery) {

      if(this.state.searchQuery === '') {
        let matchedBeasts = this.props.animalData.map((beast, index) => {
          return (
            <HornedBeast
              key={index} //Not rearranging items in array
              title={beast.title}
              description={beast.description}
              imgUrl={beast.image_url}
              alt={beast.keyword}
              selectBeast={this.selectBeast}
            />
          );
        });

        this.setState({beasts: matchedBeasts});
        return;
      }

      let beasts = this.props.animalData.filter((beast, index) => this.fuzzy_match(beast.title, this.state.searchQuery));
      let matchedBeasts = beasts.map((beast, index) => {
        return (
          <HornedBeast
            key={index} //Not rearranging items in array
            title={beast.title}
            description={beast.description}
            imgUrl={beast.image_url}
            alt={beast.keyword}
            selectBeast={this.selectBeast}
          />
        );
      });
      this.setState({beasts: matchedBeasts});
    }
  }

  selectBeast = (imgUrl, description, title) => {
    this.props.beastSelected(imgUrl, description, title);
  }

  handleChange = (e) => {
    this.setState({searchQuery: e.target.value});
  }

  fuzzy_match = (str,pattern) => {
    pattern = pattern.toLowerCase();
    str = str.toLowerCase();
    //Author: Roi Dayan, https://stackoverflow.com/questions/23305000/javascript-fuzzy-search-that-makes-sense
    pattern = '.*' + pattern.split('').join('.*') + '.*';
    const re = new RegExp(pattern);
    return re.test(str);
    //--------------------------------------------------------------------------------------------------------
  };

  render() {
    return (
      <Container fluid>
        <Form className="search-form" onSubmit={e => {e.preventDefault();}}>
          <Form.Group className="mb-3" controlId="searchForm">
            <Form.Label>Horned Animal Search</Form.Label>
            <Form.Control
              onChange={this.handleChange} 
              type="text"
              placeholder="Search for a specific beast!"
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Form>

        {this.state.beasts.map((beast, index) => {
          if(index % 4 === 0) {
            return (
              <BeastRow key={index} beasts={this.state.beasts.slice(index, index + 4)} />
            );
          }
          else return null;
        })}
      </Container>
    );
  }
}

export default Main;
