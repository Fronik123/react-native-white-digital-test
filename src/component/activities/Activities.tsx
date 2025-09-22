import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from '../../../tw'

import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import ActivitiesItem from '@component/activities/ActivitiesItem'

import { RootStackParamList } from '@screens/types/root'
import { StackNavigationProp } from '@react-navigation/stack'
import { IActivities } from 'data/types/activities'

interface Props {
  data: IActivities[]
  refetch: () => void
  handleActivitiesItem: (
    item: IActivities,
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
    <View style={tw`flex-1`}>
      <Text
        style={tw`text-center text-fz16 leading-lh20 mb-[37.5px] mt-[18.5px]`}
      >
        Activities
      </Text>

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        contentContainerStyle={{ paddingBottom: 20 }}
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
