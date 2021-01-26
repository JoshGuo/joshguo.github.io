import React from 'react';
import ListItem from './ListItem';
import { isMobile } from '../Tools';
import ScrollAnimation from 'react-animate-on-scroll';

function List(props) {
    let style = {
        main: {
            fontSize: isMobile() ? '20pt' : '40pt',
            overflow: 'wrap',
        }
    }

    return(
        <ScrollAnimation style={style.main} animateIn="fadeIn" duration={props.fade ? 0 : 2}>
            {props.data.map((element, index) => (
                <ListItem item={element} isLast={index === props.data.length-1} key={index} fade={props.fade}/>
            ))}
        </ScrollAnimation>
    );
}

export default List;