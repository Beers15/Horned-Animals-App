import { Component } from 'react';
import HornedBeast from './HornedBeast';
import BeastRow from './BeastRow';
import Container from 'react-bootstrap/Container';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beasts: [],
    };
  }

  componentDidMount() {
    let beasts = this.createBeasts(this.props.animalData);
    this.setState({beasts: beasts});
  }

  componentDidUpdate(prevProps, prevState) {
    let matchedBeasts;
    if(this.props.searchQuery !== prevProps.searchQuery || this.props.hornCount !== prevProps.hornCount) {
      if(this.props.searchQuery === '') {
        matchedBeasts = this.createBeasts(this.props.animalData);
      } else {
        let beasts = this.props.animalData.filter((beast, index) => this.fuzzy_match(beast.title, this.props.searchQuery));
        matchedBeasts = this.createBeasts(beasts);
      }
      this.setState({beasts: matchedBeasts});
    }
  }

  selectBeast = (imgUrl, description, title) => {
    this.props.beastSelected(imgUrl, description, title);
  }

  createBeasts = (beasts) => {
    if(this.props.hornCount > 0) {
      beasts = beasts.filter(beast => beast.horns === parseInt(this.props.hornCount));
    }

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
      <Container>
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
