import React from 'react'
import { useParams, useLocation } from 'react-router'

const Profile = () => {
    const param = useParams()

    const query= new URLSearchParams(useLocation().search)

    return (
        <>
            <h1 style={{textAlign:"center"}}>
                This is the Posts page
            </h1>

            <h3>
                The param is {param.id}
            </h3>

            <h3>
                "first" = {query.get("first")}
                <br />
                "last" = {query.get("last")}

            </h3>
        </>
    )
}

export default Profile
