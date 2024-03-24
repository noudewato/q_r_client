/* eslint-disable react/prop-types */
import "./scroll.css";

const HorizontalScroll = ({ uniqueCategories, handleCategoryClick }) => {
  return (
    <div className="horizontal-scroll">
      <div className="menu-items">
        {uniqueCategories?.map((category, index) => (
          <div
            key={index}
            className="menu-item"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
