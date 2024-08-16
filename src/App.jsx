import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import PersonalData from './components/PersonalData.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Header from './components/Header.jsx'
import './App.css'
import React, { useRef } from 'react';

export default function App() {
    const contentRef = useRef();
    
    const [data, setData] = useState({
        info: [{
            name: "First Name",
            text: ""
        },
        {
            name: "Last Name",
            text: ""
        },
        {
            name: "Occupation",
            text: ""
        },
        {
            name: "Bio",
            text: ""
        },
        {
            name: "Country",
            text: ""
        },
        {
            name: "Website",
            text: ""
        },
        {
            name: "Email",
            text: ""
        },
        {
            name: "Number",
            text: ""
        }],
        experience: [{
            id: uuidv4(),
            position: "",
            company: "",
            years: "",
            description: ""
        }],
        education: [{
            id: uuidv4(),
            college: "",
            degree: ""
        }],
        skills: [{
            id: uuidv4(),
            name: "Skills",
            text: ""
        }]

    });

    const handleData = (e) => {
        setData({...data,
                  info:data.info.map(element => {
                      if(element.name === e.target.placeholder)
                        element.text = e.target.value
                        return element
                    })
        })
      }
    
    const handleExperience = (e, id) => {
        setData({...data,
                  experience:data.experience.map(experience => {
                      if(experience.id === id)
                      experience[e.target.name] = e.target.value
                        return experience
                    })
        })
      }

      const addExperience = () => {
        setData({...data, experience: [...data.experience, {
                                            id: uuidv4(),
                                            position: "",
                                            company: "",
                                            years: "",
                                            description: ""
        }]})
      }

      const handleEducation = (e,id) =>{
        setData({...data,
                  education: data.education.map(education =>{
                    if(education.id === id)
                      education[e.target.name] = e.target.value
                    return education
                  })})
      }

      const addEducation = () => {
        setData({...data,education: [...data.education , {
                                            id: uuidv4(),
                                            college: "",
                                            degree: ""
        }]})
      }

      const handleSkills = (e) =>{
        setData({...data,
                  skills: data.skills.map(skill =>{
                    if(skill.id === e.target.id && skill.name === e.target.placeholder)
                      skill.text = e.target.value
                    return skill
                  })
        })
      }
      const addSkills = () =>{
        setData({...data,skills : [...data.skills ,{id: uuidv4(), name:"Skills", text: ""}]})
      }

    return (
        <div className='container'>
            <div className="inputs flex-column">
                <div>
                    <Header contentRef={contentRef} />
                </div>
                <div>
                    <PersonalData
                    data={data}
                    handleData={handleData} />
                </div>
                <div>
                    <Experience
                    data={data}
                    handleExperience={handleExperience} 
                    addExperience={addExperience} />
                </div>
                <div>
                    <Education
                    data={data}
                    handleEducation={handleEducation} 
                    addEducation={addEducation} />
                </div>
                <div>
                    <Skills 
                    data={data}
                    handleSkills={handleSkills}
                    addSkills={addSkills} />
                </div>
            </div>
            <div className='app' ref={contentRef} style={ {paddingTop: "2rem"}}>
                <div className="name-box flex-row">
                    <h1 className="name">{data.info[0].text || "Alisa"}</h1>
                    <h1 className="name">{data.info[1].text || "Ko"}</h1>
                </div>
                <h3 className='occupation'>{data.info[2].text || "Software Developer"}</h3>
                <div className='contacts-box flex-row'>
                <p className="country">{data.info[4].text || "New York City, NY"}</p>
                <p className="email">{data.info[6].text || "youremail@email.com"}</p>
                <p className="number">{data.info[7].text || "123-456-7899"}</p>
                <p className="website">{data.info[5].text || "www.yourwebsite.com"}</p>
                </div>
                <p className="bio">{data.info[3].text || "I am a passionate Software Developer with a Master's in Computer Science. Proficient in JavaScript and experienced in React and Node.js. Eager to apply skills honed through multiple projects to contribute innovative solutions in a professional setting. Ready to tackle challenges and grow in the dynamic field of software development."}</p>
                <div className='experience-section flex-column'>
                    <h1>Experience</h1>
                    <div className='education-box flex-column'>
                    {data.experience.map ((experience => (
                        <>
                            <div className='exp-row flex-row'>
                                <h3 className='position'>{experience.position || "Project Manager Intern"}</h3>
                                <h4 className='company'>{experience.company || "The United Nations"}</h4>
                                <p className="years">{experience.years || "01/2019 - 06/2019"}</p>
                            </div>
                                <p className="description">{experience.description || "Developed comprehensive project plans outlining timelines, milestones, and deliverables. Identified and allocated resources efficiently to ensure project success. Conducted risk assessments and implemented mitigation strategies."}</p>
                        </>
                    )))}
                    </div>
                </div>
                <div className='education-section flex-column'>
                    <h1>Formal Education</h1>
                    <div className='flex-column'>
                    {data.education.map ((education => (
                        <div className='education-container flex-row'>
                            <h3 className='college'>{education.college || "Brooklyn College, NY"}</h3>
                            <h4 className='degree'>{education.degree || "Master's in Computer Science"}</h4>
                        </div>
                    )))}
                    </div>
                </div>
                <div className='education-section flex-column'>
                    <h1>Skills</h1>
                    <div className='skill-container flex-row'>
                    {data.skills.map ((skill => (
                        <h3 className='skill'>{skill.text || "JavaScript, React, MongoDB, Python"}</h3>
                    )))}
                    </div>
                </div>
            </div>
        </div>
    )
}
