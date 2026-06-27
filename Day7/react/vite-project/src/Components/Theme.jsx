import React from 'react'
import{useSelector,useDispatch} from 'react-redux'
import { toggleTheme } from '../themeSlice'

const Theme = () => {
    const currentThem=useSelector((state)=>state.theme.theme)

    const dipatch=useDispatch()

  return (
    <div>
        <h1>{currentThem}</h1>
        <button onClick={()=>dipatch(toggleTheme())}>chang</button>

    </div>
  )
}

export default Theme