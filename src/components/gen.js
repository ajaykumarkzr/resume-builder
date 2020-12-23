import React, { useState } from 'react';
import { Button, Card, Grid, Typography } from '@material-ui/core';
import Edit from './edit';
import './gen.css';

const Gen = (props) => {
    // const [dat, setDat] = useState(props.data)
    const [dat, setDat] = useState({
        basic: {
            name: 'ajay',
            address: 'pookkunniyil',
            email: 'ajaykumar@hmlom',
            phone: '9961060517'
        }, 
        education: [
            {
                class: '10',
                duration: '1 year',
                school: 'PTM HS',
                course: 'SSLC'
            }, {
                class: '12',
                duration: '1 year',
                school: 'chss chalavara',
                course: 'hse'
            }, {
                class: 'Graduation',
                duration: '4 year',
                school: 'jcet',
                course: 'B.Tech'
            }
        ],
        experience: [
            {
                company: 'quest',
                duration: '3 months',
                position: 'dev'
            }, {
                company: 'riafy',
                duration: '3 months',
                position: 'react dev'
            }
        ],
        skills: [
            {
                label: 'react',
                value: 'react'
            }, {
                label: 'react native',
                value: 'react native'
            }, {
                label: 'js',
                value: 'js'
            }
        ]
    })

    const [editEnabled, setEditEnabled] = useState(false);
    const editData = (value) => {
        setDat(value)
        setEditEnabled(false)
        props.editData(value)
    }
    
    const educationRender = (edu, i) => {
        return(
                        <Grid container key={i}>
                            <Grid item xs={3}><Typography className="field">{edu.class}</Typography></Grid>
                            <Grid item xs={3}><Typography className="field">{edu.duration}</Typography></Grid>
                            <Grid item xs={3}><Typography className="field">{edu.school}</Typography></Grid>
                            {edu.course ? <Grid item xs={3}><Typography className="field">{edu.course}</Typography></Grid> : null}
                        </Grid>
        );
    }

    const experienceRender = (exp, i) => {
        return(
            <Grid container key={i}>
                <Grid item xs={3}><Typography className="field">{exp.position}</Typography></Grid>
                <Grid item xs={3}><Typography className="field">{exp.duration}</Typography></Grid>
                <Grid item xs={3}><Typography className="field">{exp.company}</Typography></Grid>
            </Grid>
        );
    }

    const skillsRender = (skills, i) => {
        return(
            <Grid container key={i}>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}><Typography className="field">{skills.value}</Typography></Grid>
            </Grid>
        );
    }

    if(!editEnabled){
        return(
            <>
                <div>
                    <div>
                        <Button variant="contained" onClick={() => {setEditEnabled(true)}}>EDIT</Button>
                    </div>
                    <Card className="containerCard" elevation={6}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography className="fieldName">
                                    {dat.basic.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={8}></Grid>
                        </Grid>
                        <Grid container className="section">
                            <Grid item xs={4}>
                                <Typography className="fieldName">
                                    CONTACT
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className="field">
                                    {dat.basic.address}
                                </Typography>
                                <Typography className="field">
                                    {dat.basic.email}
                                </Typography>
                                <Typography className="field">
                                    {dat.basic.phone}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container className="section">
                            <Grid item xs={4}>
                                <Typography className="fieldName">
                                    EDUCATION
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                {dat.education.map(educationRender)}
                            </Grid>
                        </Grid>
                        <Grid container className="section">
                            <Grid item xs={4}>
                                <Typography className="fieldName">
                                    EXPERIENCE
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                {dat.experience.map(experienceRender)}
                            </Grid>
                        </Grid>
                        <Grid container className="section">
                            <Grid item xs={4}>
                                <Typography className="fieldName">
                                    SKILLS
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                {dat.skills.map(skillsRender)}
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </>
        );
    } else {
        return(
            <Edit data={dat} skillOptions={props.skillOptions} editData={(value) => editData(value)} />
        );
    }
}

export default Gen;