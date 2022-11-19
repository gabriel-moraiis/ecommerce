import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px 0px;
    border-bottom: 1px solid darkgray;
    font-size: 20px;
    min-height: 100px;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Description = styled.h2`
    width: 23%;
    font-size: 20px;
`;

export const Quantity = styled.span`
    width: 23%;
    display: flex;
    align-items: center;
    gap: 14px;
    padding-left: 12px;
    font-weight: bold;
`;

export const Price = styled.span`
    width: 23%;
    font-weight: bold;
    padding-left: 8px;
`;

export const Remove = styled.div`
    padding-left: 20px;
    cursor: pointer;
`;

export const Arrow = styled.div`
    font-weight: bold;
    cursor: pointer;
`;
