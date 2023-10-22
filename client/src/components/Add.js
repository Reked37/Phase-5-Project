import React from 'react'
import {Formik, Field, ErrorMessage, Form} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'
import { postPlayer } from '../Redux/playerAction'
import { postTeam } from '../Redux/teamAction'
import { postCoach } from '../Redux/coachAction'
import { postMatch } from '../Redux/matchAction'

function Add({}){
    const navigate=useNavigate()
    // Player
    const validationSchemaPlayer= Yup.object({
    name: Yup.string().required('Required'),
    jersey_number: Yup.number().positive('Jersey number must be positive').integer('Jersey number must be an integer').required('Required'),
    team_name: Yup.string().required('Required')
    })
    const initialValuesPlayer={
        name: "",
        jersey_number: '',
        team_name:''
    }
   
    const onSubmitPlayer= values=>{
       axios.post('/players', values)
        .then(res =>{
            postPlayer(res.data)
            return navigate('/players')})
        .catch(error=>console.log(error))
        
    }
    
    //Team
    const initialValuesTeam={
        name: "",
        mascot: ''
    }

    const onSubmitTeam= values=>{
        axios.post('/teams', values)
         .then(res =>{
            postTeam(res.data)
            return navigate('/teams')})
         .catch(error=>console.log(error))
         
    }

    const validationSchemaTeam= Yup.object({
        name: Yup.string().required('Required'),
        mascot: Yup.string().required('Required')
    })

    //Coach
    const validationSchemaCoach= Yup.object({
        name: Yup.string().required('Required'),
        coaching_position: Yup.string().required('Required'),
        team_name: Yup.string().required('Required')
    })
    const initialValuesCoach={
        name: "",
        coaching_position: "",
        team_name:""
    }

    const onSubmitCoach= values=>{
        axios.post('/coaches', values)
         .then(res =>{
            postCoach(res.data); 
            return navigate('/coaches')})
         .catch(error=>console.log(error))
    }

    //Match
    const validationSchemaMatch=Yup.object({
        home_team: Yup.string().required('Required'),
        away_team:Yup.string().required('Required'),
        location:Yup.string().required('Required'),
        date:Yup.date().required('Required')
    })
    const initialValuesMatch={
        home_team:"",
        away_team:"",
        location:"",
        date:"",
    }
    const onSubmitMatch=values=>{
        axios.post('/matches', values)
        .then(res=>{
            postMatch(res.data);
            return navigate('/matches')
        })
        .catch(error=>console.log(error))
    }

    return(
        <div>
            <Formik
                initialValues={initialValuesPlayer}
                validationSchema={validationSchemaPlayer}
                onSubmit={onSubmitPlayer}>
                <Form className='form'><br/>
                    <h1 className='headers'>Add Player</h1>
                    <label className='label'> Name: </label>
                    <Field type='text' id='name' name='name' className='field'></Field><br/>
                    <ErrorMessage className='error' name='name' component="div"/>
                    <label className='label'> Jersey Number: </label>
                    <Field  type='number' id='jersey_number' name='jersey_number' className='field'></Field><br/>
                    <ErrorMessage className='error' name='jersey_number' component="div"/>
                    <label className='label'> Team: </label>
                    <Field type='text'  id='team_name' name='team_name' className='field'></Field><br/>
                    <ErrorMessage className='error' name='team_name' component="div"/> <br/>
                    <button type='submit' className='ui green button'>Submit</button>
                </Form>
            </Formik>
            <Formik
                initialValues={initialValuesTeam}
                validationSchema={validationSchemaTeam}
                onSubmit={onSubmitTeam}>
                <Form className='form'><br/>
                    <h1 className='headers'>Add Team</h1>
                    <label className='label'> Name: </label>
                    <Field name='name' id='name' className='field'></Field><br/>
                    <ErrorMessage className='error' name='name' component="div"/>
                    <label className='label'> Mascot: </label>
                    <Field  id='mascot' name='mascot' className='field' ></Field><br/>
                    <ErrorMessage className='error' name='mascot' component="div"/> <br/>
                    <button type='submit' className='ui green button'> Submit </button>
                </Form>
            </Formik>
            <Formik
                initialValues={initialValuesCoach}
                validationSchema={validationSchemaCoach}
                onSubmit={onSubmitCoach}>
                <Form className='form'><br/>
                    <h1 className='headers'>Add Coach</h1>
                    <label className='label'> Name: </label>
                    <Field  type='text' id='name' name='name' className='field'></Field><br/>
                    <ErrorMessage className='error' name='name' component="div"/>
                    <label className='label'> Coaching Position: </label>
                    <Field  type='text' id='coaching_position' name='coaching_position' className='field'></Field><br/>
                    <ErrorMessage className='error' name='coaching_position' component="div"/>
                    <label className='label'> Team: </label>
                    <Field  type='text' id='team_name' name='team_name' className='field'></Field><br/>
                    <ErrorMessage className='error' name='team_name' component="div"/><br/>
                    <button type='submit' className='ui green button'>Submit</button><br/><br/>
                </Form>
            </Formik>
            <Formik
                initialValues={initialValuesMatch}
                validationSchema={validationSchemaMatch}
                onSubmit={onSubmitMatch}>
                <Form className='form'>
                    <h1 className='headers'>Add Match</h1>
                    <label className='label'>Home Team: </label>
                    <Field type='text' id='home_team' name='home_team' className='field'></Field><br/>
                    <ErrorMessage className='error' name='home_team' component='div'/>
                    <label className='label'>Away Team: </label>
                    <Field type='text' id='away_team' name='away_team' className='field'></Field><br/>
                    <ErrorMessage className='error' name='away_team' component='div'/>
                    <label className='label'>Location: </label>
                    <Field type='text' id='location' name='location' className='field'></Field><br/>
                    <ErrorMessage className='error' name='location' component='div'/>
                    <label className='label'>Date: </label>
                    <Field type='text' id='date' name='date' className='field' placeholder='Year-Month-Day'></Field><br/>
                    <ErrorMessage className='error' name='date' component='div'/>
                    <button type='submit' className='ui green button'>Submit</button><br/><br/>
                </Form>
            </Formik>
        </div>
    )
}

export default Add