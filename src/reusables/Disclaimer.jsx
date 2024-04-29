import React from 'react';
import { DisclaimerContainer } from '../styles/DisclaimerContainer';

function Disclaimer({text, sup}){
    return(
        <DisclaimerContainer>{sup && <sup>{sup}</sup>}{text}</DisclaimerContainer>
    );

}

export default Disclaimer;
