import React from 'react'

const Users = ({user}) => {

  return (
    <div className='container'>
        {
          user.map((e)=>(
            <div key={e.id}>
              </div>
          ))
        }

    </div>
  )
}

export default Users