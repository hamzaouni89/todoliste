import React, { Component } from 'react';
import './AddItem.css'
class AddItem extends Component {
    state = {
        firstname: '',
        lastname: ''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target.firstname.value);
        if (event.target.firstname.value === '' && event.target.lastname.value === '' || event.target.lastname.value === '' || event.target.firstname.value === '') {
            return false
        } else {
            this.props.addItem(this.state)
            this.setState({
                firstname: '',
                lastname: ''
            })
        }

    }




    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter firstname ..." id="firstname" onChange={this.handleChange} value={this.state.firstname} />
                    <input type="text" placeholder="Enter lastname ..." id="lastname" onChange={this.handleChange} value={this.state.lastname} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddItem;