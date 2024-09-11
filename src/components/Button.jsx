import "../styles/Button.scss";

function Button({ isEdit, handleEditCv }) {
  return (
    <button onClick={handleEditCv} className="button">
      {isEdit ? "Submit" : "Edit"}
    </button>
  );
}

export default Button;
