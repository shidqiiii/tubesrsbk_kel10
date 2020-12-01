import React from 'react';
import ProfileData from '../ProfileData';

const Show = (showTab) => {

    // prevent component from rendering
    if (!showTab) {
        return null;
    }

    return (
        <div>
            <ProfileData />
        </div>
    );
}

export default Show;