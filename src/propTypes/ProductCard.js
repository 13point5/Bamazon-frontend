import PropTypes from "prop-types";

const ProductCardPropTypes = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  orderCount: PropTypes.string,
  price: PropTypes.number,
  imgPath: PropTypes.string,
  delivery: PropTypes.string,
});

export default ProductCardPropTypes;
