import { ADDTODO, REMOVETODO, COMPLETED } from "./actions"
function reducer(state = [], anyParameterName) {
  if (anyParameterName.type === ADDTODO) {
    for (let i of state) {
      if (i.title === anyParameterName.title) {

        alert("already exists")
        return state
      }
    }
    return [...state, { id: state.length + 1, title: anyParameterName.title, completed: false }]
  }
  if (anyParameterName.type === REMOVETODO) {
    const newData = state.filter(item => item.id !== anyParameterName.id)
    return newData
  }
  if (anyParameterName.type === COMPLETED) {
    return state.map(item => (item.id === anyParameterName.id ? { ...item, completed: true } : item))
    // const newData = []
    // for (let i of state) {
    //   if (i.id === anyParameterName.id) {
    //     newData.push({ ...i, completed: true })
    //   } else {
    //     newData.push(i)
    //   }
    // }
    // return newData
  }

  return state
}

export default reducer
