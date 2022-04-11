import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
`
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1080px;
    margin: 0 auto;
    padding: 2rem 1rem 7rem;

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: var(--border-radius-normal);
        height: 3rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
    
`