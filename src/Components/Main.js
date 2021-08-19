import { Component } from 'react';
import HornedBeast from './HornedBeast';
import BeastRow from './BeastRow';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beasts: [],
      searchQuery: '',
    };
  }

  componentDidMount() {
    let beasts = this.createBeasts(this.props.animalData);
    this.setState({beasts: beasts});
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.searchQuery !== prevState.searchQuery) {
      if(this.state.searchQuery === '') {
        let matchedBeasts = this.createBeasts(this.props.animalData);

        this.setState({beasts: matchedBeasts});
      } else {
        let beasts = this.props.animalData.filter((beast, index) => this.fuzzy_match(beast.title, this.state.searchQuery));
        let matchedBeasts = this.createBeasts(beasts);

        this.setState({beasts: matchedBeasts});
      }
    }
  }

  updateSearchVal = (searchQuery) => {
    this.setState({searchQuery: searchQuery});
  }

  selectBeast = (imgUrl, description, title) => {
    this.props.beastSelected(imgUrl, description, title);
  }

  createBeasts = (beasts) => {
    return beasts.map((beast, index) => {
      return (
        <HornedBeast
          key={beast.image_url}
          title={beast.title}
          description={beast.description}
          imgUrl={beast.image_url}
          alt={beast.keyword}
          selectBeast={this.selectBeast}
        />
      );
    });
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
        <SearchBar updateSearchVal={this.updateSearchVal} />
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
