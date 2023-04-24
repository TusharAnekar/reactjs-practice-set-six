import { useEffect, useState } from "react"
import { fakeFetchFour } from "../api/fakeFetchFour"

export function Playlist () {

    const [videos, setVideos] = useState([])

    async function getPlaylist () {
        try {
            const {status, data: {videos}} = await fakeFetchFour('https://example.com/api/videos')
            if(status === 200)
                setVideos(videos)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getPlaylist()
    }, [])

    function handleDelete () {
        setVideos(videos.filter((video, index) => index !==0))
    }

    return (
        <section>
            <h1 style={{textDecoration: "underline"}}>Playlist</h1>
            {
                videos.map(({title, thumbnail, views, likes}) => 
                    <div style={{display: "inline-block", marginRight: "10px"}}>
                        <img src={thumbnail} alt="Playlist" width="300px" height= "200px"/>
                        <p><strong>{title}</strong></p>
                        <p>{views}</p>
                        <p>{likes}</p>
                    </div>
                )
            }
            <button style={{display: "block"}} onClick={handleDelete}>Delete Video</button>
        </section>
    )
}