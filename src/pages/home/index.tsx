import { CoffeeList } from '../../components/coffee-list';
import { Hero } from '../../components/hero';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CoffeeList />
    </HomeContainer>
  );
}
