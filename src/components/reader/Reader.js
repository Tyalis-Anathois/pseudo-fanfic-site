import React from 'react';
import StyledComponent from 'styled-components';

const ReaderContainer = StyledComponent.article`
background-color: black;
color: aquamarine;
`

const ReaderTitle = StyledComponent.h2`
font-size: 3rem;
`

const ReaderMainText = StyledComponent.div`
font-size: 1rem;
`


const Reader = props => {
    return (
        <ReaderContainer>
            <ReaderTitle>{props.title}</ReaderTitle>
            <ReaderMainText>{props.text}</ReaderMainText>
        </ReaderContainer>
    );
}

export default Reader;