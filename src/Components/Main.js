import { Component } from 'react';
import HornedBeast from './HornedBeast';
import BeastRow from './BeastRow';
import Container from 'react-bootstrap/Container';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {beasts: []};
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
        />
      );
    });
    this.setState({beasts: beasts});
  }

  render() {
    return (
      <Container fluid>
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
