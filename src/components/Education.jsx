import { useState } from "react";
import ExperienceList from "./ExperienceList";
import Button from "./Button";
import "../styles/Experiences.scss";

function Education({ isEdit }) {
  const [experiences, setExperiences] = useState([
    {
      institution: "Bina Nusantara",
      major: "Computer Science",
      year: "2020-2024",
      details:
        "Describe what you did and had done during your time in the collage. Simply enter the most recent two years of your education.",
    },
  ]);
  const [institutionName, setinstitutionName] = useState("");
  const [major, setmajor] = useState("");
  const [year, setYear] = useState("");
  const [details, setDetails] = useState("");

  function handleAddExperience() {
    const newExperiences = {
      institution: institutionName,
      major: major,
      year: year,
      details: details,
    };

    setExperiences([...experiences, newExperiences]);
  }

  function handleUpdateExperience(index, updatedExperience) {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = updatedExperience;
    setExperiences(updatedExperiences);
  }

  return (
    <>
      {!isEdit ? (
        <div className="experiences">
          {experiences.map((experience, index) => (
            <ExperienceList
              isEdit={false}
              key={index}
              company={experience.institution}
              role={experience.major}
              year={experience.year}
              details={experience.details}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className="form-input">
            <input
              type="text"
              value={institutionName}
              placeholder="institution name"
              onChange={(e) => setinstitutionName(e.target.value)}
            ></input>
            <input
              type="text"
              value={major}
              placeholder="major"
              onChange={(e) => setmajor(e.target.value)}
            ></input>
            <input
              type="text"
              value={year}
              placeholder="apply year - finish year"
              onChange={(e) => setYear(e.target.value)}
            ></input>
            <textarea
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              rows={4}
              cols={50}
            ></textarea>
            <Button handleEditCv={handleAddExperience} isEdit={true} />
          </div>
          {experiences.map((experience, index) => (
            <ExperienceList
              isEdit={isEdit}
              key={index}
              company={experience.institution}
              role={experience.major}
              year={experience.year}
              details={experience.details}
              savedExperiences={(updatedExperience) =>
                handleUpdateExperience(index, updatedExperience)
              }
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Education;
