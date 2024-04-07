import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    
    it('Deve adicionar dois comentarios', () => {
        render(<PostComment />)
        
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Muito bonito!'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comment'))

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Onde eu consigo um?'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comment'))

        expect(screen.getAllByTestId('comment-item')).toHaveLength(2)
    })
});