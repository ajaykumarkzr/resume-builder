import React, { useState, useRef } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useReactToPrint } from 'react-to-print';
import Edit from './edit';
import EditIcon from '@material-ui/icons/Edit';
import './gen.css';

const Gen = (props) => {
    const [dat, setDat] = useState(props.data)

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

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
                            <Grid item xs={4}><Typography className="field">{edu.school}</Typography></Grid>
                            {edu.course ? <Grid item xs={2}><Typography className="field">{edu.course}</Typography></Grid> : null}
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
                    <div style={{marginTop: '2rem', marginRight: '3rem', display: 'flex', justifyContent: 'flex-end'}}>
                        <EditIcon variant="contained" onClick={() => {setEditEnabled(true)}}>EDIT</EditIcon>
                    </div>
                    <div className="containerCard" ref={componentRef}>
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
                    </div>
                    <div style={{textAlign: 'center', marginTop: '2vh'}}>
                        <Button variant='contained' onClick={() => handlePrint()} >PRINT</Button>
                    </div>
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