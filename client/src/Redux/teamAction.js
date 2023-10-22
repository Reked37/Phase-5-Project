import { DELETE_TEAM, FETCH_TEAMS_FAILURE, FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, POST_TEAM } from "./Types";
import axios from 'axios'

export const fetchTeamsRequest =() =>{
    return{
        type: FETCH_TEAMS_REQUEST
    }
}

export const fetchTeamsSuccess =(players) =>{
    return{
        type: FETCH_TEAMS_SUCCESS,
        payload: players
    }
}

export const fetchTeamsFailure =(error) =>{
    return{
        type: FETCH_TEAMS_FAILURE,
        payload: error
    }
}

export const postTeam=(newTeam)=>{
    return{
        type:POST_TEAM,
        payload:newTeam
    }
}

// export const deleteTeam=(teamId)=>{
//     return{
//         type:DELETE_TEAM,
//         payload:teamId
//     }
// }

export const fetchTeams= () =>{
    return (dispatch)=>{
        dispatch(fetchTeamsRequest)
        axios.get('/teams')
        .then(response=>{
            const teams = response.data
            dispatch(fetchTeamsSuccess(teams))
        })
        .catch(error=>{
            const errorMsg= error.message
            dispatch(fetchTeamsFailure(errorMsg))
        })
    }
}