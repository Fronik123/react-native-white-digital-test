import React, { useState } from 'react'
import { View } from 'react-native'
import tw from '../../../tw'

import FastImage from 'react-native-fast-image'
import Loading from '@component/ui/Loading'

interface Props {
  uri: string
  height?: number
}

const MyImage: React.FC<Props> = ({ uri, height = 139 }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <View>
      {loading && <Loading />}
      <FastImage
        source={{
          uri: error
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UWixC5WPWw_mgNb05inJ_lK2cbffBJ2Wfd79o0RApHhacgcsiCCf4BFrqvvl4XXIf48&usqp=CAU'
            : uri,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        style={[tw`w-full  border-0 rounded-[20px]`, { height }]}
        onLoadStart={() => setLoading(true)}
        onLoad={() => {
          setLoading(false)
        }}
        onError={() => {
          setLoading(false)
          setError(true)
        }}
        resizeMode={error ? 'contain' : 'cover'}
      />
    </View>
  )
}

export default MyImage
