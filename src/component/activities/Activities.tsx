import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from '../../../tw'

import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import ActivitiesItem from '@component/activities/ActivitiesItem'
import { TActivities } from '../../data/types/activities'
import { RootStackParamList } from '@screens/types/root'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  data: TActivities[]
  refetch: () => void
  handleActivitiesItem: (
    item: TActivities,
    navigation: StackNavigationProp<RootStackParamList>,
  ) => void
  isRefetching: boolean
  navigation: StackNavigationProp<RootStackParamList>
}

const Activities: React.FC<Props> = ({
  data,
  refetch,
  handleActivitiesItem,
  isRefetching,
  navigation,
}) => {
  return (
    <View>
      <Text
        style={tw`text-center text-fz16 leading-lh20 mb-[37.5px] mt-[18.5px]`}
      >
        Activities
      </Text>

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleActivitiesItem(item, navigation)}
          >
            <ActivitiesItem activitiesData={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Activities
