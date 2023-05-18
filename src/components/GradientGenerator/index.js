import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  ResponsiveContainer,
  AppHeader,
  AppContent,
  DirectionTabs,
  ColorPickersContainer,
  ValueAndInputContainer,
  ColorValue,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    activeGradientDirection: gradientDirectionsList[0].value,
    colorInput1: '#8ae323',
    colorInput2: '#014f7b',
  }

  generateGradient = () => {
    const {activeGradientDirection, colorInput1, colorInput2} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${colorInput1}, ${colorInput2}`,
    })
  }

  updateColorInput2 = event => {
    this.setState({colorInput2: event.target.value})
  }

  updateColorInput1 = event => {
    this.setState({colorInput1: event.target.value})
  }

  changeGradientDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  render() {
    const {
      gradientValue,
      activeGradientDirection,
      colorInput1,
      colorInput2,
    } = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <AppHeader>Generate a CSS Color Gradient</AppHeader>
          <AppContent>Choose Direction</AppContent>
          <DirectionTabs>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                isActive={eachDirection.value === activeGradientDirection}
                changeGradientDirection={this.changeGradientDirection}
              />
            ))}
          </DirectionTabs>
          <AppContent>Pick the Colors</AppContent>
          <ColorPickersContainer>
            <ValueAndInputContainer>
              <ColorValue>{colorInput1}</ColorValue>
              <ColorInput
                type="color"
                value={colorInput1}
                onChange={this.updateColorInput1}
              />
            </ValueAndInputContainer>
            <ValueAndInputContainer>
              <ColorValue>{colorInput2}</ColorValue>
              <ColorInput
                type="color"
                value={colorInput2}
                onChange={this.updateColorInput1}
              />
            </ValueAndInputContainer>
          </ColorPickersContainer>
          <GenerateButton onClick={this.generateGradient}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
