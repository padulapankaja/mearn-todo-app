import React, { Component } from 'react';
import axios from "axios";

class TodoCreate extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);





        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
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
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submiteed : `);
        console.log(`Todo Descrition  :   ${this.state.todo_description}`);
        console.log(`Todo Priority :  ${this.state.todo_priority}`);
        console.log(`Todo Responsible : ${this.state.todo_responsible}`);
        console.log(`Todo Completed : ${this.state.todo_completed}`);


        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsibility: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed


        }







        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));







        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });

    }





    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 20 }}>
                    <h3>Create New Todo</h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group row">
                            <div className="col-md-12">
                                <label> Description : <input className="form-control" type="text" name="description" value={this.state.todo_description} onChange={this.onChangeTodoDescription} required /></label>
                            </div>

                            <div className="col-md-12">
                                <label>  Responible : <input className="form-control" type="text" name="resposible" value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible} required /></label>
                            </div>


                            <div className="col-md-12">

                                <label> Priority :</label>
                            </div>
                            <div className="col-md-12">

                                <input className="form-check form-check-inline" type="radio" style={{ marginRight: '0px' }} name="priorityOption" id="priorityLow" value="High" checked={this.state.todo_priority == 'High'} onChange={this.onChangeTodoPriority} /> <label>High</label>
                                <input className="form-check form-check-inline" type="radio" style={{ marginLeft: '20px', marginRight: '0px' }} name="priorityOption" id="priorityLow" value="Medium" checked={this.state.todo_priority == 'Medium'} onChange={this.onChangeTodoPriority} /> <label>Medium</label>
                                <input className="form-check form-check-inline" type="radio" style={{ marginLeft: '20px', marginRight: '0px' }} name="priorityOption" id="priorityLow" value="Low" checked={this.state.todo_priority == 'Low'} onChange={this.onChangeTodoPriority} /> <label>Low</label>


                            </div>

                            <br />
                            <div className="col-md-12">

                                <input type="submit" value="Submit" />

                            </div>
                        </div>


                    </form>
                </div>
            </div>
        );
    }
}


export default TodoCreate;