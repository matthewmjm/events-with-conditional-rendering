import React, { useState } from 'react';

function TvShowCard({tvShow}) {
    const [hovering, setHovering] = useState(false)
    const checkSummaryLength = (summary) => {
        return summary.length > 30
            ? summary.slice(0, 100) + "..."
            : summary
    }
    
    return (
        <div 
            className={hovering ? "tv-show-card hover" : "tv-show-card"}
            onMouseOver={() => setHovering(true)} 
            onMouseOut={() => setHovering(false)}
        >
            <h2>{ tvShow.name }</h2>
            <img 
                src={ tvShow.image.medium } 
                alt={ tvShow.name } 
            />
            {hovering 
                ? <p>{checkSummaryLength(tvShow.summary)}</p> 
                : null
            }
        </div>

    )
}

export default TvShowCard;