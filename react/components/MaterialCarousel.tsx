import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import MaterialTable from './MaterialTable'
import TopMaterials from './TopMaterials'

const ALT_MATERIALS = [
  'Silk (silkworm)',
  'Hydroxy Apatite',
  'Polycaprolactone (PCL)',
  'Silk (Nephalia spider)',
]

const TRADITIONAL = ['Traditional Materials', 'Polyethylene', , 'Silica Glass']

const MaterialCarousel: React.FC = () => (
  <Carousel arrows dots>
    <MaterialTable />
    <TopMaterials data={ALT_MATERIALS} name='Top Alternative Materials' />
    <TopMaterials data={TRADITIONAL} name='Traditional Materials' />
  </Carousel>
)

export default MaterialCarousel
