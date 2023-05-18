// Write your code here
import {DirectionTab, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, changeGradientDirection} = props
  const {displayText, value} = directionDetails

  const onClickDirectionTab = () => {
    changeGradientDirection(value)
  }

  return (
    <DirectionTab>
      <CustomButton isActive={isActive} onClick={onClickDirectionTab}>
        {displayText}
      </CustomButton>
    </DirectionTab>
  )
}

export default GradientDirectionItem
