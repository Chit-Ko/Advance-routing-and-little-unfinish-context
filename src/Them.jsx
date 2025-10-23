import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext()

const Them = (props) => {

    const [theme, setTheme] = useState('yellow')

  return (
    <div>
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props}
        </ThemeContext.Provider>

    </div>
  )
}

export default Them