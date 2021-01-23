import React from 'react';
import { isMobile } from '../Tools';

import Project from './Project';

function ProjectList(props) {
    let styles = {
        main: {
            width: '100%',
            margin: '0 auto',
            paddingTop: '100px'
        },
        row: {
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: ''
        }
    }
    console.log(props.projects.length % 2);

    return(
        <div style={styles.main}>
            <div style={styles.row}>
                {props.projects.map((element, index) => (
                    <Project project={element} color1={props.color1} color2={props.color2} key={index}/>
                ))}
                {!isMobile() && props.projects.length % 2 === 1 && <Project dummy={true}/>}
            </div>
        </div>
    )
}

export default ProjectList;