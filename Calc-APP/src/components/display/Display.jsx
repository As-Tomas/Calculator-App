
import PropTypes from 'prop-types';

const Display = (props) => {
  return (
    <div className="bg-th1-screen px-6 py-6 m-6 text-end mx-auto text-white rounded-lg">
      {props.result}
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export { Display }; 
