import { FunctionComponent, PropsWithChildren } from 'react'
import './carouselContainer.css'

const CarouselContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="carousel__container">{children}</div>
}

export default CarouselContainer
