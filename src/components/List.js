import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteEntry, getAnEntry } from '../store/actions/createEntry'


const List = ( props ) => {
    console.log(props)
    const { entry, deleteEntry, getAnEntry } = props
    let styling
    // let list = props.entry
    let entry;

    if(entry) {

    styling = "collection"
        entry = (list.map( l => {
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
        )
    } else {
        list = <h4 style = {{ textAlign: 'center' }}>Loading...</h4>
        styling = ''
    }
    // list.length === 0 ? 
    //     entry = <h5>You have no entries yet!</h5> : 
    //     entry = list.map( l => { 
            

        return (
            <div>
                <ul className = {`${styling}`} style={{ marginTop: '70px' }}>
                    { entry }
                </ul>
            </div>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
     deleteEntry: (id) => { dispatch(deleteEntry(id))},
     getAnEntry: (id) => { dispatch(getAnEntry(id))}
    }
   }

// This was used so we could get the data in the store, which is then attached to the props of the component.
const mapStateToProps = state => {
    return {
        entry: state.firestoreList.ordered.ListMe
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'ListMe'}
    ])
)(List)