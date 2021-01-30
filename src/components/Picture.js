import React from 'react';
import { isMobile } from '../Tools';
import ScrollAnimation from 'react-animate-on-scroll';

function Image(props) {
    let wrapper = {
        flex: 1,
        maxWidth: isMobile() ? '100%' : '45%',
        minWidth: isMobile() ? '70%' : '45%',
        textAlign: 'center'
    }

    let imgStyle = {
        display: 'inline-block',
        minWidth: '70%',
        maxWidth: '70%',
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
        flex: 1,
        minWidth: isMobile() ? '100%' : '45%',
        marginTop: isMobile() ? '10px' : '',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    let text = {
        display: 'inline-block',
        fontSize: isMobile() ? '13pt' : '15pt',
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
            width: '90%',
            margin: '0 auto'
        },
        row: {
            display: 'flex',
            flexWrap: 'wrap'
        }
    }

    return(
        <ScrollAnimation animateIn="fadeIn" duration={2} style={styles.main}>
            <div style={styles.row}>
                <Image img={props.data[0].img}/>
                <Caption content={props.data[0].caption}/>
            </div>
        </ScrollAnimation>
    )
}

export default Picture;