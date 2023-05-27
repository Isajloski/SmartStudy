import './App.css';
import React, {Component} from "react";
import Repository from "../../repository/repository";
import Example from "../Example/Example";
import Material from "../Material/Material";
import CreateMaterial from "../Material/Create/CreateMaterial";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Course from "../Course/Course";
import Popup from "../Popup/Delete/PopupDelete";


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
        <div className="bg-dark">
            <div className="container bg-dark">
                  <Router>
                    <Routes>
                        <Route path="/course/:id" element={<Course />} />
                      <Route path="/example" element={  <Example example = {this.state.example}/>    }> </Route>
                      <Route path="/material" element={  <Material material = {this.state.material} />     }> </Route>
                      <Route path="/material/create" element={  <CreateMaterial material = {this.state.material}/>     }> </Route>
                      <Route path="/popup" element={<Popup />} />
                    </Routes>
                  </Router>
                </div>
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

    loadCourse = () => {
        Repository.fetchCourse()
            .then((data) => {
                this.setState({
                    course: data.data
                })
            });
    }




  componentDidMount() {
    this.loadExample();
    this.loadMaterial();
    this.loadCourse();

  }

}

export default App;