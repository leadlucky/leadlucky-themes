import ParaTheme from './templates/PagePara'
import DrawingTheme from './templates/PageDrawing'
import ForestTheme from './templates/PageForest'
import BeachTheme from './templates/PageBeach'
import SpringTheme from './templates/PageSpring'
import FallTheme from './templates/Fall'
import WinterTheme from './templates/Winter'
import SummerTheme from './templates/Summer'
import FoodTheme from './templates/Food'
import VinyardTheme from './templates/Vinyard'
import ChicagoTheme from './templates/Chicago'
import ChristmasTheme from './templates/Christmas'
import NewyorkTheme from './templates/Newyork'
import HalloweenTheme from './templates/Halloween'

export default {
  'winter': {
    component: WinterTheme,
    imageUrl: '/static/forrest/forestbg.png',
    name: 'Winter',
    description: 'Winter theme'
  },
  'spring': {
    component: SpringTheme,
    imageUrl: '/static/springtheme4.png',
    name: 'Spring',
    description: 'Get leads with this relaxing universal theme.'
  },
  'summer': {
    component: SummerTheme,
    name: 'Summer',
    description: 'Summer theme'
  },
  'fall': {
    component: FallTheme,
    name: 'Fall',
    description: 'A seasonal theme to attract the right leads.'
  },
  'food': {
    component: FoodTheme,
    imageUrl: '/static/forrest/forestbg.png',
    name: 'Food',
    description: 'A hella tasty theme'
  },
  'vinyard': {
    component: VinyardTheme,
    imageUrl: '/static/forrest/forestbg.png',
    name: 'Vinyard',
    description: 'A wine / vinyard theme'
  },
  'newyork': {
    component: NewyorkTheme,
    imageUrl: '/static/forrest/forestbg.png',
    name: 'New York',
    description: 'no one can hear you scream in space'
  },
  'chicago': {
    component: ChicagoTheme,
    imageUrl: '/static/forrest/forestbg.png',
    name: 'Chicago',
    description: 'no one can hear you scream in space'
  },
  'christmas': {
    component: ChristmasTheme,
    imageUrl: '/static/forrest/forestbg.png',
    name: 'Christmas',
    description: 'a chirstmas theme woohoo'
  },
  'halloween': {
    component: HalloweenTheme,
    imageUrl: '/static/forrest/forestbg.png',
    name: 'Halloween',
    description: 'spooky n stuffs'
  },
  'beach': {
    component: BeachTheme,
    imageUrl: '/static/beachBackground.png',
    name: 'Beach',
    description: 'Great theme for travel niche.'
  },
  'paralax': {
    component: ParaTheme,
    imageUrl: '/static/paralaxbg4.png',
    name: 'Parallax',
    description: 'Parallaxing and mobile optimized theme.'
  },
  'drawing': {
    component: DrawingTheme,
    imageUrl: '/static/drawingtheme.png',
    name: 'Drawing',
    description: 'Animated video background.'
  },
  'forest': {
    component: ForestTheme,
    imageUrl: '/static/forrest/forestbg.png',
    name: 'Forest',
    description: 'Calming forest theme.'
  },
}
