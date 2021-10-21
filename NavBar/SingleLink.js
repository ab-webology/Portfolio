import React from 'react'
import './SingleLink.css'

function SingleLink({LinkName,LinkUrl}) {
    return (
        <div>
            <ul>
            <li>
                <a href={LinkUrl}>{LinkName}</a>
            </li>
            </ul>
        </div>
    )
}

export default SingleLink
