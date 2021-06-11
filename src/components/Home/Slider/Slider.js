import React from 'react';
import studentsPhoto from '../../../img/students.jpg';

const Slider = () => {
    return (
        <div className="px-10 md:px-20">
            <img src={studentsPhoto} alt="Studnets" width="100%"/>
        </div>
    );
};

export default Slider;