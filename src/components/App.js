import React from 'react';
import { isMobile } from '../Tools';
import ScrollAnimation from 'react-animate-on-scroll';

import Header from './Header';
import FadeInList from './FadeInList';
import ProjectList from './ProjectList'

import ResumeLogo from '../imgs/resume_icon.png';

var json = require('../data.json');

function App() {
    let styles = {
        headerWrapper: { 
            paddingLeft: isMobile() ? '5%' : '20%',
            paddingTop: window.screen.height/4 + "px",
            paddingBottom: window.screen.height/4 + "px",
            backgroundColor:  '#f5ead7'
        },
        arrow: {
            fontSize: isMobile() ? '40pt' : '80pt',
            marginBottom: window.screen.height/2 + "px",
        },
        projectWrapper: {
            paddingLeft: isMobile() ? '5%' : '20%',
            paddingTop: window.screen.height/4 + "px",
            backgroundColor: '#171616',
            height: "1000px"
        }
    } 

    return (
        <div>
            <div style={styles.headerWrapper}>
                <Header name={json.data.name} backgroundColor={'#f5ead7'} fontColor={'#000'} lineColor={'#000'}/>
                <ScrollAnimation style={styles.arrow} animateIn='fadeIn' delay={3000} animateOnce={true}>&#8595;</ScrollAnimation>
                <FadeInList attributes={json.data.attributes} />
            </div>

            <div style={styles.projectWrapper}>
                <Header name={"Projects (WIP)"} backgroundColor={'#171616'} fontColor={'#f5e5c9'} lineColor={'#f5e5c9'}/>
                <ProjectList />
            </div>
            
        </div>
        
    );
}

export default App;
