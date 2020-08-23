import React from 'react';
import { connect } from 'react-redux'
// This component ^^ returns a function that takes in the component (Todo) which we want to connect to the store as an argument
import { createEntryAction } from '../store/actions/createEntry'
import Form from './form';

class Todo extends React.Component {
    state = {
        entry: ''
    }

    getEntry = e => {
        e.preventDefault()
        
        this.props.createEntry(this.state)
        this.setState({ goal: '' })
        // if(this.state.entry !== ''){
            // this.props.addAnEntry(this.state)
            // this.setState({ entry: '' })
            // console.log(this.state.entry)
        }

        handleChange = value => {
            this.setState({ entry:value })
        }


    

    render() {
        return(
            <div>
                <div className = "row">
                    <Form
                    formAction = {this.setEntry}
                    value = {this.state.entry}
                    handleChange = {this.handleChange}
                    btnName={'Add Button'}
                    />
                    </div>
                    </div>
                    /* <form className="col s12" style={{ marginTop: '70px '}} 
                    onSubmit={this.getEntry }>
                        <input type="text"
                        onChange={ e=> {this.setState({ entry: e.target.value })}
                        }
                        value={ this.state.entry }
                        required />
                        <div className='center'>
                            <button className='btn btn-large blue' 
                                onClick={this.getEntry }> Add Entry 
                            </button>
                        </div>
                    </form>
                </div>
                    // </div> */
        )
    }
}


// This function returns an object, the object is then automatically attached to the props or properties of our component.
// The “mapDispatchToProps” function, on the other hand, is mainly used to dispatch an action which is to mutate the state or the data in the store. This function is also automatically attached to the props of the connected component.
const mapDispatchToProps = (dispatch) => {
    return {
        createEntry: (entry) => { dispatch(createEntryAction(entry))}
    }
}

export default connect(null, mapDispatchToProps)(Todo);
// The connect component actually takes in two arguments, one is the “mapStateToProps” function which enables us to have access to the data in the store. Hence, data is easily accessed from the store via this function which is then automatically attached to the props of the component.
// 