import './App.css';
import React, {Component} from "react";
import Repository from "../../repository/repository";
import Example from "../Example/Example";
import Material from "../Material/Material";
import CreateMaterial from "../Material/Create/CreateMaterial";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Course from "../Course/Course";


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      example: [],
      material: [],
      course: []
    }
  }

  render() {
    return (
        <div className="container">
          <Router>
            <Routes>
              <Route path="/example" element={  <Example example = {this.state.example}/>    }> </Route>
              <Route path="/material" element={  <Material material = {this.state.material} />     }> </Route>
              <Route path="/material/create" element={  <CreateMaterial material = {this.state.material}/>     }> </Route>
              <Route path="/course" element={  <Course course = {this.state.course}/>     }> </Route>

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

  loadMaterial = () => {
    Repository.fetchMaterial()
        .then((data) => {
          this.setState({
              material: data.data
          })
        });
  }




  componentDidMount() {
    this.loadExample();
    this.loadMaterial();

  }

}

export default App;