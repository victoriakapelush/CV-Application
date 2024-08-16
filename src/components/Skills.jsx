/* eslint-disable react/prop-types */
import '../App.css'

export default function Skills({data, handleSkills, addSkills}) {
    return (
        <div className='inputsPersonalData'>
            <h1>Skills</h1>
            {  
                data.skills.map((skills => (
                    <div key={skills.id}>
                        <input 
                            id={skills.id}
                            type="text"
                            placeholder="Skills"
                            name="Skills"
                            value={data.skills.text}
                            onChange={handleSkills} />
                    </div>
                )))
            }
             {<button className='button-add' onClick={addSkills}>+</button>}
        </div>
    )
}