import SpringTheme from './templates/PageSpring'
import BeachTheme from './templates/PageBeach'
import ParaTheme from './templates/PagePara'
import DrawingTheme from './templates/PageDrawing'
import ForestTheme from './templates/PageForest'

export default {
  'spring': {
    component: SpringTheme,
    imageUrl: '/static/springtheme4.png',
    name: 'Spring',
    description: 'Get leads with this relaxing universal theme.'
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
  }
}
