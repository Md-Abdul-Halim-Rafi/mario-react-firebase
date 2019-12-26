import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
    state = {
        title: '',
        content:''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create Your Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='content'>Project Content</label>
                        <textarea id="content" className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn pink z-depth-0 lighten-1">Create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProp = dispatch => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProp)(CreateProject);
