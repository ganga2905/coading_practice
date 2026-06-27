import React from 'react'

const AddViewCard = ({list}) => {

  return (
    <div>
        {
            list.map((e,index)=>(
                <li key={index}>{e}</li>
            ))
        }

    </div>
  )
}

export default AddViewCard