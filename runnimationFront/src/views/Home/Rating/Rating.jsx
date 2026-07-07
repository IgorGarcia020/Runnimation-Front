import Carousel from '../../../components/Carousel/Carousel'; // ajusta la ruta según tu estructura
import { mockShows } from '../../../mockData/mockShows'; // ajusta la ruta

function Rating() {
  return (
    <div>
      <Carousel shows={mockShows} />
    </div>
  )
}

export default Rating