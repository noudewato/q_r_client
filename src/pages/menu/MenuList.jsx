import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import "./menulist.css";
import HorizontalScroll from "../../components/horizontalscrollmenu/HorizontalScroll";
import MenuCard from "../../components/menucard/MenuCard";
import { ProductListAction } from "../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../components/Loader";
import { Message } from "../../components/Message";

const MenuList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products: p, loading, error } = productList;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uniqueCategories = [...new Set(p?.map((product) => product.category))];

  useEffect(() => {
    dispatch(ProductListAction());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingDelay, setLoadingDelay] = useState(false);

  useEffect(() => {
    if (uniqueCategories.length > 0 && selectedCategory === null) {
      setSelectedCategory(uniqueCategories[0]);
    }
  }, [uniqueCategories, selectedCategory]);

  const handleCategoryClick = (category) => {
    setLoadingDelay(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setLoadingDelay(false);
    }, 1000);
  };

  const filteredProducts = p.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>Data not found</Message>
      ) : (
        <Box>
          <Box>
            <HorizontalScroll
              uniqueCategories={uniqueCategories}
              selectedCategory={selectedCategory}
              handleCategoryClick={handleCategoryClick}
            />
          </Box>
          <Box>
            <div className="menu-content">
              {loadingDelay ? (
                <Loader /> // Display loader while waiting for the delay
              ) : (
                filteredProducts.map((product, index) => (
                  <MenuCard
                    key={index}
                    product={product}
                    className="menu-card"
                  />
                ))
              )}
            </div>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MenuList;
