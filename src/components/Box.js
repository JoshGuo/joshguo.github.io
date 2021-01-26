import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { isMobile } from '../Tools';

function Box(props) {
    const [clicked, handleClick] = useState(false);
    const [hovered, handleChangeHover] = useState(false);

    let height = window.screen.height/3.5 + 'px';

    let styles = {
        card: {
            display: 'inline-block',
            backgroundColor: props.color2, //Maybe make it slightly different (darker / lighter) color than the actual background? -- Have to consider this
            color: props.color1,
            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '5px',
            borderColor: props.color1,
            flex: 1,
            minWidth: isMobile() ? '85%' : '45%',
            height: height,
            margin: isMobile() ? '10px' : '10px',
            cursor: props.flip ? 'pointer': ''
        },
        clickedCard: {
            display: 'inline-block',
            backgroundColor: props.color1,
            color: props.color2,
            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '5px',
            borderColor: props.color1,
            flex: 1,
            minWidth: isMobile() ? '85%' : '45%',
            height: height,
            margin: isMobile() ? '10px' : '10px',
            cursor: 'pointer'
        },
        dummy: {
            display: 'inline-block',
            backgroundColor: props.color1,
            color: props.color1,
            borderWidth: '5px',
            borderColor: props.color2,
            flex: 1,
            minWidth: isMobile() ? '85%' : '45%',
            height: height,
            margin: isMobile() ? '10px' : '10px',
        },
        title: {
            position: 'absolute',
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: height,
            fontSize: '40pt',
            margin: '0 0 0 20px'
        }, 
        img: {
            display: 'block',
            height: '100%',
            width: '100%',
            margin: 'auto auto',
            opacity: hovered ? .25 : .8,
        },
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

    //Add in filler box for spacing purposes
    if(props.dummy) {
        return <div style={styles.dummy}/>
    }

    //Show back description of card if clicked
    if(clicked) {
        return(
            <div style={styles.clickedCard} onClick={() => handleClick(!clicked)}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} style={{width: '100%', height: '100%'}} >
                    <p style={styles.text}>
                        {props.contents.description}
                    </p>
                    <p style={styles.techText}> 
                            {props.contents.subtext && props.contents.subtext.map((e, index) => (
                                " " + e + (index === props.contents.subtext.length - 1 ? '' : ',')
                            ))}
                    </p>
                </ScrollAnimation>
            </div>
        )
    }

    let img;
    try{
        img = require(`../imgs/${props.contents.name}.png`);
    }catch(ex) {
        console.log(ex)
    }
    
    //Show front of the card (image and title)
    return(
            <div style={styles.card}>
                <div style={{width: '100%', height: '100%', position: 'relative'}} 
                    onClick={() => handleClick(props.flip && !clicked)} 
                    onMouseEnter={() => handleChangeHover(true)} 
                    onMouseLeave={() => handleChangeHover(false)}
                >
                    <div style={styles.title}>{props.contents.name}</div>
                    {img && <img src={img} style={styles.img} alt={'pain'}/>}
                    {!img && <div style={styles.img}></div>}
                </div>   
            </div>
    )
}

export default Box;