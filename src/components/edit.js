import React, { useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Edit = (props) => {
    const [dat, setDat] = useState(props.data)
    const animatedComponents = makeAnimated();


    const education = (edu, i) => {
        return(
          <div key={i}>
            <br />
            <Grid container>
                <Grid item xs={3}>
                    <select value={dat.education[i].class} onChange={(event) => {
                        let educationCopy = dat.education
                        educationCopy[i].class = event.target.value
                        setDat({...dat, education: educationCopy})
                    }}>
                        <option value="Select">Select</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Other"> Other</option>
                    </select>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" name="school" value={dat.education[i].school} onChange={(event) => {
                        let educationCopy = dat.education
                        educationCopy[i].school = event.target.value
                        setDat({...dat, education: educationCopy})
                    }}/>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" name="course" value={dat.education[i].course} onChange={(event) => {
                        let educationCopy = dat.education
                        educationCopy[i].course = event.target.value
                        setDat({...dat, education: educationCopy})
                    }} />
                </Grid>
                <Grid item xs={2}>
                    <input type="text" name="duration" value={dat.education[i].duration} onChange={(event) => {
                        let educationCopy = dat.education
                        educationCopy[i].duration = event.target.value
                        setDat({...dat, education: educationCopy})
                    }} />
                </Grid>
                <Grid item xs={1}>
                    <DeleteForeverIcon style={{color: 'red'}} onClick={() => {
                        let educationCopy = dat.education
                        if(educationCopy[i] === edu){
                            educationCopy.splice(i, 1)
                            console.log(educationCopy)
                            setDat({...dat, education: educationCopy})
                        } else {
                            alert('podo pullee')
                        }
                    }} />
                </Grid>
            </Grid>
          </div>
        )
      }

      const experience = (exp, i) => {
        return(
          <div key={i}>
            <br />
            <Grid container>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" name="company" value={dat.experience[i].company} onChange={(event) => {
                        let experienceCopy = dat.experience
                        experienceCopy[i].company = event.target.value
                        setDat({...dat, experience: experienceCopy})
                    }}/>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" name="position" value={dat.experience[i].position} onChange={(event) => {
                        let experienceCopy = dat.experience
                        experienceCopy[i].position = event.target.value
                        setDat({...dat, experience: experienceCopy})
                    }} />
                </Grid>
                <Grid item xs={2}>
                    <input type="text" name="duration" value={dat.experience[i].duration} onChange={(event) => {
                        let experienceCopy = dat.experience
                        experienceCopy[i].duration = event.target.value
                        setDat({...dat, experience: experienceCopy})
                    }} />
                </Grid>
                <Grid item xs={1}>
                    <DeleteForeverIcon style={{color: 'red'}} onClick={() => {
                        let experienceCopy = dat.experience
                        if(experienceCopy[i] === exp){
                            experienceCopy.splice(i, 1)
                            setDat({...dat, experience: experienceCopy})
                        } else {
                            alert('podo pullee')
                        }
                    }} />
                </Grid>
            </Grid>

          </div>
        )
      }


    return(
        <>
            <div style={{textAlign: 'center'}}>
                <input type='text' id='name' placeholder="name" value={dat.basic.name} onChange={(event) => {
                    setDat({...dat, basic: {...dat.basic, name: event.target.value}})
                }} /><br />
                <input type='text' id='address' placeholder="address" value={dat.basic.address} onChange={(event) => {
                    setDat({...dat, basic: {...dat.basic, address: event.target.value}})
                }} /><br />
                <input type='text' id='phone' placeholder="phone" value={dat.basic.phone} onChange={(event) => {
                    setDat({...dat, basic: {...dat.basic, phone: event.target.value}})
                }} /><br />
                <input type='text' id='email' placeholder="email" value={dat.basic.email} onChange={(event) => {
                    setDat({...dat, basic: {...dat.basic, email: event.target.value}})
                }} /><br />
                <div style={{marginTop: '2vh'}}>
                    <Typography>Education</Typography>
                    {dat.education.map(education)}
                </div>
                <div style={{marginTop: '2vh'}}>
                    <Typography>Experience</Typography>
                    {dat.experience.map(experience)}
                </div>
                <div style={{marginTop: '2vh'}}>
                    <Grid container>
                        <Grid item xs={6} style={{justifyContent: 'center'}}>
                            <Typography>SKILLS</Typography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                    <Grid container style={{marginTop: '2vh'}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            
                            <Select
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={dat.skills}
                                isMulti={true}                
                                options={props.skillOptions}
                                onChange={(value) => {setDat({...dat, skills: value})}}
                            />

                            
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </div>
                <div style={{marginTop: '2vh'}}>
                    <Button variant='outlined' onClick={() => {
                        console.log(dat)
                        props.editData(dat)
                    }}>save</Button>
                </div>
            </div>
            
        </>
    );
}

export default Edit;