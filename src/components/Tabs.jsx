import React, { useState } from 'react';


const Tabs = props => {

    const [idx, setIdx] = useState(0)

    const handleClick = (i) => {
        console.log("click happened") // when we pass i from map to click,
        setIdx(i) // we can set the passed ID to index state.
    }

    return (
        <div>
            {props.tabs.map( (tab, i) => // we map list of tabs with an i for each tab. We also pass i into handleClick
                <button onClick={ () => handleClick(i)} key={i}>{tab.title}</button>
            )}
            <div>
                {props.tabs[idx].content}
            </div>
        </div>
    ) // since we pass i to handle click, we can get the tab information from that index.
}

export default Tabs