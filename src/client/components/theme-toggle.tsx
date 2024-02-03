import React from "react";
import { useTheme } from "./theme-provider";
import { Toggle } from "./ui/toggle";
import { Moon, MoonStar, Sun } from "lucide-react";
const ThemeToggle = () => {
  const { theme } = useTheme();
  const { setTheme } = useTheme();
  return <div>
  <Toggle onClick={()=>{theme==='dark'?setTheme('light'):setTheme('dark')}}>
    {theme==='dark'?(<MoonStar className="h-6 w-6"/>):(<Sun className='h-6 w-6'/>)}
  </Toggle>
  
  </div>;
};

export default ThemeToggle;
