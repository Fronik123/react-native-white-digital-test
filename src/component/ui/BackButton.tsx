import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BackIcon from '@assets/icons/favorites/back.svg'
import tw from '@tw'

interface Props {
  style?: object
}

const BackButton: React.FC<Props> = ({ style }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={[tw`left-[13px]`, style]}
      onPress={() => navigation.goBack()}
    >
      <BackIcon />
    </TouchableOpacity>
  )
}

export default BackButton
