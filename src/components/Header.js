import React from 'react';
import { isMobile } from '../Tools';
import ScrollAnimation from 'react-animate-on-scroll';

function Header(props) {
    let styles = {
        main: {
            fontSize: isMobile() ? '45pt' : '75pt',
            position: 'sticky',
            top: '0px',
            backgroundColor: props.backgroundColor,
            color: props.fontColor,
            zIndex: 1
        },
        line: {
            marginTop: '10px',
            height: isMobile() ? '10px' : '15px',
            width: isMobile() ? '35%' : '15%',
            backgroundColor: props.fontColor
        }
    }

    return(
        <div style={styles.main}>
            <ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true}>{props.headerTitle}</ScrollAnimation>
            <ScrollAnimation style={styles.line} animateIn='fadeInLeft' delay={1500} animateOnce={true}/>
        </div>
    );
}

export default Header;