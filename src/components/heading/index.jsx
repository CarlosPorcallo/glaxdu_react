import {React, Fragment} from 'react';

const Heading = ({heading}) => {
    const words_heading = heading.text.split(" ");
    const mod = 0;
    
    if (heading.type !== "odd") {
        mod = 1;    
    }

    words_heading.map((word, $index) => {
        word = word+" "
        if ($index % 2 != mod) {
            return (word)
        } else {
            return (<span>{word}</span>)
        }
    })
}
 
export default Heading;

/*
    return (
        <Fragment>
            {words_heading.map((word, $index) => (
                <span>{word}</span>
            ))}
        </Fragment>
    )
*/