import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import tw from '@tw'

const Loading: React.FC = () => {
  return (
    <View
      style={tw`absolute top-0 left-0 right-0 bottom-0 justify-center items-center bg-white/70 z-10`}
    >
      <ActivityIndicator size="large" color="#00f" />

      <Text style={tw`mt-2`}>Loading</Text>
    </View>
  )
}

export default Loading
