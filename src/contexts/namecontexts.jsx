import { createContext, useContext, useState } from "react";

const nameContexts = createContext();

const NameProvider = ({ children }) => {
    const [name, setName] = useState("")
    return (
        <nameContexts.Provider value={{ name, setName }}>
            {children}
        </nameContexts.Provider>
    )

        ;
}
const useName = () => useContext(nameContexts)
export { NameProvider, useName };
export default nameContexts;