import { useEffect, useState } from 'react';
import { CoffeeCard } from '../coffee-card';
import { CoffeeItemList, CoffeeListContainer } from './styles';

export function CoffeeList() {
  const [coffees, setCoffees] = useState<any[]>([]);
  useEffect(() => {
    async function getAPIData() {
      const response = await fetch('/api/data.json');
      const body = await response.json();
      setCoffees(() => body.coffees);
    }

    getAPIData();
  }, []);

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      <CoffeeItemList>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            description={coffee.description}
            price={coffee.price}
            ingredients={coffee.ingredients}
            imgUrl={coffee.img_url}
          />
        ))}
      </CoffeeItemList>
    </CoffeeListContainer>
  );
}
