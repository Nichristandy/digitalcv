import "../styles/profile.scss";
import { useState } from "react";
import Button from "./Button";

function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("Nicholas Christandy Onggosusilo");
  const [position, setPosition] = useState("Front end Developer");
  const [phone, setPhone] = useState("+6287841239119");
  const [email, setEmail] = useState("nicholas.onggosusilo@gmail.com");
  const [web, setWeb] = useState("nicholasonggosusilo.vercel.app");
  const [skills, setSkills] = useState([
    "Figma",
    "Web Development",
    "React JS",
    "PHP",
  ]);
  const [skill, setSkill] = useState("");

  function handleEditCv() {
    setIsEdit((isEdit) => !isEdit);
  }

  function handleAddSkill(e) {
    e.preventDefault();
    setSkills([...skills, skill]);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleWebChange(e) {
    setWeb(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  return (
    <div className="sidebar">
      {!isEdit ? (
        <div className="Profile">
          <h1>{name}</h1>
          <h2>{position}</h2>
          <div className="contact-info">
            <a>{phone}</a>
            <a>{email}</a>
            <a>{web}</a>
          </div>
          <div className="skill-contain">
            <h2>Skills</h2>
            <ul className="Skills">
              {skills.map((skill) => (
                <li key={skill.index}>{skill}</li>
              ))}
            </ul>
          </div>
          <Button isEdit={isEdit} handleEditCv={handleEditCv} />
        </div>
      ) : (
        <div className="Profile">
          <input onChange={handleNameChange} type="text" value={name}></input>
          <input
            onChange={handlePositionChange}
            type="text"
            value={position}
          ></input>
          <div className="contact-info">
            <input
              onChange={handlePhoneChange}
              type="text"
              value={phone}
            ></input>
            <input
              onChange={handleEmailChange}
              type="text"
              value={email}
            ></input>
            <input onChange={handleWebChange} type="text" value={web}></input>
          </div>
          <div className="skill-contain">
            <h2>Skills</h2>
            <input
              type="text"
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
            />
            <button onClick={handleAddSkill}>add skill</button>
            <ul className="Skills">
              {skills.map((skill) => (
                <li key={skill.index}>{skill}</li>
              ))}
            </ul>
          </div>
          <Button isEdit={isEdit} handleEditCv={handleEditCv} />
        </div>
      )}
    </div>
  );
}

export default Profile;
