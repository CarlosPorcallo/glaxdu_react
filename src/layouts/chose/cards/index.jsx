import {React, Fragment} from 'react';
import {cards} from '../../../config/chose';

// components
import Card from '../../../components/card/home';

const ChoseUs = () => {
    return (
        <Fragment>
            <div className="choose-us section-padding-1">
                <div className="container-fluid">
                    <div className="row no-gutters choose-negative-mrg">
                        {cards.map((card) => (
                            <div 
                                key={Math.random()}
                                className="col-lg-3 col-md-6"
                            >
                                <Card 
                                    className={card.className}
                                    icon={card.icon}
                                    heading={card.heading}
                                    paragraphs={card.paragraphs}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default ChoseUs;