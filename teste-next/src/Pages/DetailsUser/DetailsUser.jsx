/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'

const Buttom = styled.button`
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin-left: 22rem;
    border: none;
    cursor: pointer;
    align-items: center;
    right: 6.9rem;
    top: 5rem;
`

const gridContainer = styled.div` 
    height: 106vh;;
    font-size: 16px;
    color: #000000;
    font-family: Montserrat, sans-serif;
    background: linear-gradient(to top, #282c34 60%, #000000 60%) fixed;
    background-position: center;
    background-attachment: fixed;
    margin: 0;
    padding: 2rem 0;
    display: grid;
    place-items: center;
    box-sizing: border-box;
    @media only screen and (max-width: 40em) {
      max-width: 271px;
    }
  
`
const Card = styled.div`
    background-color: #ffffff;
    width: 35rem;
    height: 37rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 2rem;
    box-shadow: 0px 1rem 1.5rem #000000;;
    margin-top: 0,5rem;

    @media only screen and (max-width: 40em) {
      max-width: 271px;
    }
`

const Img = styled.img`
    background-color: #ffd700;;
    box-shadow: 0 0.5rem 1rem #000000;;
    border: solid 0.1rem #ffd700;
    width: 13rem;
    height: 13rem;
    object-fit: cover;
    object-position: top;
    padding: 0.1rem;
    border-radius: 50%;
    transform: translateY(50%);
`
const Banner = styled.div`
    background-color: #ffd700;;
    height: 14rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-bottom: solid 0.1rem #ffd700;
    box-sizing: border-box;
`
const H2 = styled.h2`
    text-align: center;
    padding: 0 2rem 0.5rem;
    margin: 0;
    margin-top: 8rem;
    margin-bottom: 0.5rem;
`
const Div = styled.div``
const DivList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Actions = styled.div`

`
const Ul = styled.ul`
    padding-left: 1rem;
    list-style-type: none;
    display: flex;
    height: 50px;
    object-fit: cover;
    object-position: top;
    justify-content: space-around;
`
const ImgIcons = styled.img`
    width: 4rem;
    margin-bottom: 1rem;
`
export default {
    gridContainer,
    Buttom,
    Card,
    Img,
    Banner,
    H2,
    Div,
    DivList,
    Actions,
    Ul,
    ImgIcons
}