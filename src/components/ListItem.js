import React from 'react';
import { isMobile } from '../Tools';
import ScrollAnimation from 'react-animate-on-scroll';
import { LIST_ITEM_TYPES } from '../Tools';

function margin(isLast) { 
    if(isLast) {
        return isMobile() ? '80px 0 0 0' : '100px 0 0 0'
    }

    return isMobile() ? '80px 0' : '100px 0'
}

function generateItem(item) {
    switch(item.type) {
        case LIST_ITEM_TYPES.LINK: return(
            <a target={'_blank'} style={{textDecoration: 'none', color: 'inherit'}}href={item.link}>
                {item.content}
            </a>
        );

        case LIST_ITEM_TYPES.TAB: return(
            <div style={{marginLeft: "100px"}}>{item.content}</div>
        );

        case LIST_ITEM_TYPES.TABLINK: return(
            <a target={'_blank'} style={{textDecoration: 'none', color: 'inherit', marginLeft: "100px"}}href={item.link}>
                {item.content}
            </a>
        );
        
        default: return item.content;
    }
}

//function parseItem

function ListItem(props) {
    let styles = {
        textWrapper: {
            whiteSpace: 'pre-wrap',
            margin: margin(props.isLast)
        }
    }
    
    //For a list whose items appear as the user scrolls
    if(props.fade) {
        return(
            <div style={styles.textWrapper}>
                <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce={true} delay={200}>
                    {generateItem(props.item)}
                </ScrollAnimation>
            </div>
        );
    }

    return(
        <div style={styles.textWrapper}>
            {generateItem(props.item)}
        </div>
    );
}

export default ListItem;