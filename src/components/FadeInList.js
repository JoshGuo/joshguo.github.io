import React from 'react';
import ListItem from './ListItem';
import { isMobile } from '../Tools';

function FadeInList(props) {
    let style = {
        main: {
            fontSize: isMobile() ? '20pt' : '40pt',
            overflow: 'wrap',
        }
    }

    console.log(props.data)

    return(
        <div style={style.main}>
            {props.data.map((element, index) => (
                <ListItem item={element} isLast={index === props.data.length-1} key={index} fade={props.fade}/>
            ))}
        </div>
    );
}

export default FadeInList;