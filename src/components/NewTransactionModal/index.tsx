import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';


import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleNewTransaction(event: FormEvent) {
        event.preventDefault();
        const data = {
            title,
            value,
            category,
            type
        };

        api.post('/transactions', data)
        console.log(type)

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
                    value={value} 
                    onChange={event => setValue(parseFloat(event.target.value))}
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
                        isActive={type === 'withdraw'}
                        activeColor={'red'}
                        onClick={() => setType('withdraw')}                                 
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