import { StackScreenProps } from '@react-navigation/stack'
import { IActivities } from 'data/types/activities'

export type RootStackParamList = {
  Home: undefined
  Favorites: {
    activities: IActivities
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
