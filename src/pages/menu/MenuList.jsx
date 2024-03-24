import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import "./menulist.css";
import HorizontalScroll from "../../components/horizontalscrollmenu/HorizontalScroll";
import MenuCard from "../../components/menucard/MenuCard";
import { ProductListAction } from "../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";


const MenuList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products: p} = productList;

  const uniqueCategories = [...new Set(p?.map((product) => product.category))];

  useEffect(() => {
    dispatch(ProductListAction());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = p.filter((product) => product.category === selectedCategory);

  return (
    <Box>
      <Box>
        <HorizontalScroll
          uniqueCategories={uniqueCategories}
          handleCategoryClick={handleCategoryClick}
        />
      </Box>

      <Box>
        <div className="menu-content">
          {filteredProducts.map((product, index) => (
            <MenuCard key={index} product={product} />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default MenuList;
