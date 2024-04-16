import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }

    const data = {isOpen, handleClick}

    return(
        <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
    )
}

export {MenuProvider};
export default MenuContext