import React, { useState } from 'react';
import { isMobile } from '../Tools';

function SubBullet(props) {
    let margin = props.isLast ? '10px 0 0 0' : (props.isFirst ? '0 0 10px 0' : '10px 0')

    let styles={
        wrapper: {
            margin: margin,
            fontSize: '13pt',
            whiteSpace: 'pre-wrap'
        }
    }

    return(
        <div style={styles.wrapper}>
            <div style={{display: 'inline-block', maxWidth: '5%', verticalAlign: 'top'}}>&mdash; </div> 
            <div style={{display: 'inline-block', maxWidth: '95%'}}>{props.content}</div>
        </div>
    )
}

function Bullet(props) {
    const [clicked, handleClick] = useState(false);

    let styles = {
        wrapper: {
            display: 'inline-block',
            margin: '20px 0',
            flex: '1',
            minWidth: isMobile() ? '100%' : '50%',
            fontSize: '20pt'
        },
        childrenWrapper: {
            display: clicked ? '' : 'none',
            padding: '0 0 0 5%',
            fontSize: '15pt',
            cursor: 'pointer',
        }
    }

    if(props.dummy) {
        return(<div style={styles.wrapper}></div>)
    }

    return(
        <div style={styles.wrapper} >
                <div style={{display: 'inline', cursor: 'pointer'}} onClick={() => handleClick(!clicked)}>
                    <div style={{display: 'inline-block', maxWidth: '5%', verticalAlign: 'top'}}>&bull;</div> 
                    <div style={{display: 'inline-block', maxWidth: '95%'}}>{props.content}</div>
                </div>

                <div style={styles.childrenWrapper} onClick={() => handleClick(!clicked)}>
                    {props.children.map((element, index) => (
                        <SubBullet content={element} key={index} isFirst={index === 0} isLast={index === props.children.length-1}/>
                    ))}
                </div>
        </div>
    )
}

export default Bullet;