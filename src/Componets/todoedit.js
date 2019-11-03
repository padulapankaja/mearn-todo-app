import React, { Component } from 'react';
import axios from "axios";



class TodoEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_description : '' ,
            todo_responsible : '',
            todo_priority : '',
            todo_completed : false
        };

        

    }
    componentDidMount(){
        axios.get()
    }
    

    render() {
        return (
            <div className="container">
                <h3>Edit Todo List</h3>
            </div>
        );
    }
}


export default TodoEdit;