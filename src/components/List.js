import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const List = ( props ) => {
    let list = props.entry
    let entry;

    list.length === 0 ? 
        entry = <h5>You have no entries yet!</h5> : 
        entry = list.map( l => { 
            return (
                <li className = "collection-item" key = { l.id } >
                    { l.entry }
                    <Link className = "secondary-content" to='/'>
                        <i className = "material-icons">edit</i>
                    </Link>
                    <Link className = "secondary-content" to='/'>
                        <i className = 'material-icons'>delete</i>
                    </Link>
                </li>
            )
        })

        return (
            <div>
                <ul className = "collection">
                    { entry }
                </ul>
            </div>
        )
}

// This was used so we could get the data in the store, which is then attached to the props of the component.
const mapStateToProps = state => {
    return {
        entry: state.list
    }
}

export default connect(mapStateToProps)(List);