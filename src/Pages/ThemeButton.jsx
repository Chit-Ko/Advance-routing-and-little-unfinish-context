import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Them.jsx'

const ThemeButton = () => {
    const {theme,setTheme} = useContext(ThemeContext);
    
    const changeTheme = () =>{
        setTheme(theme === 'yellow' ? 'purple' : 'yellow');
        console.log(theme);
    }
  return (
    <div>
        <button className='cursor-pointer hover:text-amber-300 ' onClick={changeTheme} > Theme</button>
    </div>
  )
}

export default ThemeButton