import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const Bar = styled.div`
    height: 100%;
    flex-grow: 1;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    background-color: ${props => props.color};
`;

const LeftBar = styled(Bar)`
    background-color: #1DA1F2;
`;

const RightBar = styled(Bar)`
    background-color: cyan;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
`;

function AppBar() {
    return (
        <TopBar>
            <LeftBar />
            <RightBar />
        </TopBar>
    );
}
export default AppBar