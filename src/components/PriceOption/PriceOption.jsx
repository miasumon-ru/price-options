

import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name, price , features} = option
    return (
        <div className='bg-blue-200 mb-4 p-5 rounded-lg text-center flex flex-col justify-between '>

          <div>
          <h2 className='text-4xl'>
                <span>{price}</span>
            
            </h2>

            <h4 className='text-3xl mt-3'>
                <span>{name}</span>
            </h4>

            <div className='mt-3 '>
                {
                    features.map((feature, index) => <Feature feature={feature} key={index}></Feature>)
                }
            </div>
          </div>

       
            <div>
            <button className='btn btn-primary w-full hover:bg-green-700 mt-10'>Buy Now</button>
            </div>
            
            
        </div>
    );
};

PriceOption.propTypes = {

    option: PropTypes.object.isRequired
    
};

export default PriceOption;