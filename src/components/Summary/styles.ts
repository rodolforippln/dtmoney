import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -5rem;

    div {
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: var(--border-radius-normal);
        color: var(--text-title);

        &.background-green {
            background-color: var(--green);
            color: #fff;
        }
    }


    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }





`
