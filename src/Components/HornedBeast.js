import { Component } from 'react';

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
      <div>
        <h2>{this.props.title}</h2>
        <img
          onClick={this.handleImgClick}
          src={this.props.imgUrl}
          alt={this.props.alt}
          title={this.props.title}
        />
        <br />
        <figure className="fav-figure">
          <img
            src="heart.png"
            alt={this.props.alt}
            title={this.props.title}
            className="fav-heart"
          />
          <figcaption className="fav-times-text">{this.state.timesFavorited}</figcaption>
        </figure>
        <span>{this.props.description}</span>
      </div>
    );
  }

}

export default HornedBeast;
