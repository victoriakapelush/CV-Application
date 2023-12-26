/* eslint-disable react/prop-types */
import '../App.css'

// eslint-disable-next-line react/prop-types
export default function Experience({data, addExperience, handleExperience}) {
    return (
        <div className='inputsPersonalData'>
            <h1>Work Experience</h1>
            {
                data.experience.map((experience => 
                    <div key={experience.id}>
                        <input 
                            id={experience.id}
                            type="text"
                            placeholder="Position"
                            name="position"
                            // eslint-disable-next-line react/prop-types
                            value={data.experience.position}
                            onChange={(e)=>handleExperience(e, experience.id)} />
                        <input 
                            id={experience.id}
                            type="text"
                            placeholder="Company"
                            name="company"
                            // eslint-disable-next-line react/prop-types
                            value={data.experience.company}
                            onChange={(e)=>handleExperience(e, experience.id)} />
                        <input 
                            id={experience.id}
                            type="text"
                            placeholder="Years"
                            name="years"
                            // eslint-disable-next-line react/prop-types
                            value={data.experience.years}
                            onChange={(e)=>handleExperience(e, experience.id)} />
                        <input 
                            id={experience.id}
                            type="text"
                            placeholder="Description"
                            name="description"
                            // eslint-disable-next-line react/prop-types
                            value={data.experience.description}
                            onChange={(e)=>handleExperience(e, experience.id)} />
                    </div>
                    ))
            }
                {<button className='button-add' onClick={addExperience}>+</button>}
        </div>
    )
}