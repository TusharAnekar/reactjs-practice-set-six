import { useEffect, useState } from "react"
import { fakeFetchFive } from "../api/fakeFetchFive"

export function SocialMedia() {

    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const { status, data: { posts } } = await fakeFetchFive('https://example.com/api/posts')
            if (status === 200)
                setPosts(posts)
        } catch (error) {

        }

    }

    useEffect(() => {
        getPosts()
    }, [])

    function handleBakeryFilter () {
        setPosts(posts.filter(({category}) => category === "Bakery"))
    }

    return (
        <section>
            <h1>Social Media</h1>
            <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                posts.map(({ caption, src, views, likes, category }) =>

                    <figure>
                        <img src={src} alt="Posts" />
                        <figcaption>{caption}</figcaption>
                        <p><strong>Likes: </strong>{likes}</p>
                        <p><strong>Views: </strong>{views}</p>
                    </figure>
                )
            }
            </div>
            <button onClick={handleBakeryFilter}>Show Bakery</button>
        </section>
    )
}