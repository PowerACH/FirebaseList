import React from 'React';
import Form from './form';
import { connect } from 'react-redux';

import { getAnEntry, updateEntry } from '../store/actions/createEntry';

class singleEntry extends Component {

    state = {
        goal: ''
    }

    componentDidMount() {
        let {id} = this.props.match.params
        this.props.getAnEntry(id)
    }

    componentDidUpdate(prevProps) {
        //Typical usage (dont forget to compare props):
        if (this.props.getAnEntryData !== prevProps.getAnEntryData) {
            const entry = this.props.getAnEntryData.data
            this.setState({ entry: entry.entry })
        }
    }

    handleChange = value => {
        this.setState({ entry:value })
    }

    updateGoal = e => {
        e.preventDefault()
        this.props.updateGoal(this.state, this.props.match.params.id)
        this.props.history.push('/')
       }

       render() {
        return (
         <div>
          <div className='center'>
          <h4>Change Entry</h4>
          <div className='container'>
        <Form 
            value={this.state.entry}
            btnName={`Update Entry`}
            handleChange={this.handleChange}
            formAction={this.updateEntry}
      />
     </div>
    </div>
   </div>
  )
 }
}

const mapDispatchToProps = (dispatch) => {
    return {
     getAnEntry: (id) => { dispatch(getAnEntry(id))},
     updateEntry: (updatedEntry, id) => { dispatch(updateEntry(updatedEntry, id)) }
    }
   }
   const mapStateToProps = (state) => {
    return {
     getAnEntryData: state.getEntry
    }
   }
   export default connect(mapStateToProps, mapDispatchToProps)(singleEntry)