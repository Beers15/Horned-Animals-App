import { Component } from 'react';
import heart from '../assets/heart.png';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component {
  constructor(props) {
    super(props);

    this.state = {timesFavorited: 0};
  }

  handleImgClick = () => {
    this.setState({timesFavorited: this.state.timesFavorited + 1});
    this.props.selectBeast(this.props);
  }

  render() {
    return (
      <Card className="dark" border="dark" bg="dark" text="white">
        <Card.Img
          className="card-image"
          onClick={this.handleImgClick}
          alt={this.props.alt}
          variant="top"
          src={this.props.imgUrl}
          title={this.props.title}
        />
        <Card.Body>
          <img
            src={heart}
            className="fav-heart"
            alt="heart"
            onClick={this.handleImgClick}
          />
          <Card.Text className="fav-times-text">{this.state.timesFavorited}</Card.Text>
          <Card.Title style={{display:'inline'}}>{this.props.title}</Card.Title>
          <Card.Text className="m-2">{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

}

export default HornedBeast;
