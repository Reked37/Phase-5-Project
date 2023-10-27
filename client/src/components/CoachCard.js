import React from "react"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { deleteCoach } from "../Redux/coachAction"
// import axios from "axios"

function CoachCard({passCoach}){
    const {name, coaching_position, team}=passCoach
    // const navigate=useNavigate()
    // const dispatch=useDispatch()

    // function coachesPlayers(){
    //     navigate(`/coachesplayers/${passCoach.id}`)
    // }

    // function handleDeleteCoach(){
    //     dispatch(deleteCoach(passCoach.id))
    //     axios.delete(`/coaches/${passCoach.id}`)
    //     .then(res=>res.data)
    //     .catch(error=>console.log(error))
    // }

    // function handleUpdateCoach(){
    //     navigate(`/coaches/${passCoach.id}`)
    // }

    return (
        <div class='ui four wide column'>
            <div class='ui-card'>
                <h3 class='name'>{name}</h3>
                <h3 class='meta'>Coaching Position: {coaching_position}</h3>
                <h3 class='description'> Team: {team.name}</h3>
                {/* <button type='submit' onClick={coachesPlayers} className='ui pink button'>Players</button> */}
                {/* <button type='submit' onClick={handleUpdateCoach} className='ui  blue button'>Update Coach</button>
                <button type='submit' onClick={handleDeleteCoach} className='ui red button'>Delete Coach </button> */}
            </div>
        </div>
    )}


export default CoachCard