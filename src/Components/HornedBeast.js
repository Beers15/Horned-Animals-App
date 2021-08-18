import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class HornedBeast extends Component {
  constructor(props) {
    super(props);

    this.state = {timesFavorited: 0};
  }

  handleImgClick = () => {
    this.setState({timesFavorited: this.state.timesFavorited + 1});
    console.log(this.state.timesFavorited);
  }

  render() {
    return (
      <Container>
        <Row>
          <h2>{this.props.title}</h2>
          <Image
            onClick={this.handleImgClick}
            src={this.props.imgUrl}
            alt={this.props.alt}
            title={this.props.title}
          />
        </Row>
        <Row className="beast-info-row">
          <Col md="auto">
            <figure className="fav-figure">
              <Image
                src="heart.png"
                alt={this.props.alt}
                title={this.props.title}
                className="fav-heart"
                fluid
              />
              <figcaption className="fav-times-text">{this.state.timesFavorited}</figcaption>
            </figure>
          </Col>
          <Col>
            <p className="description-txt">{this.props.description}</p>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default HornedBeast;
