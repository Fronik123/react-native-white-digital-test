import { StackScreenProps } from '@react-navigation/stack'
import { Activities } from '../../data/types/activities'

export type RootStackParamList = {
  Home: undefined
  Favorites: {
    activities: Activities
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
