import React, { Component } from "react";
import Repository from "../../repository/repository";
import Example from "../Example/Example";
import Material from "../Material/Material";
import CreateMaterial from "../Material/Create/CreateMaterial";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Course from "../Course/Course";
import Popup from "../Popup/Delete/PopupDelete";
import Login from "../Login/Login";
import RegistrationForm from "../Registration/registrationForm";
import Quiz from "../Quiz/Quiz";
import './App.css';
import Question from "../Question/Question"; // Import the Bootstrap CSS
import Navbar from '../Nabar/Navbar';
import UserPage from '../UserPage/UserPage'
class App extends Component {
import Grade from "../Grade/Grade";


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      example: [],
      material: [],
      course: [],
      user: undefined
    }
  }

  getUserFromLogin = (user) => {
    this.setState({ user })
  }


  render() {
    return (
        // <div className="bg-dark">
        //     <div className="container bg-dark">
        //           <Router>
        //             <Routes>
        //                 <Route path={"/register"} element={<RegistrationForm/>}></Route>
        //                 <Route path="/login" element={<Login />} />
        //                 <Route path="/course/:id" element={<Course />} />
        //                 <Route path="/example" element={  <Example example = {this.state.example}/>    }> </Route>
        //                 <Route path="/material" element={  <Material material = {this.state.material} />     }> </Route>
        //                 <Route path="/material/create" element={  <CreateMaterial material = {this.state.material}/>     }> </Route>
        //                 <Route path="/popup" element={<Popup />} />
        //                 <Route path="/material/create" element={  <CreateMaterial material = {this.state.material}/>     }> </Route>
        //                 <Route path="/course/:course_id/quiz/:quiz_id" element={  <Quiz />}/>
        //                 <Route path="/user/:id" element={  <Course/>     }> </Route>
        //                 <Route path="/course/:course_id/grade" element={ <Grade/>} />
        //                 <Route path="/course/:course_id/quiz/:quiz_id/question/:question_id" element={  <Question />}/>
        //                 <Route path="/user/:id/grades" element={  <Grades />}/>
        //
        //             </Routes>
        //           </Router>
      <div className="bg-dark">
        <Router>
          <Navbar />
          <div className="container bg-dark">
            <Routes>
              <Route path={"/register"} element={<RegistrationForm />}></Route>
              <Route path="/login" element={<Login getUser={this.getUserFromLogin} />} />
              <Route path="/course/:id" element={<Course />} />
              <Route path="/example" element={<Example example={this.state.example} />}> </Route>
              <Route path="/material" element={<Material material={this.state.material} />}> </Route>
              <Route path="/material/create" element={<CreateMaterial material={this.state.material} />}> </Route>
              <Route path="/popup" element={<Popup />} />
              <Route path="/material/create" element={<CreateMaterial material={this.state.material} />}> </Route>
              <Route path="/course/:course_id/quiz/:quiz_id" element={<Quiz />} />
              <Route path="/user/:id" element={<Course />}> </Route>
              <Route path="/userpage" element={<UserPage user={this.state.user} />} />
              <Route path="/course/:course_id/quiz/:quiz_id/question/:question_id" element={<Question />} />
            </Routes>


          </div>
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

  loadCourse = () => {
    Repository.fetchCourse()
      .then((data) => {
        this.setState({
          course: data.data
        })
      });
  }




  componentDidMount () {
    this.loadExample();
    this.loadMaterial();
    this.loadCourse();

  }

}

export default App;