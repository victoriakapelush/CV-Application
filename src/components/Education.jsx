/* eslint-disable react/prop-types */
import "../App.css";

export default function Education({
  data,
  handleEducation,
  addEducation,
  deleteEducation,
}) {
  return (
    <div className="inputsPersonalData">
      <h1>Education</h1>
      {data.education.map((education) => (
        <div key={education.id} className="extra-margin">
          <input
            id={education.id}
            type="text"
            placeholder="College"
            name="college"
            value={data.education.college}
            onChange={(e) => handleEducation(e, education.id)}
          />
          <input
            id={education.id}
            type="text"
            placeholder="Degree"
            name="degree"
            value={data.education.degree}
            onChange={(e) => handleEducation(e, education.id)}
          />
        </div>
      ))}
      <div className="flex-row add-del-btns">
        {
          <button className="button-add" onClick={addEducation}>
            +
          </button>
        }
        {
          <button
            className="button-add"
            onClick={() =>
              deleteEducation(data.education[data.education.length - 1]?.id)
            }
          >
            -
          </button>
        }
      </div>
    </div>
  );
}
