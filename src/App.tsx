import React from 'react';
import styled from "styled-components";

const App = () => {
    return (
        <div>
            This is App component))
            <Box>
                <Link>Super Link</Link>
                <StyledButton as="a" href="#">link</StyledButton>
                <StyledButton>button</StyledButton>
                <SuperButton>yoyo</SuperButton>
            </Box>
        </div>
    );
}

export default App;


const StyledButton = styled.button`
    border: none;
    background-color: darkblue;
    padding: 10px 20px;
    border-radius: 5px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;
`

const Link = styled.a `
    border: none;
    background-color: darkblue;
    padding: 10px 20px;
    border-radius: 5px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;
`

const SuperButton = styled(StyledButton)`
    background-color: darkcyan;
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
