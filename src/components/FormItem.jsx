import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import AddCategory from "./AddCategory";
import { categoryColors } from "../lib/constants";

const FormItem = ({ data, formData = {}, onChange = () => {} }) => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const { categories } = useContext(DataContext);

  if (!data) return;

  const {
    name = "",
    label = "",
    input = "input",
    required = false,
    onSelect = () => {},
  } = data || {};

  const showAdd = (e) => {
    e.preventDefault();
    setShowAddCategory(true);
  };

  const hideAdd = () => {
    setShowAddCategory(false);
  };

  const handleSelect = (color) => {
    if (onSelect) onSelect(color);
  };

  return (
    <div className="form-item">
      <label htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>

      {input === "input" && (
        <input
          type="text"
          name={name}
          id={name}
          value={formData?.[name] || ""}
          onChange={onChange}
          required={required}
        />
      )}

      {input === "textarea" && (
        <textarea
          name={name}
          id={name}
          value={formData?.[name] || ""}
          onChange={onChange}
          required={required}
          rows="3"
        />
      )}

      {input === "category" && (
        <div className="form-item-category">
          <select
            name={name}
            id={name}
            value={formData?.[name] || ""}
            onChange={onChange}
            required={required}
          >
            {categories.length > 0 ? (
              <>
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.emoji}
                    {"  "}
                    {category.name}
                  </option>
                ))}
              </>
            ) : (
              <option value="">No category</option>
            )}
          </select>
          <button
            type="button"
            className="form-item-category-addbtn"
            onClick={showAdd}
          >
            <AddIcon />
          </button>
          {showAddCategory && <AddCategory onClose={hideAdd} />}
        </div>
      )}

      {input === "colors" && (
        <div className="categorycolors">
          {categoryColors.map((col) => (
            <div
              onClick={() => handleSelect(col)}
              key={col}
              className={`categorycolors-item ${
                (formData?.[name] || "") === col ? "selected" : ""
              }`}
              style={{ backgroundColor: col }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FormItem;
