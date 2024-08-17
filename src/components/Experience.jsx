/* eslint-disable react/prop-types */
import "../App.css";

export default function Experience({
  data,
  addExperience,
  handleExperience,
  deleteExperience,
}) {
  return (
    <div className="inputsPersonalData">
      <h1>Work Experience</h1>
      {data.experience.map((experience) => (
        <div key={experience.id} className="extra-margin">
          <input
            id={experience.id}
            type="text"
            placeholder="Position"
            name="position"
            value={data.experience.position}
            onChange={(e) => handleExperience(e, experience.id)}
          />
          <input
            id={experience.id}
            type="text"
            placeholder="Company Name"
            name="company"
            value={data.experience.company}
            onChange={(e) => handleExperience(e, experience.id)}
          />
          <input
            id={experience.id}
            type="text"
            placeholder="Years"
            name="years"
            value={data.experience.years}
            onChange={(e) => handleExperience(e, experience.id)}
          />
          <textarea
            className="bio-input"
            id={experience.id}
            type="text"
            placeholder="Description"
            name="description"
            value={data.experience.description}
            onChange={(e) => handleExperience(e, experience.id)}
          />
        </div>
      ))}
      <div className="flex-row add-del-btns">
        {
          <button className="button-add" onClick={addExperience}>
            +
          </button>
        }
        {
          <button
            className="button-add"
            onClick={() =>
              deleteExperience(data.experience[data.experience.length - 1]?.id)
            }
          >
            -
          </button>
        }
      </div>
    </div>
  );
}
