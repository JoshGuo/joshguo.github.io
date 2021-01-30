import React from 'react';

import Bullet from './Bullet';

function BulletList(props) {
    let styles = {
        main: {
            width: '100%',
            fontSize: '8pt'
        },
        items: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
        }
    }

    return(
        <div style={styles.main}>
            Click titles to expand
            <div style={styles.items}>
                {props.data.map((element, index) => (
                    <Bullet content={element.content} children={element.children} key={index}/>
                ))}
                {props.data.length % 2 === 1 && <Bullet dummy={true}/>}
            </div>
        </div>
    )
}

export default BulletList;