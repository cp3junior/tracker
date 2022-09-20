import { ReactComponent as AddIcon } from "../assets/icons/add.svg";

const AddButton = () => {
  return (
    <div className="addBtn">
      <button className="addBtn-btn">
        <AddIcon />
      </button>
    </div>
  );
};

export default AddButton;
