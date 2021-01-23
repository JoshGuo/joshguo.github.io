import React from 'react';
import { isMobile } from '../Tools';
import ScrollAnimation from 'react-animate-on-scroll';

function FadeInListItem(props) {
    let styles = {
        textWrapper: {
            whiteSpace: 'pre-wrap',
            margin: isMobile() ? '50px 0' : '100px 0'
        }
    }
    
    return(
        <div style={styles.textWrapper}>
            <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce={true} delay={isMobile() ? 100 : 300}>
                {props.attribute}
            </ScrollAnimation>
        </div>

    )
}

export default FadeInListItem;