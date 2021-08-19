import { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import animalData from './data';
import SelectedBeast from './Components/SelectedBeast';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: false,
      imgUrl: null,
      description: null,
      title: null,
      searchQuery: '',
    };
  }

  beastSelected = ({imgUrl, description, title}) => {
    this.setState({
      displayModal: true,
      imgUrl: imgUrl,
      description: description,
      title: title,
    });
  }

  handleClose = () => {
    this.setState({displayModal: false});
  }

  updateSearchVal = (searchQuery) => {
    this.setState({searchQuery: searchQuery});
  }

  render() {
    return (
      <div>
        <Header updateSearchVal={this.updateSearchVal} />
        <Main
          animalData={animalData}
          beastSelected={this.beastSelected}
          searchQuery={this.state.searchQuery}
        />
        <Footer />

        <SelectedBeast
          show={this.state.displayModal}
          imgUrl={this.state.imgUrl}
          description={this.state.description}
          title={this.state.title}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;
