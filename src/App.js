import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import Gen from './components/gen';
import './App.css';

function App() {

  const [basic, setBasic] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [education, setEducation] = useState([]);
  const [educationVar, setEducationVar] = useState({
    class: '',
    school: '',
    duration: '',
    course: ''
  });
  const [eduAdd, setEduAdd] = useState(false);
  const [dropDownElem, setDropDownElem] = useState('Select');

  const [skills, setSkills] = useState(null);

  const [experience, setExperience] = useState([]);
  const [expAdd, setExpAdd] = useState(false);
  const [experienceVar, setExperienceVar] = useState({});

  const options = [
    { value: 'react', label: 'react' },
    { value: 'react native', label: 'react native' },
    { value: 'java', label: 'java' },
    { value: 'javascript', label: 'javascript' },
    { value: 'C', label: 'C' },
    { value: 'C++', label: 'C++' },
    { value: 'C#', label: 'C#' },
    { value: 'Python', label: 'Python' },
    { value: 'MYSQL', label: 'MYSQL' },
    { value: 'Dart', label: 'Dart' },
    { value: 'Flutter', label: 'Flutter' },
    { value: 'Linux', label: 'Linux' },
    { value: 'git', label: 'git' },
  ];
  const animatedComponents = makeAnimated();

  
  const [submitted, SetSubmitted] = useState(false);
  const [submitData, setSubmitData] = useState(null);

  const editData = (i) => {
    setBasic(i.basic)
    setEducation(i.education)
    setExperience(i.experience)
    setSkills(i.skills)
    setEduAdd(true)
    setExpAdd(true)
    SetSubmitted(false)
  }

  const EducationField = (edu, i) => {
    return(
      <div key={i}>
        <br />
        <Grid container>
          <Grid item xs={3}>
            <select value={education[i].class} onChange={(event) => {
              let eduCopy = education
              eduCopy[i].class = event.target.value
              setEducation(eduCopy)
            }}>
              <option value="Select">Select</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="Graduation">Graduation</option>
              <option value="Other"> Other</option>
            </select>
          </Grid>
          <Grid item xs={3}>
            <TextField defaultValue={education[i].school} onChange={(event) => {
              let eduCopy = education
              eduCopy[i].school = event.target.value
              setEducation(eduCopy)
            }}>
              {edu.school}
            </TextField>
          </Grid>
          <Grid item xs={3}><TextField defaultValue={education[i].duration} onChange={(event) => {
            let eduCopy = education
            eduCopy[i].duration = event.target.value
            setEducation(eduCopy)
          }} /></Grid>
          <Grid item xs={3}><TextField defaultValue={education[i].course} onChange={(event) => {
            let eduCopy = education
            eduCopy[i].course = event.target.value
            setEducation(eduCopy)
            console.log(education)
          }} /></Grid>
        </Grid>
      </div>
    )
  }

  const ExperienceField = (exp, i) => {
    return(
      <div key={i}>
        <Grid container style={{marginTop: '2vh', }}>
          <Grid item xs={3}><TextField defaultValue={exp.duration} onChange={(event) => {
            let expCopy = experience
            expCopy[i].duration = event.target.value
            setExperience(expCopy)
          }} /></Grid>
          <Grid item xs={3}><TextField defaultValue={exp.company} onChange={(event) => {
            let expCopy = experience
            expCopy[i].company = event.target.value
            setExperience(expCopy)
          }} /></Grid>
          <Grid item xs={3}><TextField defaultValue={exp.position} onChange={(event) => {
            let expCopy = experience
            expCopy[i].position = event.target.value
            setExperience(expCopy)
          }} /></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    )
  }

  if (!submitted){
  return (
    <div className="App">
      <div className="App-header">
        <form>
            <TextField type="text" id="name" name="name" value={basic.name} style={{width: '30vw', marginTop: '2vh'}} onChange={(event) => {
                setBasic({...basic, name: event.target.value})
              }} placeholder="NAME" /> <br />
            <TextField type="text" id="email" name="email" value={basic.email} style={{width: '30vw', marginTop: '2vh'}} onChange={(event) => {
                setBasic({...basic, email: event.target.value})
              }} placeholder="EMAIL" /> <br />
            <TextField type="text" id="address" name="address" value={basic.address} style={{width: '30vw', marginTop: '2vh'}} onChange={(event) => {
              setBasic({...basic, address: event.target.value})
            }} placeholder="ADDRESS" /> <br />
            <TextField type="text" id="phone" name="phone" value={basic.phone} style={{width: '30vw', marginTop: '2vh'}} onChange={(event) => {
              setBasic({...basic, phone: event.target.value})
            }} placeholder="PHONE" /> <br />
        
        <div style={{marginTop: '2vh'}}>
            <Typography>EDUCATION</Typography>
          {
            education.map(EducationField)
          }
          <div style={{marginTop: '2vh'}}>
            {eduAdd ? <AddCircleIcon onClick={() => setEduAdd(false)} /> : 
              <div style={{marginTop: '2vh'}}>
                <Grid container style={{marginTop: '2vh'}}>
                  <Grid item xs={3} style={{alignItems: 'left'}} >
                    <select value={dropDownElem} onChange={(event) => {
                      setEducationVar({...educationVar, class: event.target.value})
                      setDropDownElem(event.target.value)
                    }}>
                      <option value="Select">Select</option>
                      <option value="10">10</option>
                      <option value="12">12</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Other"> Other</option>
                    </select>
                  </Grid>
                  <Grid item xs={4} style={{alignItems: 'left'}}>
                    <TextField type="text" required={true} name="education" style={{width: '30vw'}} value={educationVar.school} onChange={(event) => {
                      setEducationVar({...educationVar, school: event.target.value})
                    }} placeholder="ADD SCHOOL" />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField type="text" name="" placeholder="course" onChange={(event) => {
                      setEducationVar({...educationVar, course: event.target.value})
                    }} />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField type="text" name="eduDuration" placeholder="duration" onChange={(event) => {
                      setEducationVar({...educationVar, duration: event.target.value})
                    }} />
                  </Grid>
                  <Grid item xs={1} >
                    <Button variant="contained" onClick={async () => {
                      if(educationVar.school.length > 2){
                        await setEducation([...education, educationVar])
                        await setEducationVar({
                          class: '',
                          school: '',
                          duration: ''
                        })
                        await setEduAdd(true)
                      } else {
                        alert('add valid details')
                      }
                    }}>ADD</Button>
                  </Grid>
                </Grid>
              </div>
            }
            </div>


            <div>
              <Grid container style={{marginTop: '2vh'}}>
                <Grid item xs={3} style={{display: 'flex', justifyContent: 'center'}}>
                </Grid>
              <Grid item xs={6} style={{justifyContent: 'center'}}>
                <Typography>EXPERIENCE</Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              </Grid>
              <Grid container style={{marginTop: '2vh'}}>
                  <Grid item xs={3}><Typography>Duration</Typography></Grid>
                  <Grid item xs={3}><Typography>Company</Typography></Grid>
                  <Grid item xs={3}><Typography>Position</Typography></Grid>
                  <Grid item xs={3}></Grid>
              </Grid>
              <div style={{marginTop: '2vh'}}>
                {
                  experience.map(ExperienceField)
                }
                </div>
                <div>
                  {expAdd ? <AddCircleIcon onClick={() => setExpAdd(false)} /> : 
                    <div>
                      <Grid container style={{marginTop: '2vh'}}>
                        <Grid item xs={3}>
                          <TextField type="text" style={{width: "20vh"}} name="experience" placeholder="duration" onChange={(event) => {
                            setExperienceVar({...experienceVar, duration: event.target.value})
                          }} />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField type="text" required={true} style={{width: "20vh"}} name="experience" placeholder="company" onChange={(event) => {
                            setExperienceVar({...experienceVar, company: event.target.value})
                          }} />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField type="text" style={{width: "20vh"}} name="experience" placeholder="position" onChange={(event) => {
                            setExperienceVar({...experienceVar, position: event.target.value})
                          }} />
                        </Grid>
                        <Grid item xs={2} style={{alignItems: 'left'}}>
                        </Grid>
                        <Grid item xs={1} >
                          <Button variant="contained" onClick={() => {
                            if(experienceVar){
                              setExperience([...experience, experienceVar])
                              setExperienceVar({})
                              setExpAdd(true)
                            } else {
                              alert('add valid details')
                            }
                          }}>ADD</Button>
                        </Grid>
                      </Grid>
                    </div>
                  }
                  </div>
            </div>


            <div>
              <Grid container style={{marginTop: '2vh'}}>
                <Grid item xs={3} style={{display: 'flex', justifyContent: 'center'}}>
                </Grid>
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
                      defaultValue={skills}
                      isMulti={true}                
                      options={options}
                      onChange={setSkills}
                    />

                    
                  </Grid>
                  <Grid item xs={3}></Grid>
              </Grid>
                <div>

                </div>
            </div>
        </div>
        <div style={{marginTop: '2vh'}}>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Button variant='contained' type="submit" onClick={() => {
                if(education.length > 0 && experience.length > 0) {
                  let toSubmit = {
                    basic,
                    education,
                    experience,
                    skills
                  }
                  setSubmitData(toSubmit)
                  SetSubmitted(true)
                } else {
                  alert('You Should Add details about education and experience')
                }
              }}>SUBMIT</Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
        </form>
      </div>
    </div>
  );} else {
    return(
      <div>
        <div>
          <Gen data={submitData} skillOptions={options} editData={(i) => editData(i)} />
        </div>
      </div>
    );
  }
}

export default App;
