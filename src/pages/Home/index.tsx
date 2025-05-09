//import { Banner } from '../../components/Banner'
import { RestaurantList } from '../../components/RestaurantList'
import * as S from './styles'
import { restaurants } from '../../mocks/restaurant'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <>
      <S.HomeContainer>
        <RestaurantList restaurants={restaurants} />
      </S.HomeContainer>
      <Footer />
    </>
  )
}
