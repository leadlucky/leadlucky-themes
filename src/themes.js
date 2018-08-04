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
    imageUrl: '/static/screenshots/winter.png',
    name: 'Winter',
    description: 'Winter theme'
  },
  'spring': {
    component: SpringTheme,
    imageUrl: '/static/screenshots/spring.png',
    name: 'Spring',
    description: 'Get leads with this relaxing universal theme.'
  },
  'summer': {
    component: SummerTheme,
    imageUrl: '/static/screenshots/summer.png',
    name: 'Summer',
    description: 'Summer theme'
  },
  'fall': {
    component: FallTheme,
    imageUrl: '/static/screenshots/fall.png',
    name: 'Fall',
    description: 'A seasonal theme to attract the right leads.'
  },
  'food': {
    component: FoodTheme,
    imageUrl: '/static/screenshots/food.png',
    name: 'Food',
    description: 'A hella tasty theme'
  },
  'vinyard': {
    component: VinyardTheme,
    imageUrl: '/static/screenshots/wine.png',
    name: 'Vinyard',
    description: 'A wine / vinyard theme'
  },
  'newyork': {
    component: NewyorkTheme,
    imageUrl: '/static/screenshots/nyc.png',
    name: 'New York',
    description: 'no one can hear you scream in space'
  },
  'chicago': {
    component: ChicagoTheme,
    imageUrl: '/static/screenshots/chitown.png',
    name: 'Chicago',
    description: 'no one can hear you scream in space'
  },
  'christmas': {
    component: ChristmasTheme,
    imageUrl: '/static/screenshots/crimbus.png',
    name: 'Christmas',
    description: 'a chirstmas theme woohoo'
  },
  'halloween': {
    component: HalloweenTheme,
    imageUrl: '/static/screenshots/hallowballow.png',
    name: 'Halloween',
    description: 'spooky n stuffs'
  },
  'beach': {
    component: BeachTheme,
    imageUrl: '/static/screenshots/beach.png',
    name: 'Beach',
    description: 'Great theme for travel niche.'
  },
  'paralax': {
    component: ParaTheme,
    imageUrl: '/static/screenshots/parallax.png',
    name: 'Parallax',
    description: 'Parallaxing and mobile optimized theme.'
  },
  'drawing': {
    component: DrawingTheme,
    imageUrl: '/static/screenshots/drawing.png',
    name: 'Drawing',
    description: 'Animated video background.'
  },
  'forest': {
    component: ForestTheme,
    imageUrl: '/static/screenshots/forestbg.png',
    name: 'Forest',
    description: 'Calming forest theme.'
  },
}
