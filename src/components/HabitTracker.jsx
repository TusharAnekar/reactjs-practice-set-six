import { useEffect, useState } from "react"
import { fakeFetchThree } from "../api/fakeFetchThree"

export function HabitTracker () {

    const [habits, setHabits] = useState([])

    async function getHabits () {
        try {
            const {status, data: {habits}} = await fakeFetchThree('https://example.com/api/habits')
            if(status === 200) 
                setHabits(habits)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getHabits()
    }, [])

    return (
        <section>
            <h1 style={{textDecorationLine: "underline"}}>Habit Tracker</h1>
            <ul>
                {
                    habits.map(({title, desc, daysFollowed, daysSkipped}) => 
                    <li style={{borderBottom: "1px solid grey"}}>
                        <h3 style={{marginBottom: "-18px"}}>{title}</h3>
                        <p>{desc}</p>
                        <p style={{marginBottom: "-16px"}}><strong>Days Followed: </strong>{daysFollowed}</p>
                        <p><strong>Days Skipped: </strong>{daysSkipped}</p>
                    </li>)
                }
            </ul>
        </section>
    )
}