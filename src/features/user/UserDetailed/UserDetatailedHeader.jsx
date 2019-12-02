import React from 'react';
import differenceInYears from 'date-fns/difference_in_years';

const UserDetatailedHeader = ({profile}) => {
    let age;
    if (profile.dateOfBirth) {
        age = differenceInYears(Date.now(), profile.dateOfBirth.toDate())
    } else {
        age = 'unknown age'
    }
    return (
        <div>
            
        </div>
    )
}

export default UserDetatailedHeader;
