import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";




const Todo = props => (
    <tr>
        <td>{}</td>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsibility}</td>
        <td>{props.todo.todo_priority}</td>
        <td>{props.todo.todo_completed}</td>
        <td>
                <Link to={"/edit" +props.todo._id} >Edit </Link>
        </td>
    </tr>
)
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos:[]};
       
    }

    
    componentDidMount(){

            axios.get('http://localhost:4000/todos/')
            .then(res => {
                this.setState({todos: res.data});
            })
                .catch(function (error){
                        console.log(error);
                
            })
    }

    todoList(){
         return this.state.todos.map(function(currentTodo, i){
            
             const todoItems =  <Todo todo={currentTodo} key={i} />;
           
             return todoItems;
         })
    }


    render() {
        return (
            <div className="container">
                    <h3 style={{float:'left'}}>Todos List</h3>

             <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Description</th>
                        <th scope="col">Responsibilty</th>
                        <th scope="col">Priority</th>
                        <th scope="col">States</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.todoList() }
                    
                    </tbody>
             </table>

            </div>
        );
    }
}


export default TodoList;