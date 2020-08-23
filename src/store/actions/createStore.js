export const createEntryAction = (entry) => {
    return (dipatch, getState, {getFirestore}) => {
  
    const firestore = getFirestore()
     firestore.collection('ListMe').add({
      ...entry
     }).then(() => {
      dipatch({ type: 'CREATE_ENTRY', goal })
     }).catch((err) => {
      dipatch({ type: 'CREATE_ENTRY_ERROR', err })
     })
    }
   }

   export const deleteEntry = (id) => {
    return (dispatch, getState, { getFirestore }) => {
   
     const firestore = getFirestore()
     firestore.collection('ListMe').doc(id).delete();
    }
   }

   export const updateEntry = (updatedEntry, id) => {
    return (dispatch, getState, { getFirestore }) => {
   
     const firestore = getFirestore()
     firestore.collection('ListMe').doc(id).update({
      ...updatedEntry
     });
    }
   }

   export const getAnEntry = (entryID) => {
    return (dispatch, getState, { getFirestore }) => {
   
     const firestore = getFirestore()
     firestore.collection('ListMe').doc(entryID).get().then((doc) => {
      if(doc.exists){
       const data = doc.data()
       dispatch({ type: 'GET_ENTRY', data }) 
      }else{
       console.log('does not exist')
      }
      
     })
    }
   }