import styled from "styled-components";

export const Container = styled.form`

    display: flex;
    flex-direction: column;
    
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%auto;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: var(--border-radius-normal);
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }        
    }

    button[type="submit"] {
        width: 100%auto;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--green);
        color: #fff;
        border-radius: var(--border-radius-normal);
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight: 600px;

        &:hover {
            filter: brightness(0.9);
        }
    }    
`

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 0;
    gap: 1rem; 
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: 'rgb(0, 128, 0, .1)',
    red: 'rgb(255, 0, 0, .1)'
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;        
    padding: 1rem 0;
    gap: 1rem;
    border-radius: var(--border-radius-normal);
    border: 1px solid #d7d7d7;
    transition: border-color 0.3s;

    background-color: ${(props) => props.isActive ? colors[props.activeColor] : 'transparent'};

    &:hover {
        border-color: rgba(0, 0, 0, .3);
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        font-size: 1rem;
        color: var(--text-title);            
    }
`