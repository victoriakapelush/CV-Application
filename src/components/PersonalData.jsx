import '../App.css'

// eslint-disable-next-line react/prop-types
export default function PersonalData({data, handleData}) {
    return (
        <div className="inputsPersonalData">
            <h1>Personal Data</h1>
            <fieldset className='groupped-name flex-row'>
                <input 
                type="text"
                placeholder="First Name"
                // eslint-disable-next-line react/prop-types
                value={data.info[0].text}
                onChange={handleData} />
                <input 
                type="text"
                placeholder="Last Name"
                // eslint-disable-next-line react/prop-types
                value={data.info[1].text}
                onChange={handleData} />
            </fieldset>
            <input className="occupation-input"
            type="text"
            placeholder="Occupation"
            // eslint-disable-next-line react/prop-types
            value={data.info[2].text}
            onChange={handleData} />
            <input className="country-input"
            type="text"
            placeholder="Country"
            // eslint-disable-next-line react/prop-types
            value={data.info[4].text}
            onChange={handleData} />
            <input className="website-input"
            type="text"
            placeholder="Website"
            // eslint-disable-next-line react/prop-types
            value={data.info[5].text}
            onChange={handleData} />
            <input className="email-input"
            type="text"
            placeholder="Email"
            // eslint-disable-next-line react/prop-types
            value={data.info[6].text}
            onChange={handleData} />
            <input className="number-input"
            type="text"
            placeholder="Number"
            // eslint-disable-next-line react/prop-types
            value={data.info[7].text}
            onChange={handleData} />
            <input className="bio-input"
            type="text"
            placeholder="Bio"
            // eslint-disable-next-line react/prop-types
            value={data.info[3].text}
            onChange={handleData} />
        </div>
    )
}