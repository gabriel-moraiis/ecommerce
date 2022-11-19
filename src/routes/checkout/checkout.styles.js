import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0px;
    justify-content: space-between;
    border-bottom: 1px solid darkgray;
    font-weight: bold;
`;

export const Container = styled.div`
    width: 55%;
    min-height: 90vh;
    margin: 50px auto 0px;
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
    margin-top: 35px;
    margin-left: auto;
`;
