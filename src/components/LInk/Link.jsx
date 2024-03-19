

import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>

            <li className="hover:bg-green-500   p-2 text-black rounded-xl">
                <a href={route.path}>{route.name}</a>
            </li>
          

        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired

};

export default Link;