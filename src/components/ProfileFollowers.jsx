import { useEffect, useState } from "react"
import { fakeFetchTen } from "../api/fakeFetchTen"

export function ProfileFollowers () {

    const [profile, setProfile] = useState({})

    async function getProfile () {
        try {
            const {status, data: {profile}} = await fakeFetchTen('https://example.com/api/profile')
            if(status === 200)  
                setProfile(profile)
        } catch (error) {
            
        }
    }

    useEffect (() => {
        getProfile()
    }, [])

    function handleFollow (event) {
        event.currentTarget.disabled = true;
        setProfile({...profile, followers: profile.followers + 1})
    }

    return(
        <section>
            <h1>Profile Followers</h1>
            {
                profile.name &&
                <div>
                    <h2><strong>Name: </strong>{profile.name}</h2>
                    <p><strong>Age: </strong>{profile.age}</p>
                    <p><strong>Gender: </strong>{profile.gender}</p>
                    <p><strong>Email: </strong>{profile.email}</p>
                    <p><strong>Occupation: </strong>{profile.occupation}</p>
                    <p><strong>Followers: </strong>{profile.followers}</p>
                    <p><strong>Followed By: </strong>{profile.followedBy}</p>
                    <button onClick={handleFollow}>Follow {profile.name}</button>
                </div>
                
            }
        </section>
    )
}