import { useEffect, useState } from "react"
import { fakeFetchSix } from "../api/fakeFetchSix"

export function UnArchived() {

    const [habits, setHabits] = useState([])
    const [isArchived, setIsArchived] = useState(false)

    async function getHabits() {
        try {
            const { status, data: { habits } } = await fakeFetchSix('https://example.com/api/habits')
            if (status === 200)
                setHabits(habits)
        } catch (error) {

        }
    }

    useEffect(() => {
        getHabits()
    }, [])

    function handleArchives() {
        setIsArchived(true)
    }

    return (
        <section>
            <h1>{isArchived ? "Archived" : "Unarchived"}</h1>
            {
                habits.filter(({ archived }) => archived === isArchived)
                    .map(({ title, desc, daysFollowed, daysSkipped }) =>
                        <div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <p><strong>Days Followed: </strong>{daysFollowed}</p>
                            <p><strong>Days Skipped: </strong>{daysSkipped}</p>
                        </div>
                    )
            }
            <button onClick={handleArchives}>Show Archives</button>
        </section>
    )
}