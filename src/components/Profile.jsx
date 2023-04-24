import { useEffect, useState } from "react"
import { fakeFetchEight } from "../api/fakeFetchEight"

export function Profile() {

    const [profile, setProfile] = useState({})

    async function getProfile() {
        try {
            const { status, data: { profiles } } = await fakeFetchEight('https://example.com/api/profile')
            if (status === 200)
                setProfile(profiles)
        } catch (error) {

        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    function handleUpdateName () {
        setProfile({...profile, name: "Emily"})
    }

    return (
        <section>
            <h1>Profile</h1>
            {
                profile.name &&
                <div>
                    <p><strong>Name: </strong>{profile.name}</p>
                    <p><strong>Age: </strong>{profile.age}</p>
                    <p><strong>Gender: </strong>{profile.gender}</p>
                    <p><strong>email: </strong>{profile.email}</p>
                    <p><strong>Occupation: </strong>{profile.occupation}</p>
                    <button onClick={handleUpdateName}>Update name</button>
                </div>
            }
        </section>
    )
}