import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { isMobile, SECTION_TYPES } from '../Tools';

import Header from './Header';
import List from './List';
import BoxDisplay from './BoxDisplay';
import BulletList from './BulletList';
import Picture from './Picture';

function getSection(type, data, colors) {
    switch(type) {
        case SECTION_TYPES.LIST: return <List data={data} fade={false}/>

        case SECTION_TYPES.LIST_FADE: return <List data={data} fade={true}/>

        case SECTION_TYPES.BOX: return <BoxDisplay data={data} flip={false} colors={colors}/>

        case SECTION_TYPES.BOX_FLIPPABLE: return <BoxDisplay data={data} flip={true} colors={colors}/>
        
        case SECTION_TYPES.BULLET: return <BulletList data={data}/>

        case SECTION_TYPES.PICTURE: return <Picture data={data}/>

        default: return(<div>{"UNIMPLEMENTED TYPE: " + type + ". Please contact me at joshua.guo@stonybrook.edu to report this."}</div>)
    }
}

function Section(props) {
    let styles = {
        wrapper: { 
            paddingLeft: isMobile() ? '5%' : '20%',
            paddingTop: props.isFirst ? window.screen.height/3 + "px" : window.screen.height/8 + 'px',
            paddingRight: isMobile() ? '5%' : '20%',
            paddingBottom: window.screen.height/4 + "px",
            backgroundColor:  props.colors[0],
            color: props.colors[1],
        },
        arrow: {
            fontSize: isMobile() ? '40pt' : '80pt',
            marginBottom: window.screen.height/2 + "px",
        }
    }

    return(
        <div style={styles.wrapper}>
            {props.header && <Header headerTitle={props.header} backgroundColor={props.colors[0]} fontColor={props.colors[1]}/> }

            {props.isFirst && <ScrollAnimation style={styles.arrow} animateIn='fadeIn' delay={3000} animateOnce={true}>&#8595;</ScrollAnimation>}
            {!props.isFirst && <div style={{marginBottom: window.screen.height/25 + "px"}}/>}

            {getSection(props.type, props.data, props.colors)}
        </div>
    )
    
}

export default Section;