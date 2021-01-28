/**
 * Writted by Joshua Guo (http://joshguo.github.io) - 2021
 */

 import React from 'react';

import Section from './Section';

var json = require('../data.json');
var color1 = json.colors.color1;
var color2 = json.colors.color2;

function App() {
    return(
        <div style={{userSelect: 'none'}}>
            {json.sections.map((element, index) => (
                <Section 
                    type={element.type} 
                    key={index}
                    header={element.header} 
                    data={element.data} 
                    isFirst={index === 0} 
                    isLast={index === json.sections.length-1} 
                    colors={index % 2 === 0 ? [color1, color2] : [color2, color1]} //Sections alternate between different schemes
                />
            ))}
        </div>
    );
}

export default App;

