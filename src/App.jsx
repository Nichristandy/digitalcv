import "./App.scss";
import Button from "./components/Button";
import { useState } from "react";
import Profile from "./components/Profile";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
function App() {
  const [isEdit, setIsEdit] = useState(false);

  function handleEditCv() {
    setIsEdit((isEdit) => !isEdit);
  }

  return (
    <div className="outside">
      <div className="container">
        <Profile />
        <div className="info">
          <div className="Section">
            <h1>Profesional Summary</h1>
            <div className="line"></div>
            <Summary isEdit={isEdit} handleEditCv={handleEditCv} />
          </div>
          <div className="Section">
            <h1>Experience</h1>
            <div className="line"></div>
            <Experience isEdit={isEdit} />
          </div>
          <div className="Section">
            <h1>Education</h1>
            <div className="line"></div>
            <Education isEdit={isEdit} />
          </div>

          <Button isEdit={isEdit} handleEditCv={handleEditCv} />
        </div>
      </div>
    </div>
  );
}

export default App;
