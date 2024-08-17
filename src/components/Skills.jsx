/* eslint-disable react/prop-types */
import "../App.css";

export default function Skills({
  data,
  handleSkills,
  addSkills,
  deleteSkills,
}) {
  return (
    <div className="inputsPersonalData">
      <h1>Skills</h1>
      {data.skills.map((skills) => (
        <div key={skills.id}>
          <input
            id={skills.id}
            type="text"
            placeholder="Skills"
            name="Skills"
            value={data.skills.text}
            onChange={handleSkills}
          />
        </div>
      ))}
      <div className="flex-row add-del-btns">
        {
          <button className="button-add" onClick={addSkills}>
            +
          </button>
        }
        {
          <button
            className="button-add"
            onClick={() =>
              deleteSkills(data.skills[data.skills.length - 1]?.id)
            }
          >
            -
          </button>
        }
      </div>
    </div>
  );
}
