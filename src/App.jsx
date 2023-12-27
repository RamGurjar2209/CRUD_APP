import React from 'react'
import ListGroup from './components/ListGroup'
import Form from './components/Form'

const App = () => {
  return (
    <>
      <div className="container p-5">
        <Form/>
        <ListGroup/>
      </div>
    </>
  )
}

export default App