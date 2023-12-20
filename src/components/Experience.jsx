/* eslint-disable react/prop-types */
import '../App.css'

// eslint-disable-next-line react/prop-types
export default function Experience({data, addExperience, handleExperience}) {
    return (
        <div className='inputsPersonalData'>
            <h1>Work Experience</h1>
            <input 
                type="text"
                placeholder="Position"
                name="position"
                // eslint-disable-next-line react/prop-types
                value={data.experience[0].text}
                onChange={handleExperience} />
                <input 
                type="text"
                placeholder="Company"
                name="company"
                // eslint-disable-next-line react/prop-types
                value={data.experience[1].text}
                onChange={handleExperience} />
                <input 
                type="text"
                placeholder="Years"
                name="years"
                // eslint-disable-next-line react/prop-types
                value={data.experience[2].text}
                onChange={handleExperience} />
                <input 
                type="text"
                placeholder="Description"
                name="description"
                // eslint-disable-next-line react/prop-types
                value={data.experience[3].text}
                onChange={handleExperience} />
                <button className='button-add' onClick={addExperience}>+</button>
        </div>
    )
}