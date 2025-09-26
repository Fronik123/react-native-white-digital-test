import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'
import tw from '@tw'

interface Props {
  title: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
  styleText?: StyleProp<TextStyle>
}

const CustomButton: React.FC<Props> = ({
  title,
  onPress,
  style,
  styleText,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`bg-mainBlack h-14 items-center justify-center rounded-[800px]`,
        style,
      ]}
    >
      <Text style={[tw`text-secondaryWhite text-fz16 leading-lh20`, styleText]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
