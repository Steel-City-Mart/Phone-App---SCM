import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import Colours from '../../Constants/GlobalConstants'

const headerButton  = props => <HeaderButton {...props} IconComponent = {Ionicons} iconSize = {23} color =  {Colours.iconColor}/>

export default headerButton