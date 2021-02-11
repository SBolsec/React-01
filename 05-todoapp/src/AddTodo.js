import React from 'react';

class AddForm extends React.Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    }

    render () {
        return (
            <div className="">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Add new todo:</label>
                    <input type="text" id="todo" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        );
    }
}

export default AddForm;