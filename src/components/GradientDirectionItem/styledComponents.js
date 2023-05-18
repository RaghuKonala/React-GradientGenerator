// Style your elements here

import styled from 'styled-components'

export const DirectionTab = styled.li`
  list-style-type: none;
  margin: 10px;
`

export const CustomButton = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  width: 120px;
  padding: 12px 24px;
  border-radius: 6px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
