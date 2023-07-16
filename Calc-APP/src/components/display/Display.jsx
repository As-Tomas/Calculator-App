import PropTypes from "prop-types";

const Display = (props) => {
  return (
    <div className="bg-skin-display-background  px-6 py-4 m-6 text-end text-[42px] mx-auto text-white rounded-lg">
      {props.result}
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export { Display };
