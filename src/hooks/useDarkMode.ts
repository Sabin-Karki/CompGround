import{useState,useEffect} from 'react';

export const useDarkMode=()=>{
    const [theme,setTheme] = useState("light");
     
    useEffect(()=>{
        const root = window.document.documentElement;
        if(theme==="dark"){
            root.classList.add("dark");
        }else{
            root.classList.remove("dark");
        }
    },[theme]);
    
 const toggleTheme=()=>{
    setTheme((prevTheme)=>(prevTheme==="dark"?"light":"dark"));
 
 };
 return {theme,toggleTheme};
}
