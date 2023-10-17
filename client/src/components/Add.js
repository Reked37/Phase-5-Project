import React from 'react'
import {Formik, Field, ErrorMessage, Form} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

function Add({onPostPlayer, onPostCoach, onPostTeam}){
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
        fetch('/players',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(res =>res.json())
        .then(data=>{onPostPlayer(data)
        navigate('/players')})
    }
    //Team
    const initialValuesTeam={
        name: "",
        mascot: ''
    }
    const onSubmitTeam=values =>{
        fetch('/teams',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(res =>res.json())
        .then(data=>{onPostTeam(data)
        navigate('/teams')})
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
    const onSubmitCoach=values=>{
        fetch('/coaches',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(res =>res.json())
        .then(data=>{onPostCoach(data)
        navigate('/coaches')})
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
        </div>
    )
}

export default Add