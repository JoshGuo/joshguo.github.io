import React from 'react';
import { isMobile } from '../Tools';

import Box from './Box';

function BoxDisplay(props) {
    let styles = {
        main: {
            width: '100%'
        },
        row: {
            display: 'flex',
            flexWrap: 'wrap',
        }
    }

    return(
        <div style={styles.main}>
            <div style={styles.row}>
                {props.data.map((element, index) => (
                    <Box contents={element} color1={props.color1} color2={props.color2} flip={props.flip} key={index}/>
                ))}
                {!isMobile() && props.data.length % 2 === 1 && <Box dummy={true}/>}
            </div>
        </div>
    )
}

export default BoxDisplay;