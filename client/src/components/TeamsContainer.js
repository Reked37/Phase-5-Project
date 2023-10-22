import React, {useEffect} from "react"
import Team from "./Team"
import {useSelector, connect} from 'react-redux'
import { fetchTeams } from "../Redux/teamAction"

function TeamsContainer({fetchTeams}){
    useEffect(()=>{
        fetchTeams()
    },[fetchTeams])

    const teams=useSelector(state=>state.teams.leagueTeams)

    const displayTeams=teams.map(team=>{
        return <Team passTeam={team} key={team.id}/>    
    })

    return (
        <div>
            <h1 class='headers'> Teams in the League</h1><br/>
            <div class='ui grid container'>{displayTeams}</div><br/>
            <img className='small-image' alt='team' src='https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/fjptmdctzkinv6jaon59'/>
            <br/>
        </div>
    )}

    const mapStateToProps= state =>{
        return{
            teams:state.teams
        }
    }

    const mapDispatchToProps = dispatch =>{
        return{
            fetchTeams:()=>dispatch(fetchTeams())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (TeamsContainer)