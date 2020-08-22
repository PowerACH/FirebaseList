import React from 'react';

import Todo from './Todo'
import List from './List'


export default class Home extends React.Component {

    state = {
        list: [
            {id:1, entry: "Go to the grocery store"},
            {id:2, entry: "Become a master at React"}
        ]
    }

    addAnEntry = list => {
        list.id = Math.random()*100000000000;
        let entry = [...this.state.list, list]
        this.setState({
            list: entry
        })
    }

    render() {
        return(
            <div className = "container">
                <Todo addAnEntry = { this.addAnEntry } />
                <List list={ this.state.list } />
            </div>
        )
    }
}