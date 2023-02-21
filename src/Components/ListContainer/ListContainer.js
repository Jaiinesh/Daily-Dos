import React, { useState } from 'react'
import './ListContainer.css'

const ListContainer = () => {

  const [inputData, setInputData] = useState('')
  const [items, setItems] = useState([])
  const deleteItem = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    })
    setItems(updateditems);

  }
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData('')
    }
  }

  return (


    // Add task container
    <div>
      <div className='Add-task-container' >
        <h2>Add Task</h2>
        <div className='Add-task-ip-field'>
          <input placeholder='Add Items' type={'text'} value={inputData}
            onChange={(e) => setInputData(e.target.value)} />
          <button onClick={addItem} >Add</button>
        </div>
      </div>

      {/* Pending task container */}
      <>
        <div className='Pending-task-container' >
          <h2>Pending tasks</h2>
          {
            items.map((elem, ind) => {
              return (
                <div className='Pending-task-op-field' key={ind} >
                  <h3 className='Pending-task-ip-field-btn'> {elem}</h3>
                  <button onClick={() => deleteItem(ind)} >Complete</button>
                </div>
              )
            })
          }
        </div>
      </>
    </div>
  )
}

export default ListContainer

