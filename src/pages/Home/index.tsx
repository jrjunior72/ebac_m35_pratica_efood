// pages/Home/index.tsx
import { RestaurantList } from '../../components/RestaurantList'
import Header from '../../components/Header'
import * as S from './styles'
import { restaurants } from '../../mocks/restaurant'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <>
      <Header />
      <S.HomeContainer>
        <RestaurantList restaurants={restaurants} />
      </S.HomeContainer>
      <Footer />
    </>
  )
}
