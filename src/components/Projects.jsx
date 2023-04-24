import { useEffect, useState } from "react"
import { fakeFetchSeven } from "../api/fakeFetchSeven"

export function Projects () {

    const [projects, setProjects] = useState([])
    const [projectDetails, setProjectDetails] = useState ({})

    async function getProjects () {
        try {
            const {status, data: {projects}} = await fakeFetchSeven('https://example.com/api/projects')
            if(status === 200)
                setProjects(projects)
        } catch (error) {
            
        }
    }

    useEffect (() => {
        getProjects()
    }, [])

    function handleShowDetails (projectTitleToShowDetails) {
        setProjectDetails(projects.find(({title}) => title === projectTitleToShowDetails))
    }

    return (
        <section>
            <h1>Projects</h1>
            {
                projects.map(({title, description}) => 
                    <div>
                        <p><strong>Name: </strong>{title}</p>
                        <p><strong>Description: </strong>{description}</p>
                        <button onClick={() => handleShowDetails(title)}>Show Details</button>
                    </div>
                )
            }
            {
                projectDetails.title &&
                <div>
                    <h2>Project Details</h2>
                    <p><strong>Title: </strong>{projectDetails.title}</p>
                    <p><strong>Description: </strong>{projectDetails.description}</p>
                    <p><strong>Technologies </strong>{projectDetails.technologies}</p>
                    <p><strong>Completed: </strong>{projectDetails.completed ? "true" : "false"}</p>
                </div>
            }

        </section>
    )
}