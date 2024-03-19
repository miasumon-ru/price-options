import { FaCheckCircle } from "react-icons/fa";


import PropTypes from 'prop-types';

const Feature = ({feature}) => {
    return (
        <div className=" ml-16 ">
            <p className="flex items-center "> <FaCheckCircle className="mr-2" /> {feature} </p>
        </div>
    );
};

Feature.propTypes = {

    feature: PropTypes.string.isRequired
    
};

export default Feature;