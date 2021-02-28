import React from 'react';
import { isMobile } from '../Tools';
import ScrollAnimation from 'react-animate-on-scroll';

function Image(props) {
    let wrapper = {
        flex: 1,
        maxWidth: isMobile() ? '100%' : '40%',
        textAlign: 'center',
        display: 'inline-block',
        verticalAlign: 'middle',
    }

    let imgStyle = {
        minWidth: '70%',
        maxWidth: '80%',
        borderRadius: '50%'
    }

    let img;
    try {
        img = require(`../imgs/${props.img}`)
    }catch(ex) { }

    return(
        <div style={wrapper}>
            <img style={imgStyle} src={img} alt={props.img} />
        </div>
    )
}

function Caption(props) {
    let caption = {
        maxWidth: isMobile() ? '100%' : '60%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-block',
        verticalAlign: 'middle',
    }

    let text = {
        fontSize: isMobile() ? '13pt' : '15pt',
        whiteSpace: 'pre-wrap'
    }

    return(
        <div style={caption}>
            <span style={text}>
                {props.content}
            </span>
        </div>
    )
}

function Picture(props) {
    let styles = {
        main: {
            width: isMobile() ? '95%' : '100%',
            margin: '0 auto'
        }
    }

    return(
        <ScrollAnimation animateIn="fadeIn" duration={2} style={styles.main}>
                <Image img={props.data[0].img}/>
                <Caption content={props.data[0].caption}/>
        </ScrollAnimation>
    )
}

export default Picture;