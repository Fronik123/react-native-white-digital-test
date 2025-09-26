import { create } from 'twrnc'
import { Config } from 'tailwindcss'
import tailwindConfig from '../tailwind.config'

export type TwConfig = Config

const tw = create(tailwindConfig as TwConfig)

export default tw
