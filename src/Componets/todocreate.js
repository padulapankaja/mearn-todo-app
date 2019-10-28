import React, { Component } from 'react';



class TodoCreate extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);





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
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submiteed : `);
        console.log(`Todo Descrition  :   ${this.state.todo_description}` );
        console.log(`Todo Priority :  ${this.state.todo_priority}`);
        console.log(`Todo Responsible : ${this.state.todo_responsible}`);
        console.log(`Todo Completed : ${this.state.todo_completed}`);

        
        


        this.setState({
            todo_description : '' ,
            todo_responsible : '',
            todo_priority : '',
            todo_completed : false
        });
    }





    render() {
        return (
            <div className="container">
                <div style={{marginTop:20}}>
                    <h3>Create New Todo</h3>
                    <form  onSubmit={this.onSubmit}>
                            <label> Description : <input type="text" name="description" value={this.state.todo_description}  onChange={this.onChangeTodoDescription}/></label>
                            <label>  Responible : <input type="text" name="resposible" value={this.state.todo_responsible}  onChange={this.onChangeTodoResponsible}/></label>
                            <label> Description : <input type="text" name="description" value={this.state.todo_description}  onChange={this.onChangeTodoDescription}/></label>
                            <label> Priority : <input className="form-check forn-check-inlne" type="radio"  name="priorityOption" id="priorityLow" value="Low" checked={this.state.todo_priority == 'Low'} onChange={this.onChangeTodoPriority} /> </label>


                            <input className="form-check forn-check-inlne" type="radio"  name="priorityOption" id="priorityLow" value="High" checked={this.state.todo_priority == 'High'} onChange={this.onChangeTodoPriority} />
                          
                          
                          
                          
                          
                            <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}


export default TodoCreate;