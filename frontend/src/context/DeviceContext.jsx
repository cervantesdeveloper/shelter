import { createContext, useState } from "react";

const DeviceContext = createContext();

const DeviceProvider = ({children})=>{
    let breakpoint = window.matchMedia("(max-width: 1023px)");

    const [isMobil, setIsMobil] = useState(breakpoint.matches);

    const responsive = ()=>{
        breakpoint.matches
        ? setIsMobil(true)
        : setIsMobil(false)
    }

    breakpoint.addListener(responsive);

    const data = {isMobil}

    return(
        <DeviceContext.Provider value={data}>{children}</DeviceContext.Provider>
    )
}

export default DeviceContext;
export {DeviceProvider};