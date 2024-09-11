import { useState } from "react";
import ExperienceList from "./ExperienceList";
import Button from "./Button";
import "../styles/Experiences.scss";
function Experience({ isEdit }) {
  const [experiences, setExperiences] = useState([
    {
      company: "Big IT Solution",
      role: "Front end Developer",
      year: "2020-2024",
      details:
        "Explain what you do, how many people you work with or lead, and what you have accomplished for the company.",
    },
  ]);
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [year, setYear] = useState("");
  const [details, setDetails] = useState("");

  function handleAddExperience() {
    const newExperiences = {
      company: companyName,
      role: role,
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
              isCompany={true}
              isEdit={false}
              key={index}
              company={experience.company}
              role={experience.role}
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
              value={companyName}
              placeholder="company name"
              onChange={(e) => setCompanyName(e.target.value)}
            ></input>
            <input
              type="text"
              value={role}
              placeholder="role"
              onChange={(e) => setRole(e.target.value)}
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
              isCompany={true}
              isEdit={isEdit}
              key={index}
              company={experience.company}
              role={experience.role}
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

export default Experience;
