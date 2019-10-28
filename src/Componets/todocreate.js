import React, { Component } from 'react';



class TodoCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
                todo_description : '' ,
                todo_responsible : '',
                todo_priority : '',
                todo_completed : false
        };

        

    }


// changing functions
    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }









    render() {
        return (
            <div className="container">
                <h3>Create Todo List</h3>
            </div>
        );
    }
}


export default TodoCreate;