import { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import animalData from './data';
//import SelectedBeast from './SelectedBeast';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: false,
      imgUrl: null,
      description: null,
    };
  }

  toggleModal = (e) => {
    this.setState({
      displayModal: true,
      imgUrl: e.target.imgUrl,
      description: e.target.target.description,
    });

    console.log(e.target.imgUrl + e.target.target.description);
  }

  beastSelected = (imgUrl, description) => {

  }

  render() {
    return (
      <>
        <Header />
        <Main
          animalData={animalData}

        />
        <Footer />
      </>
    );
  }
}

export default App;
