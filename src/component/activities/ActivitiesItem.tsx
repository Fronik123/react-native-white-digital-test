import React from 'react'
import { View, Text } from 'react-native'
import tw from '@tw'
import StartIcon from '@assets/icons/activities/star.svg'
import MapPoint from '@assets/icons/activities/map-point.svg'
import { IActivities } from 'data/types/activities'
import CustomImage from '@component/ui/CustomImage'

interface Props {
  activitiesData: IActivities
}

const ActivitiesItem: React.FC<Props> = data => {
  const activities = data.activitiesData

  return (
    <View style={tw`mr-5 ml-5 mb-2.5`}>
      <View>
        <CustomImage uri={activities.photoUrl} />
      </View>

      <View style={tw`border-0 rounded-[20px] p-5 bg-bgGray`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-mainBlack text-fz16 leading-lh15 font-abel`}>
            {activities.name}
          </Text>

          <View style={tw`flex-row items-center`}>
            <StartIcon />

            <Text style={tw`text-mainBlack text-fz12 leading-lh14 font-sfPro`}>
              {activities.rating}
            </Text>
          </View>
        </View>

        <View style={tw`flex-row items-center justify-between mt-3`}>
          <View style={tw`flex-row items-center`}>
            <MapPoint />

            <Text style={tw`ml-1.5 text-fz12 leading-lh14 font-sfPro`}>
              {activities.location}
            </Text>
          </View>

          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-mainBlack text-fz14 leading-lh17 font-sfPro`}>
              ${activities.price}
            </Text>

            <Text
              style={tw`text-mainGray text-fz12 leading-lh14 ml-1 font-sfPro`}
            >
              / night
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ActivitiesItem
