import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { isMobile } from '../Tools';

var height = window.screen.height/3.5 + 'px';
var globalStyles = {
    text: {
        fontSize: isMobile() ? '10pt' : '12pt', 
        padding: isMobile() ? '0 5px 0 5px' : '0 20px 0 20px',
    },
    techText: {
        fontSize: isMobile() ? '8pt' : '10pt', 
        padding: isMobile() ? '0 5px 0 5px' : '0 20px 0 20px',
        fontWeight: 'bold',
    }
}

function ClickedBox(props) {
    let clickedCard = {
        display: 'inline-block',
        backgroundColor: props.colors[1],
        borderStyle: 'solid',
        borderRadius: '10px',
        borderWidth: '5px',
        borderColor: props.colors[1],
        flex: 1,
        minWidth: isMobile() ? '85%' : '45%',
        height: height,
        margin: isMobile() ? '10px' : '10px',
        cursor: 'pointer'
    }

    return(
        <div style={clickedCard} onClick={() => props.handleClick(false)}>
            <ScrollAnimation duration={.75} animateIn="fadeIn" animateOnce={true} style={{width: '100%', height: '100%'}} >
                <p style={globalStyles.text}>
                    {props.content.description}
                </p>
                <p style={globalStyles.techText}> 
                    {props.content.subtext && props.content.subtext.map((e, index) => (
                        " " + e + (index === props.content.subtext.length - 1 ? '' : ',')
                    ))}
                </p>
            </ScrollAnimation>
        </div>
    )
}

function DummyBox(props) {
    let dummy = {
        display: 'inline-block',
        opacity: 0,
        borderWidth: '5px',
        borderStyle: 'solid',
        flex: 1,
        minWidth: isMobile() ? '85%' : '45%',
        height: height,
        margin: isMobile() ? '10px' : '10px',
    }
    
    return <div style={dummy}/>
}

function Box(props) {
    const [clicked, handleClick] = useState(false);
    const [hovered, handleChangeHover] = useState(false);

    //Add in filler box for spacing purposes
    if(props.dummy) {
        return <DummyBox/>
    }

    let fontSize = isMobile() ? (props.content.name.length > 12 ? '20pt' : '30pt')  : (props.content.name.length > 15 ? '30pt' : '40pt');

    let styles = {
        card: {
            display: 'inline-block',
            backgroundColor: props.colors[1],
            borderColor: props.colors[1],
            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '5px',
            flex: 1,
            minWidth: isMobile() ? '85%' : '45%',
            height: height,
            margin: isMobile() ? '10px' : '10px',
            cursor: props.flip ? 'pointer': ''
        },
        title: {
            position: 'absolute',
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: height,
            fontSize: fontSize,
            margin: '0 0 0 20px'
        }, 
        img: {
            display: 'block',
            height: '100%',
            width: '100%',
            margin: 'auto auto',
            opacity: hovered ? .25 : .8,
        }
    }

    

    //Show back description of card if clicked
    if(clicked) {
        return <ClickedBox colors={props.colors} content={props.content} handleClick={handleClick}/>
    }

    let img;
    try{
        img = require(`../imgs/${props.content.name}.png`);
    }catch(ex) {}
    
    //Show front of the card (image and title)
    return(
            <div style={styles.card}>
                <div
                    style={{width: '100%', height: '100%', position: 'relative'}} 
                    onClick={() => handleClick(props.flip && !clicked)} 
                    onMouseEnter={() => handleChangeHover(true)} 
                    onMouseLeave={() => handleChangeHover(false)}
                >
                    <div style={styles.title}>
                        {props.content.name}
                    </div>
                    {img && <img src={img} style={styles.img} alt={'pain'}/>}
                    {!img && <div style={styles.img}></div>}
                </div>   
            </div>
    )
}

export default Box;