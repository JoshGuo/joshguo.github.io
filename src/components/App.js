/**
 * Writted by Joshua Guo (http://joshguo.github.io) - 2021
 */

 import React from 'react';

import Section from './Section';

var json = require('../data.json');
var color1 = json.colors.primary;
var color2 = json.colors.secondary;

function App() {
    return(
        <div>
            {json.sections.map((element, index) => (
                <Section 
                    type={element.type} 
                    header={element.header} 
                    data={element.data} 
                    isFirst={index === 0} 
                    isLast={index === json.sections.length-1} 
                    colors={index % 2 === 0 ? [color1, color2] : [color2, color1]}
                />
            ))}
        </div>
    );
}

export default App;

