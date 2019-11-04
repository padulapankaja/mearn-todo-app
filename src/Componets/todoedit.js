import React, { Component } from 'react';
import axios from "axios";



class TodoEdit extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoComplete = this.onChangeTodoComplete.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description : '' ,
            todo_responsible : '',
            todo_priority : '',
            todo_completed : false
        };

        

    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/todos/' +this.props.match.params.id)
        .then(response => {
            this.setState({
                todo_description:response.data.todo_description,
                todo_responsible:response.data.todo_responsible,
                todo_priority:response.data.todo_priority,
                todo_completed:response.data.todo_completed
            })
        })
        .catch(function(error){
                console.log(error)
        })
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
    onChangeTodoComplete(e) {
        this.setState({
            todo_completed:!this.state.todo_completed
        });
    }



    onSubmit(e){
        e.preventDefault();

        const object = {
            todo_description:this.state.todo_description,
            todo_responsibility:this.state.todo_responsible,
            todo_priority:this.state.todo_priority,
            todo_completed:this.state.todo_completed

        };
        axios.post('http://localhost:4000/todos/update/' +this.props.match.params.id, object)
        .then(res=> console.log(res.data));


        this.props.history.push('/')

    }




    render() {
        return (
            <div className="container">
                <h3>Update Todo</h3>

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
                            <div className="col-md-12">

                                <input type="checkbox" className="form-check-input" id="comlpetedCheckbox" name="comlpetedCheckbox" onChange={this.onChangeTodoComplete} checked={this.state.todo_completed} value={this.state.todo_completed} />
                                <label className="form-check-lable" htmlFor="completedCheckbox">Completed</label>

                            </div>

                            <br />
                            <div className="col-md-12">

                                <input type="submit" value="Update Todo" className="btn btn-primary" />

                            </div>
                        </div>


                    </form>

                
            </div>
        );
    }
}


export default TodoEdit;