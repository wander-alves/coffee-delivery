import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react";

import { HeroContainer, HeroHeadlineContainer, HeroHeadlineContentContainer, HeroListContainer, HeroListItem } from "./styles";

import heroImg from '../../assets/hero.png';

export function Hero(){
  return(
    <HeroContainer>
      <HeroHeadlineContainer>
        <HeroHeadlineContentContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </HeroHeadlineContentContainer>
        
        <HeroListContainer>
          <HeroListItem itemcolor="yellow-dark">
            <div>
              <ShoppingCartIcon size={16} weight="fill"/>
            </div>
            <p>Compra simples e segura</p>
          </HeroListItem>
          <HeroListItem itemcolor="base-text">
            <div>
              <PackageIcon size={16} weight="fill"/>
            </div>
            <p>Embalagem mantém o café intacto</p>
          </HeroListItem>
          <HeroListItem itemcolor="yellow">
            <div>
              <TimerIcon size={16} weight="fill"/>
            </div>
            <p>Entrega rápida e rastreada</p>
          </HeroListItem>
          <HeroListItem itemcolor="purple">
            <div>
              <CoffeeIcon size={16} weight="fill"/>
            </div>
            <p>O café chega fresquinho até você</p>
          </HeroListItem>
        </HeroListContainer>

      </HeroHeadlineContainer>
      <img src={heroImg} />
    </HeroContainer>
  )
}