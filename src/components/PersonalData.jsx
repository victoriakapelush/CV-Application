import '../App.css'

export default function PersonalData({data, handleData}) {
    return (
        <div className="inputsPersonalData">
            <h1>Personal Data</h1>
            <fieldset className='flex-row'>
                <input 
                    type="text"
                    placeholder="First Name"
                    value={data.info[0].text}
                    onChange={handleData} />
                <input 
                    type="text"
                    placeholder="Last Name"
                    value={data.info[1].text}
                    onChange={handleData} />
            </fieldset>
            <input className="occupation-input"
                type="text"
                placeholder="Occupation"
                value={data.info[2].text}
                onChange={handleData} />
            <input className="country-input"
                type="text"
                placeholder="Country"
                value={data.info[4].text}
                onChange={handleData} />
            <input className="website-input"
                type="text"
                placeholder="Website"
                value={data.info[5].text}
                onChange={handleData} />
            <input className="email-input"
                type="text"
                placeholder="Email"
                value={data.info[6].text}
                onChange={handleData} />
            <input className="number-input"
                type="text"
                placeholder="Phone number"
                value={data.info[7].text}
                onChange={handleData} />
            <textarea className="bio-input"
                type="text"
                placeholder="Bio"
                value={data.info[3].text}
                onChange={handleData} />
        </div>
    )
}