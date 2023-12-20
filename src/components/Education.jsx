/* eslint-disable react/prop-types */
import '../App.css'

// eslint-disable-next-line react/prop-types
export default function Education({data, handleEducation}) {
    return (
        <div className='inputsPersonalData'>
            <h1>Education</h1>
                <input 
                type="text"
                placeholder="College"
                name="College"
                // eslint-disable-next-line react/prop-types
                value={data.education[0].text}
                onChange={handleEducation} />
                <input 
                type="text"
                placeholder="Degree"
                name='Degree'
                // eslint-disable-next-line react/prop-types
                value={data.education[1].text}
                onChange={handleEducation} />
                <button className='button-add'>+</button>
        </div>
    )
}