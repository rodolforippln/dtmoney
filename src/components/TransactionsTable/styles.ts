import styled from 'styled-components';

export const Container = styled.section`
    
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 1.8rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: .7rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            background-color: var(--shape);
            color: var(--text-body);
            border-radius: var(--border-radius-normal);
            
            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.widthdraw {
                color: var(--red);
            }
        }
        
    }
`