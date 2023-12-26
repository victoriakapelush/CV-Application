import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import PersonalData from './components/PersonalData.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Header from './components/Header.jsx'
import './App.css'

export default function App() {
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

    function setSampleData (e) {
        setData({
            info: [{
                name: "First Name",
                text: "Victoria"
            },
            {
                name: "Last Name",
                text: "Kapelush"
            },
            {
                name: "Occupation",
                text: "Software Developer"
            },
            {
                name: "Bio",
                text: "I am a passionate Software Developer with a Master's in Computer Science. Proficient in JavaScript and experienced in React and Node.js. Eager to apply skills honed through multiple projects to contribute innovative solutions in a professional setting. Ready to tackle challenges and grow in the dynamic field of software development."
            },
            {
                name: "Country",
                text: "New York, USA"
            },
            {
                name: "Website",
                text: "https://victoriakapelush.com"
            },
            {
                name: "Email",
                text: "dev123@gmail.com"
            },
            {
                name: "Number",
                text: "+1(212) 222-2222"
            }],
            experience: [{
                id: uuidv4(),
                position: "Project Manager",
                company: "The United Nations",
                years: "01/2019 - 06/2019",
                description: "Developed comprehensive project plans outlining timelines, milestones, and deliverables. Identified and allocated resources efficiently to ensure project success. Conducted risk assessments and implemented mitigation strategies."
            }],
            education: [{
                id: uuidv4(),
                college: "Brooklyn College, NY, USA",
                degree: "Master's in Computer Science"
            },
            {
                id: uuidv4(),
                college: "Gomel State Technical University, Belarus",
                degree: "Bachelor's in Financial Management"
            }],
            skills: [{
                id: uuidv4(),
                name: "Skills",
                text: "JavaScript"
            }, 
            {
                id: uuidv4(),
                name: "Skills",
                text: "React"
            },
            {
                id: uuidv4(),
                name: "Skills",
                text: "CSS"
            }]
            
        }),
        e = ""
    }

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
                    <Header 
                    setSampleData={setSampleData}/>
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
            <div className='app'>
                <div className="name-box flex-row">
                    <h1 className="name">{data.info[0].text}</h1>
                    <h1 className="name">{data.info[1].text}</h1>
                </div>
                <h3 className='occupation'>{data.info[2].text}</h3>
                <div className='contacts-box flex-row'>
                <p className="country">{data.info[4].text}</p>
                <p className="email">{data.info[6].text}</p>
                <p className="number">{data.info[7].text}</p>
                <p className="website">{data.info[5].text}</p>
                </div>
                <p className="bio">{data.info[3].text}</p>
                <div className='divider'></div>
                <div className='experience-section flex-column'>
                    <h1>Experience</h1>
                    <div className='education-box flex-column'>
                    {data.experience.map ((experience => (
                        <>
                            <div className='exp-row flex-row'>
                                <h3 className='position'>{experience.position}</h3>
                                <h4 className='company'>{experience.company}</h4>
                                <p className="years">{experience.years}</p>
                            </div>
                                <p className="description">{experience.description}</p>
                        </>
                    )))}
                    </div>
                </div>
                <div className='divider'></div>
                <div className='education-section flex-column'>
                    <h1>Formal Education</h1>
                    <div className='flex-column'>
                    {data.education.map ((education => (
                        <div className='education-container flex-row'>
                            <h3 className='college'>{education.college}</h3>
                            <h4 className='degree'>{education.degree}</h4>
                        </div>
                    )))}
                    </div>
                </div>
                <div className='divider'></div>
                <div className='education-section flex-column'>
                    <h1>Skills</h1>
                    <div className='skill-container flex-row'>
                    {data.skills.map ((skill => (
                        <h3 className='skill'>{skill.text}</h3>
                    )))}
                    </div>
                </div>
            </div>
        </div>
    )
}
