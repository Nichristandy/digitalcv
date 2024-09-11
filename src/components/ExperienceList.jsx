import "../styles/ExperienceList.scss";
import { useState } from "react";

function ExperienceList({
  company,
  role,
  year,
  details,
  isEdit,
  savedExperiences,
  isCompany,
}) {
  const [companyName, setCompanyName] = useState(company);
  const [exRole, setExRole] = useState(role);
  const [yearApplied, setYearApplied] = useState(year);
  const [jobDetails, setJobDetails] = useState(details);

  function handleSaveExperiences() {
    if (isCompany) {
      savedExperiences({
        company: companyName,
        role: exRole,
        year: yearApplied,
        details: jobDetails,
      });
    } else {
      savedExperiences({
        institution: companyName,
        major: exRole,
        year: yearApplied,
        details: jobDetails,
      });
    }
  }

  return !isEdit ? (
    <div>
      {" "}
      <h3>{company}</h3>
      <div className="role">
        <span>{exRole}</span>
        <div className="vertical-line"></div>
        <span>{year}</span>
      </div>
      <p>{details}</p>
    </div>
  ) : (
    <div className="form-input">
      <input
        type="text"
        value={companyName}
        placeholder="company name"
        onChange={(e) => setCompanyName(e.target.value)}
      ></input>
      <input
        type="text"
        value={exRole}
        placeholder="role"
        onChange={(e) => setEXRole(e.target.value)}
      ></input>
      <input
        type="text"
        value={yearApplied}
        placeholder="apply year - finish year"
        onChange={(e) => setYearApplied(e.target.value)}
      ></input>
      <textarea
        onChange={(e) => setJobDetails(e.target.value)}
        value={jobDetails}
        rows={4}
        cols={50}
      ></textarea>
      <button onClick={handleSaveExperiences}>save</button>
    </div>
  );
}

export default ExperienceList;
