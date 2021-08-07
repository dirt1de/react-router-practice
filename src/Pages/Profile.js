import {useEffect, React} from 'react'

import { useHistory } from 'react-router'

const Profile = ({isLogIn}) => {

    const history = useHistory()

    useEffect(()=>{
        if(!isLogIn){
            console.log("Redirecting")
            history.push("/")
        }
    },[isLogIn,history])


    return (
        <>
            <h1 style={{textAlign:"center"}}>
                This is the Profile page
            </h1>
 
        </>
    )
}

export default Profile
