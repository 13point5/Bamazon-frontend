import Proptypes from "prop-types";

const commonProps = {
  id: Proptypes.string,
  type: Proptypes.string,
  title: Proptypes.string,
  imgPath: Proptypes.string,
  extra: Proptypes.shape({
    to: Proptypes.string,
    label: Proptypes.string,
  }),
};

const DealPropTypes = Proptypes.oneOfType([
  Proptypes.shape({
    ...commonProps,
  }),
  Proptypes.shape({
    ...commonProps,
    items: Proptypes.arrayOf(
      Proptypes.shape({
        label: Proptypes.string,
        imgPath: Proptypes.string,
      })
    ),
  }),
]);

export default DealPropTypes;
