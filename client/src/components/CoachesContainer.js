import React from "react"
import Coach from "./Coach"

function coachesContainer({coaches}){
    const displayCoaches=coaches.map(coach=>{
        return <Coach passCoach={coach} key={coach.id}/>    
    })

    return (
        <div>
            <h1 class='headers'>Coaches in the League</h1><br/>
            <div class='ui grid container cards'>{displayCoaches}</div><br/>
            <img className="small-image" alt='coach'  src='https://sportshub.cbsistatic.com/i/r/2022/10/27/f6b07b15-2cbd-44ef-9422-a46d9d98ec67/thumbnail/1200x675/5d4f8cfbb351a6d55a6f3056c5f8356e/gettyimages-1435972151-2.jpg'/>
            <br/><br/>
        </div>
    )}

export default coachesContainer