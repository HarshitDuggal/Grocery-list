import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,removeItem,editItems}) => {
  return <div className='grocery-list'>
    {items.map((item) => {
      const  {id,title} = item
      return<article className='grocery-item' key={id}>
        <p>{item.title}</p>
        <div className='btn-container'>
          <button type='edit-btn' onClick= {() => {editItems(id)}}><FaEdit/></button>
          <button type='button' className='delete-btn' onClick={ () => removeItem(id)}><FaTrash/></button>
        </div>
      </article> 
        
    })}
  </div>
}

export default List
