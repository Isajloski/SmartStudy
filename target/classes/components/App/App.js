import './App.css';
import React, {Component} from "react";
import Repository from "../../repository/repository";
import Example from "../Example/Example";
import {BrowserRouter as Router, Redirect, Routes , Route} from 'react-router-dom';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      example: []
    }
  }

  render() {
    return (
        <div className="container">
          <Router>
            <Routes>
              <Route path="/example" element={  <Example example = {this.state.example}/>    }> </Route>
            </Routes>
          </Router>
        </div>
    );
  }

  loadExample = () => {
    Repository.fetchExample()
      .then((data) => {
        this.setState({
          example: data.data
        })
      });
  }


  componentDidMount() {
    this.loadExample();
  }

}

export default App;