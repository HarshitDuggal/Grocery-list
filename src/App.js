import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [list, setList] = useState([]);
  const [name,setName] = useState('')
  const [isEditing, setisEditing] = useState(false);
  const [editID, seteditID] = useState(null);
  const [alert, setalert] = useState({show:false , msg: '' , type: ''})
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      //display alert
    }
    else if(name && isEditing){
      //deal with edit
    }
    else{
      //alert
      const newItems = {id: new Date().getTime().toString() , title : name }
      setList([...list,newItems])
      setName('')
    }
  }
  return <section className='section-center'>
    <div className='grocery-container'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert/>}
        <h3>Grocery Buds</h3>
        <div className='form-control'>
          <input type='text' className='text' placeholder='e.g Apples' value={name} onChange={(e) => {setName(e.target.value)}}/>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length>0 && 
      <div className='grocery-conntainer'>
      <List items={list}/>
      <button className='clear-btn'>Clear items</button>
      </div>
      }
    </div>
  </section>
}

export default App
