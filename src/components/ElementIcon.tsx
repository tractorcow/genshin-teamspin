import { ElementType } from '../types/teams'
import Pyro from '../images/element_pyro.svg'
import Cryo from '../images/element_cryo.svg'
import Hydro from '../images/element_hydro.svg'
import Electro from '../images/element_electro.svg'
import Anemo from '../images/element_anemo.svg'
import Geo from '../images/element_geo.svg'
import Dendro from '../images/element_dendro.svg'

type ElementIconProps = {
  element: ElementType
}

const getSource = (element: ElementType): string => {
  switch (element) {
    case 'ELEMENT_PYRO':
      return Pyro
    case 'ELEMENT_HYDRO':
      return Hydro
    case 'ELEMENT_CRYO':
      return Cryo
    case 'ELEMENT_ELECTRO':
      return Electro
    case 'ELEMENT_ANEMO':
      return Anemo
    case 'ELEMENT_GEO':
      return Geo
    case 'ELEMENT_NONE': // MC, default to dendro
      return Dendro
    case 'ELEMENT_DENDRO':
      return Dendro
    default:
      throw new Error(`Invalid element: ${element}`)
  }
}

const ElementIcon = ({ element }: ElementIconProps) => (
  <img src={getSource(element)} alt={element} />
)
export default ElementIcon
