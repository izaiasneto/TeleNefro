import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Container, ModalOverlay, ModalBox, Content } from './styles';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    const outsideRef = React.useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current){
            onClose();
        }
    }
       
    return isOpen ? (
        <Container>
            <ModalOverlay
                ref={outsideRef}
                onClick={handleCloseOnOverlay}
            />
            <ModalBox >
                <button onClick={onClose}>
                    <AiOutlineCloseCircle />
                </button>
            
                <h1>{title}</h1>
                <Content>
                    {children}
                </Content>
            </ModalBox>
            
        </Container>     
    ) : null;
};

export default Modal;