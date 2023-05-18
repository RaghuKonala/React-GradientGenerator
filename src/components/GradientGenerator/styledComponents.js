import styled from 'styled-components'
import {CustomButton} from '../GradientDirectionItem/styledComponents'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const ResponsiveContainer = styled.div`
  width: 85%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 90%;
    max-width: 1140px;
  }
`
export const AppHeader = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const AppContent = styled.p`
  color: #ededed;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const DirectionTabs = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 560px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 560px;
  }
`

export const ColorPickersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 280px;
  margin-bottom: 20px;
`
export const ValueAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled(CustomButton)`
  color: #1e293b;
  background-color: #00c9b7;
`
