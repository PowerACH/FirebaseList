import React from 'react';

export default class Todo extends React.Component {
    state = {
        entry: ''
    }

    getEntry = e => {
        e.preventDefault()
        if(this.state.entry !== ''){
            this.props.addAnEntry(this.state)
            this.setState({ entry: '' })
        }
    }

    render() {
        return(
            <div>
                <div className = "row">
                    <form className="col s12" style={{ marginTop: '70px '}} 
                    onSubmit={this.getEntry }>
                        <input type="text"
                        onChange={ e=> {this.setState({ entry: e.target.value })}
                        }
                        value={ this.state.entry }
                        require />
                        <div className='center'>
                            <button className='btn btn-large blue' 
                                onClick={this.getEntry }> Add Entry 
                            </button>
                        </div>
                    </form>
                </div>
        </div>
        )
    }
}