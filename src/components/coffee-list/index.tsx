import { CoffeeCard } from "../coffee-card";
import { CoffeeItemList, CoffeeListContainer } from "./styles";

export function CoffeeList(){
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      
      <CoffeeItemList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeItemList>
    </CoffeeListContainer>
  )
}