import React from 'react';
import { isMobile } from '../Tools';

import Box from './Box';

function BoxDisplay(props) {
    let styles = {
        main: {
            width: '100%',
            color: props.colors[0]
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
                    <Box content={element} flip={props.flip} colors={props.colors} key={index}/>
                ))}
                {!isMobile() && props.data.length % 2 === 1 && <Box dummy={true}/>}
            </div>
        </div>
    )
}

export default BoxDisplay;