import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const Header = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0px;
    justify-content: space-between;
    border-bottom: 1px solid darkgray;
    font-weight: bold;
`;

export const Container = styled.div`
    width: 60%;
    min-height: 90vh;
    margin: 50px auto 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderBlock = styled.div`
    width: 23%;

    &:last-child{
        width: 8%;
    }
`;

export const Total = styled.span`
    font-weight: bold;
    font-size: 36px;
`;

export const ButtonEmpty = styled(Button)`

`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
`;
