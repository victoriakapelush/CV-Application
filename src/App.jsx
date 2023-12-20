import { useState } from 'react';
import PersonalData from './components/PersonalData.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
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
                name: "Position",
                text: ""
            },
            {
                name: "Company",
                text: ""
            },
            {
                name: "Years",
                text: ""
            },
            {
                name: "Description",
                text: ""
            }],
        education: [{
                name: "College",
                text: ""
            },
            {
                name: "Degree",
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
    
    const handleExperience = (e) => {
        setData({...data,
                  experience:data.experience.map(experiences => {
                      if(experiences.name === e.target.placeholder)
                        experiences.text = e.target.value
                        return experiences
                    })
        })
      }

      const handleEducation = (e) => {
        setData({...data,
                  education:data.education.map(educations => {
                      if(educations.name === e.target.placeholder)
                        educations.text = e.target.value
                        return educations
                    })
        })
      }

    return (
        <div className='container'>
            <div className="inputs flex-column">
                <div>
                    <PersonalData
                    data={data}
                    handleData={handleData} />
                </div>
                <div>
                    <Experience
                    data={data}
                    handleExperience={handleExperience} />
                </div>
                <div>
                    <Education
                    data={data}
                    handleEducation={handleEducation} />
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
                    <h3 className='position'>{data.experience[0].text}</h3>
                    <h4 className='company'>{data.experience[1].text}</h4>
                    <p className="years">{data.experience[2].text}</p>
                    <p className="description">{data.experience[3].text}</p>
                </div>
                <div className='divider'></div>
                <div className='education-section flex-column'>
                    <h3 className='college'>{data.education[0].text}</h3>
                    <h4 className='degree'>{data.education[1].text}</h4>
                </div>
                <div className='divider'></div>
            </div>
        </div>
    )
}
