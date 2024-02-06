import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`
export const ResultName = styled.p`
  color: #ffffff;
  font-size: 20px;
`

export const ResultText = styled.p`
  font-size: 20px;
  color: #ffffff;
`
