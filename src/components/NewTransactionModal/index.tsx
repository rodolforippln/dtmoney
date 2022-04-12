import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
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
                <img src={closeImg} alt="Fechar modal"/>
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
                        <img src={incomeImg} alt='Entradas'/>
                        <span>Entradas</span>

                    </RadioBox>
                    <RadioBox
                        type='button'
                        isActive={type === 'widthdraw'}
                        activeColor={'red'}
                        onClick={() => setType('widthdraw')}                                 
                    >
                        <img src={outcomeImg} alt='Saída'/>
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