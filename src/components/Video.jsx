import { useEffect, useState } from "react"
import { fakeFetchNine } from "../api/fakeFetchNine"

export function Video () {

    const [videos, setVideos] = useState({})

    async function getVideos () {
        try {
            const {status, data: {videos}} = await fakeFetchNine('https://example.com/api/getvideo')
            if(status === 200)
                setVideos(videos)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getVideos()
    }, [])

    function handleAddLabel () {
        setVideos({...videos, label: "Self Motivational"})
    }

    return(
        <section>
            <h1>Videos</h1>
            {
                videos.title && 
                <div>
                    <img src={videos.thumbnail} alt="Random" />
                    <p><strong>Views: </strong>{videos.views}</p>
                    <p><strong>Likes: </strong>{videos.likes}</p>
                    {
                        videos.label && <p><strong>Label: </strong>{videos.label}</p>
                    }
                    <button onClick={handleAddLabel}>Add Label</button>
                </div>
            }
        </section>
    )
}