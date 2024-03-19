

// import PropTypes from 'prop-types';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Starter Plan",
            "price": "$29.99/month",
            "features": [
                "Access to gym facilities during staffed hours",
                "Basic equipment usage",
                "Limited group fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": "$49.99/month",
            "features": [
                "Access to gym facilities 24/7",
                "Full equipment usage",
                "Unlimited group fitness classes",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": "$79.99/month",
            "features": [
                "All features from the Standard Plan",
                "Access to personal trainer for consultation",
                "Nutritional counseling sessions",
                "Complimentary massage sessions"
            ]
        }
    ]
    
    return (
        <div className="">

            <h2 className="text-4xl mb-5">Best Price in the Town</h2>

           <div className="grid md:grid-cols-3 gap-4">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}> </PriceOption>)

            }
           </div>
            
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;