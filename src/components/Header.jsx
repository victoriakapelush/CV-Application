/* eslint-disable react/prop-types */
import '../App.css'

export default function Header(e) {
    return (
        <div className='header-container flex-column inputsPersonalData'>
            <div className='app-name flex-row'>
                <h1>Resume Builder</h1>
                <div className='image-div flex-row'>
                    <img src='./src/assets/user.png' onClick={e.setSampleData}></img>
                    <img src='./src/assets/file.png'></img>
                </div>
            </div>
            <p className='personal-link'>Developed by <a href="https://victoriakapelush.com" target='blank'>Victoria Kapelush</a></p>
        </div>
    )
}