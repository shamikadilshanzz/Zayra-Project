import CBT from "./Categorybtn.module.css";

function CategoryButton({ category, selectedCategoryId, onClick }) {
  const isSelected = selectedCategoryId === category._id;

  return (
    <button
      className={`${CBT.cbtn} ${isSelected ? CBT.selected : CBT.unselected}`}
      onClick={() => onClick(category._id)}
    >
      {category.name}
    </button>
  );
}

export default CategoryButton;