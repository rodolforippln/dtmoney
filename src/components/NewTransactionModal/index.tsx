import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
//import closeImg from '../../assets/close.svg';
//import incomeImg from '../../assets/income.svg';
//import outcomeImg from '../../assets/outcome.svg';
import { useTransations } from '../../hooks/useTransactions';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransations();
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    
    async function handleNewTransaction(event: FormEvent) {
        event.preventDefault(); 
        
        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    

    return (
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >

            <button 
                type='button' 
                onClick={onRequestClose} 
                id="react-modal-close"
            >
                
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#A8A8B3"/>
                </svg>
            </button>

            <Container onSubmit={handleNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder='Título'
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    value={amount} 
                    onChange={event => setAmount(Number(event.target.value))}
                    placeholder='Valor' 
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        isActive={type === 'deposit'}
                        activeColor={'green'}
                        onClick={() => setType('deposit')} 
                                                        
                    >                        
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2.66666C8.63621 2.66666 2.66668 8.6362 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66666 16 2.66666Z" stroke="#33CC95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.3333 16L16 10.6667L10.6667 16" stroke="#33CC95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 21.3333L16 10.6667" stroke="#33CC95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Entradas</span>

                    </RadioBox>
                    <RadioBox
                        type='button'
                        isActive={type === 'widthdraw'}
                        activeColor={'red'}
                        onClick={() => setType('widthdraw')}                                 
                    >                        
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63621 23.3638 2.66668 16 2.66667C8.63622 2.66667 2.66669 8.63621 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333Z" stroke="#E62E4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.6667 16L16 21.3333L21.3334 16" stroke="#E62E4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 10.6667L16 21.3333" stroke="#E62E4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <span>Saídas</span>

                    </RadioBox>
                </TransactionTypeContainer>

                <input                    
                    placeholder="Categoria"
                    value={category} 
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
          
        </Modal>
    )
}