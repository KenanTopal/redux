import { useState } from 'react'
import store from "./store"
import { Button } from "reactstrap"
import { COMPLETED, REMOVETODO } from './actions'

export default function Todo() {
  const [state, setState] = useState(false)
  const data = store.getState()
  const handleClick = (id) => {
    setState(!state)
    store.dispatch({
      type: REMOVETODO,
      id: id
    })
  }
  const handleComplete = (id) => {
    setState(!state)
    store.dispatch({
      type: COMPLETED,
      id: id
    })
  }
  return (
    <div>
      {
        data.map(item => {
          return (
            <div key={item.id} style={{ margin: "5px", padding: "5px", display: "flex", justifyContent: "space-between", boxShadow: "0 0 5px grey" }}>
              <div style={{ fontSize: "2rem", textDecoration: item.completed ? "line-through" : "" }}>{item.title}</div>
              <div >
                <Button color="success" onClick={() => handleComplete(item.id)}  >mark as complete</Button>
                <Button color="danger" style={{ marginLeft: "5px" }} onClick={() => handleClick(item.id)}>remove</Button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
