import React from "react"
import UserContext from "./UserContext";      // have imported this js file 

const UserContextProvider = ({children})=>{
    const [user, setdata ]=  React.useState('');        // dunno why null is not getting allowed here whereas in video it is applicable 


    return (
        <UserContext.Provider value={ {user, setdata} }>        
            {/* .provider for providing the values , usercontext term only is not enough
                values - any and many values jinka aapko access dena h , here sir has passed in object  
                */}
            {children}        
            {/* jinko bhi userContext  ka access dena h  */}

        </UserContext.Provider>
    )
}
export default UserContextProvider