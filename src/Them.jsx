
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext()

const Them = (props) => {

  const [theme,setTheme] = useState('light')
  
  return (
    <div>
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>

    </div>
  )
}

export default Them