import React from 'react';

const Paragraph = ({p}) => {
    if (p.kind === "p") {
        return <p>{p.text}</p>
    } else {
        return <blockquote><i className="quote-top fa fa-quote-left"></i>{p.text}<i className="quote-bottom fa fa-quote-right"></i></blockquote>
    }
}
 
export default Paragraph;