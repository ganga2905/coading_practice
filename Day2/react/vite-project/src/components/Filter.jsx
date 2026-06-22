import React from 'react'

const Filter = () => {
    const users=[
        {
            name:"ganga",
            age:22
        },
         {
            name:"gayathri",
            age:25
        },
         {
            name:"harisg",
            age:5
        }
    ]


    const filter=users.filter((e)=>e.age>18)
  return (
    <div>
        <ul>
            {
                filter.map((e)=>(
                    <li>{e.name}</li>
                ))
            }
        </ul>
    

    </div>
  )
}

export default Filter