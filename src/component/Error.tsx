import React from 'react'
import { View, Text } from 'react-native'
import tw from '@tw'

interface Props {
  message: string
}

const Error: React.FC<Props> = data => {
  const messageError = data.message

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Error: {messageError}</Text>
    </View>
  )
}

export default Error
