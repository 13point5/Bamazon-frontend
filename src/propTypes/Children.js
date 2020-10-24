import Proptypes from "prop-types";

const ChildrenPropTypes = Proptypes.oneOfType([
  Proptypes.arrayOf(Proptypes.node),
  Proptypes.node,
]);

export default ChildrenPropTypes;
