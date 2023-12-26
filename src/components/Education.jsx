/* eslint-disable react/prop-types */
import '../App.css'

// eslint-disable-next-line react/prop-types
export default function Education({data, handleEducation, addEducation}) {
    return (
        <div className='inputsPersonalData'>
            <h1>Education</h1>
            {
                data.education.map((education => (
                    <div key={education.id}>
                        <input 
                            id={education.id}
                            type="text"
                            placeholder="College"
                            name="college"
                            // eslint-disable-next-line react/prop-types
                            value={data.education.college}
                            onChange={(e)=>handleEducation(e,education.id)} />
                        <input 
                            id={education.id}
                            type="text"
                            placeholder="Degree"
                            name="degree"
                            // eslint-disable-next-line react/prop-types
                            value={data.education.degree}
                            onChange={(e)=>handleEducation(e,education.id)} />
                    </div>
                )))
            }
                {<button className='button-add' onClick={addEducation}>+</button>}
        </div>
    )
}