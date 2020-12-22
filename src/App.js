import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import './App.css';

function App() {

  const [basic, setBasic] = useState({});
  const [education, setEducation] = useState([]);
  const [educationVar, setEducationVar] = useState('');
  const [eduAdd, setEduAdd] = useState(false);
  const [dropDownElem, setDropDownElem] = useState('Select');

  const [experience, setExperience] = useState([]);
  const [expAdd, setExpAdd] = useState(false);
  const [experienceVar, setExperienceVar] = useState({});


  const logChange = (val) => {
    console.log(val)
  }

  const EducationField = (edu, i) => {
    return(
      <view key={i}>
        <br />
          <Typography style={{color: "white"}}>
            {edu}
          </Typography>
      </view>
    )
  }

  const ExperienceField = (exp, i) => {
    console.log(exp)
    return(
      <view key={i}>
        <Grid container style={{marginTop: '2vh'}}>
          <Grid item xs={3}><Typography style={{color: "white"}}>{exp.duration}</Typography></Grid>
          <Grid item xs={3}><Typography style={{color: "white"}}>{exp.company}</Typography></Grid>
          <Grid item xs={3}><Typography style={{color: "white"}}>{exp.position}</Typography></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </view>
    )
  }

  return (
    <div className="App">
      <div className="App-header">
        <form>
            <input type="text" id="name" name="name" style={{width: '30vw', marginTop: '2vh'}} onChange={(event) => {
              let basicCopy = basic
              basicCopy.name = event.target.value
              setBasic(basicCopy)
              }} placeholder="NAME" /> <br />
            <input type="text" id="email" name="email" style={{width: '30vw', marginTop: '2vh'}} onChange={(event) => {
              let basicCopy = basic
              basicCopy.email = event.target.value
              setBasic(basicCopy)
              }} placeholder="EMAIL" /> <br />
            <input type="text" id="address" name="address" style={{width: '30vw', marginTop: '2vh'}} onChange={(event) => {
              let basicCopy = basic
              basicCopy.address = event.target.value
            }} placeholder="ADDRESS" /> <br />
            <input type="text" id="phone" name="phone" style={{width: '30vw', marginTop: '2vh'}} onChange={(event) => {
              let basicCopy = basic
              basicCopy.phone = event.target.value
            }} placeholder="PHONE" /> <br />
        </form>
        <div style={{marginTop: '2vh'}}>
            <Typography style={{color: "white"}}>EDUCATION</Typography>
          {
            education.map(EducationField)
          }
          <div style={{marginTop: '2vh'}}>
            {eduAdd ? <AddCircleIcon style={{color: "white"}} onClick={() => setEduAdd(false)} /> : 
              <div style={{marginTop: '2vh'}}>
                <Grid container style={{marginTop: '2vh'}}>
                  <Grid item xs={3} style={{alignItems: 'left'}} >
                    <select value={dropDownElem} onChange={(event) => {setDropDownElem(event.target.value)}}>
                      <option value="Select">Select</option>
                      <option value="10">10</option>
                      <option value="12">12</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Other"> Other</option>
                    </select>
                  </Grid>
                  <Grid item xs={6} style={{alignItems: 'left'}}>
                    <input type="text" name="education" style={{width: '30vw'}} value={educationVar} onChange={(event) => {
                      setEducationVar(event.target.value)
                    }} placeholder="ADD EDUCATION" />
                  </Grid>
                  <Grid item xs={2}>
                    <input type="text" name="eduDuration" placeholder="duration" />
                  </Grid>
                  <Grid item xs={1} >
                    <Button variant="contained" onClick={() => {
                      if(educationVar.length > 3){
                        setEducation([...education, educationVar])
                        setEducationVar("")
                        setEduAdd(true)
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
                <Typography style={{color: "white"}}>EXPERIENCE</Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              </Grid>
              <Grid container style={{marginTop: '2vh'}}>
                  <Grid item xs={3}><Typography style={{color: "white"}}>Duration</Typography></Grid>
                  <Grid item xs={3}><Typography style={{color: "white"}}>Company</Typography></Grid>
                  <Grid item xs={3}><Typography style={{color: "white"}}>Position</Typography></Grid>
                  <Grid item xs={3}></Grid>
              </Grid>
                {
                  experience.map(ExperienceField)
                }
                <div>
                  {expAdd ? <AddCircleIcon style={{color: "white"}} onClick={() => setExpAdd(false)} /> : 
                    <div>
                      <Grid container style={{marginTop: '2vh'}}>
                        <Grid item xs={3}>
                          <input type="text" style={{width: "20vh"}} name="experience" placeholder="duration" onChange={(event) => {
                            let experienceVarCopy = experienceVar
                            experienceVarCopy.duration = event.target.value
                            setExperienceVar(experienceVarCopy)
                          }} />
                        </Grid>
                        <Grid item xs={3}>
                          <input type="text" style={{width: "20vh"}} name="experience" placeholder="company" onChange={(event) => {
                            let experienceVarCopy = experienceVar
                            experienceVarCopy.company = event.target.value
                            setExperienceVar(experienceVarCopy)
                          }} />
                        </Grid>
                        <Grid item xs={3}>
                          <input type="text" style={{width: "20vh"}} name="experience" placeholder="position" onChange={(event) => {
                            let experienceVarCopy = experienceVar
                            experienceVarCopy.position = event.target.value
                            setExperienceVar(experienceVarCopy)
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
                <Typography style={{color: "white"}}>SKILLS</Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              </Grid>
              <Grid container style={{marginTop: '2vh'}}>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <Select
                      name="form-field-name"
                      value="one"
                      onChange={(val) => logChange(val)}
                      options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={3}></Grid>
              </Grid>
              
                <div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
