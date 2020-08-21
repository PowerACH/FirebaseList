import React from 'react';


const List = ({ list }) => {

    let entry;

    list.length === 0 ? 
        entry = <h5>You have no entries yet!</h5> : 
        entry = list.map( l => { 
            return (
                <li className = "collection-item" key = { l.id } >
                    { l.entry }
                    <Link className = "secondary-content" to='/'>
                        <i className = "material-icons">Edit</i>
                    </Link>
                    <Link className = "secondary-content" to='/'>
                        <i className = 'material-icons'>Delete</i>
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