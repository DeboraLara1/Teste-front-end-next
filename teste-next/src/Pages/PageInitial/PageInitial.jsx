/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 4rem;
`
const NewUser = styled.button`
    background-color: #ffd700;
    color: #ffffff;
    border: none;
    display: inline-flex;
    position: absolute;
    align-items: center;
    border-radius: 5px;
    right: 24.9rem;
    top: 5rem;
    height: 2rem;
    font-size: 17px;
    
    :hover{
        font-weight: bold;
    }
`

const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    color: #ffffff;
    width: 69rem;
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
    order: 1px solid #dddddd;
    text-align: ${(props) => props.textAlign};
    padding: 8px;
    width: 10rem;

    svg{
        margin-left: 3rem;
    }

    svg:hover{
        color: #ffd700;
    }

`


export default {
    NewUser,
    Section,
    Table,
    Tr,
    Th,
    Td
}
