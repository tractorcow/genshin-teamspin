import { ElementType } from '../types/teams'
import Pyro from '../images/element_pyro.svg'
import Cryo from '../images/element_cryo.svg'
import Hydro from '../images/element_hydro.svg'
import Electro from '../images/element_electro.svg'
import Anemo from '../images/element_anemo.svg'
import Geo from '../images/element_geo.svg'
import Dendro from '../images/element_dendro.svg'

type ElementIconProps = {
  element: string
}

const getSource = (element: string): string => {
  switch (element) {
    case 'Pyro':
      return Pyro
    case 'Hydro':
      return Hydro
    case 'Cryo':
      return Cryo
    case 'Electro':
      return Electro
    case 'Anemo':
      return Anemo
    case 'Geo':
      return Geo
    case 'None': // MC
    case 'Dendro':
      return Dendro
    default:
      throw new Error(`Invalid element: ${element}`)
  }
}

const ElementIcon = ({ element }: ElementIconProps) => (
  <img src={getSource(element)} alt={element} />
)
export default ElementIcon
