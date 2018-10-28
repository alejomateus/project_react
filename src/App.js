import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import Tasktemp_form from './components/Tasktemp_form';
import './App.css';
import { task_temp } from './task_temp.json';
class App extends Component {

  constructor(){
    super();
    this.state={
      task_temp
    }
    this.handleAddtoTask = this.handleAddtoTask.bind(this);
  }
  handleAddtoTask(task){
    this.setState ({
      task_temp: [...this.state.task_temp, task]
    });
  }
  removeTask(index){
    this.setState({
      task_temp : this.state.task_temp.filter((e,i)=>{
        return i !== index;
      })
    })
  }
  render() {
    const tasks =this.state.task_temp.map((task,i)=>{
      return(
        <div className="col-md-4 col-xs-8 mt-4">
          
          <div  className="card">
            {task.priority == "hard" &&
              <div className="card-header alert-danger">
                <h3>{task.title}</h3>
              </div>
            }
            {task.priority == "medium" &&
              <div className="card-header alert-warning">
                <h3>{task.title}</h3>
              </div>
            }
            {task.priority == "low" &&
              <div className="card-header alert-success">
                <h3>{task.title}</h3>
              </div>
            }
            <div className="card-body">
              <p>{task.description}</p>
              <p>
                <mark>{task.responsible}</mark>
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTask.bind(this,i)}> Delete</button>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div className="App">
        <Navigation title="Tasks" counter={this.state.task_temp.length}/>     
        <img src={logo} className="App-logo" alt="logo" />
        <Tasktemp_form onAddtoTask={this.handleAddtoTask}/>
        <div className="container">
          <div className="row mt-4">
            { tasks }
          </div>
        </div>  
      </div>
      )
    }
  }


  // return (
    //   <div className="App">
    //     <header className="App-header">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //       <a className="navbar-brand" href="#">Navbar</a>
    //       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //         <ul className="navbar-nav">
    //           <li className="nav-item active">
    //             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Features</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Pricing</a>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //               Dropdown link
    //             </a>
    //             <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //               <a className="dropdown-item" href="#">Action</a>
    //               <a className="dropdown-item" href="#">Another action</a>
    //               <a className="dropdown-item" href="#">Something else here</a>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //     </header>
    //   </div>
    // );

    export default App;
