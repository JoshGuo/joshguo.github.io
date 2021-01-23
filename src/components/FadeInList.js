import React from 'react';
import FadeInListItem from './FadeInListItem';
import { isMobile } from '../Tools';

function FadeInList(props) {
    let style = {
        main: {
            fontSize: isMobile() ? '20pt' : '40pt',
            overflow: 'wrap',
        }
    }

    return(
        <div style={style.main}>
            {props.attributes.map((element, index) => (
                <FadeInListItem attribute={element} key={index}/>
            ))}
        </div>
    );
}

export default FadeInList;