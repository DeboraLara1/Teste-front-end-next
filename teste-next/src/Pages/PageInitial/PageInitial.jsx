/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 6rem;
`
const NewUser = styled.button`
    background-color: #ffd700;
    color: #ffffff;
    border: none;
    display: inline-flex;
    position: absolute;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    top: 8rem;
    height: 2rem;
    font-size: 15px;
    left: 60%;
    right: 15%;
    width: 10%;
    
    :hover{
        font-weight: bold;
        font-size: 14px;
    }

    @media only screen and (max-width: 50em) {
        font-size: 10px;
        top: 5rem;
        height: 2rem;
        font-size: 17px;
        left: 48%;
        right: 18%;
        width: 20%;
    }
`

const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    color: #ffffff;
    width: 40%;
`
const Thead = styled.thead`
`

const Tbody = styled.tbody`
    border: 1px solid #dddddd;
    :nth-child(even) {
        background-color: #dddddd;
    }
`
const Tr = styled.tr`
    :nth-child(even) {
        background-color: #dddddd;
    }
`

const Th = styled.th`
    border: 1px solid #dddddd;
    text-align: ${(props) => props.textAlign};
    padding: 8px;

`
const Td = styled.td`
    border: ${(props) => props.border};
    text-align: ${(props) => props.textAlign};
    padding: 8px;
    width: 10rem;

    svg{
        margin-left: 01rem;
    }

    svg:hover{
        color: #ffd700;
    }

`

export default {
    NewUser,
    Section,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
}
