import React from 'react';
import { isMobile } from '../Tools';
import ScrollAnimation from 'react-animate-on-scroll';

import Header from './Header';
import FadeInList from './FadeInList';
import ProjectList from './ProjectList'

//import ResumeLogo from '../imgs/resume_icon.png';

var json = require('../data.json');
var color1 = json.data.color1;
var color2 = json.data.color2;

function App() {
    let styles = {
        headerWrapper: { 
            paddingLeft: isMobile() ? '5%' : '20%',
            paddingTop: window.screen.height/4 + "px",
            paddingRight: isMobile() ? '5%' : '20%',
            //paddingBottom: window.screen.height/4 + "px",
            backgroundColor:  color1,
            color: color2,
        },
        arrow: {
            fontSize: isMobile() ? '40pt' : '80pt',
            marginBottom: window.screen.height/2 + "px",
        },
        projectWrapper: {
            paddingLeft: isMobile() ? '5%' : '20%',
            paddingTop: window.screen.height/4 + "px",
            paddingRight: isMobile() ? '5%' : '20%',
            paddingBottom: window.screen.height/5 + "px",
            backgroundColor: color2,
            color: color1
        },
        contactWrapper: {
            paddingLeft: isMobile() ? '5%' : '20%',
            paddingTop: window.screen.height/4 + "px",
            paddingRight: isMobile() ? '5%' : '20%',
            paddingBottom: window.screen.height/4 + "px",
            backgroundColor:  color1,
            color: color2,
        }
    } 

    return (
        <div>
            <div style={styles.headerWrapper}>
                <Header name={json.data.header1} backgroundColor={color1} fontColor={color2} lineColor={color2}/>
                <ScrollAnimation style={styles.arrow} animateIn='fadeIn' delay={3000} animateOnce={true}>&#8595;</ScrollAnimation>
                <FadeInList attributes={json.data.attributes} />
            </div>

            <div style={styles.projectWrapper}>
                <Header name={json.data.header2} backgroundColor={color2} fontColor={color1} lineColor={color1}/>
                <div style={{marginBottom: window.screen.height/8 + "px"}} />
                <ProjectList projects={json.data.projects} color1={color1} color2={color2}/>
            </div>

            <div style={styles.contactWrapper}>
                <Header name={json.data.header3} backgroundColor={color1} fontColor={color2} lineColor={color2}/>
            </div>
            
        </div>
        
    );
}

export default App;

/**
 * Writted by Joshua Guo (http://joshguo.github.io)
 */