import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useParams } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom' 
import { updatePlayer } from '../Redux/playerAction'
import { useSelector, connect } from 'react-redux'
import axios from 'axios'

function UpdatePlayer({updatePlayer}){
    const players= useSelector(state=>state.players.leaguePlayers)
    const {id}=useParams()
    const player = players.find(player=> player.id === parseInt(id))
    const navigate=useNavigate()
 
    const initialValues={
        name:player.name,
        jersey_number: player.jersey_number,
        team_name: player.team.name
    }
 
    const onSubmit=values=>{
        axios.patch(`/players/${player.id}`, values)
        .then(res=>updatePlayer(res.data))
        .catch(error=>console.log("Couldn't update player", error))
        navigate('/players')
    }
 
    return(
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                className='ui form'>
                <Form className='form'><br/><br/><br/><br/>
                    <h1 className='headers'>Update Player Info</h1><br/>
                    <label className='label'> Name: </label>
                    <Field type='text' id='name' name='name' className='field'></Field><br/>
                    <label className='label'> Jersey Number: </label>
                    <Field type='number' id='jersey_number' name='jersey_number' className='field'/><br/>
                    {/* <label className='label'> Team: </label>
                    <Field type='text' id='team_name' name='team_name' className='field'/><br/><br/> */}
                    <button type='submit' className='ui green button'> Submit </button>
                </Form>
            </Formik><br/><br/>
            <img src='https://www.sharpfootballanalysis.com/wp-content/uploads/2023/02/Super-Bowl-57-preview-scaled.jpg'
            className='small-image' alt='quarterback'/>
        </div>
    )}

    const mapDispatchToProps = dispatch =>{
        return{
            updatePlayer:(id, playerData)=>dispatch(updatePlayer(id, playerData))
        }
    }

export default connect(null, mapDispatchToProps) (UpdatePlayer)