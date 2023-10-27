import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useParams } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom' 
import { updateCoach } from '../Redux/coachAction'
import { useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

function UpdateCoach(){
    const coaches= useSelector(state=>state.coaches.leagueCoaches)
    const {id}=useParams()
    const coach = coaches.find(coach=> coach.id === parseInt(id))
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const initialValues={
        name:coach.name,
        coaching_position: coach.coaching_position,
    }
 
    const onSubmit= newCoach=>{
        axios.patch(`/coaches/${coach.id}`, newCoach)
        .then(res=>{
            dispatch(updateCoach(res.data))
            navigate('/coaches')})
        .catch(error=>console.log("Couldn't update coach", error))
       
    }
 
    return(
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                className='ui form'>
                <Form className='form'><br/><br/><br/><br/>
                    <h1 className='headers'>Update Coach Info</h1><br/>
                    <label className='label'> Name: </label>
                    <Field type='text' id='name' name='name' className='field'></Field><br/>
                    <label className='label'> Coaching Position: </label>
                    <Field type='text' id='coaching_position' name='coaching_position' className='field'/><br/>
                    <button type='submit' className='ui green button'> Submit </button>
                </Form>
            </Formik><br/><br/>
            <img src='https://www.yardbarker.com/media/a/c/ac644e7734f7fa7209e752e181667c001a6a89b2/thumb_16x9/ranking-nfl-coaches-heading-2020.jpg'
            className='small-image' alt='quarterback'/>
        </div>
    )}

export default (UpdateCoach)