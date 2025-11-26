import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { CartItemsContainer, CustomerLocationAndCart, HeaderContainer } from "./styles";
import { Link } from "react-router-dom";

export function Header(){
  return (
    <HeaderContainer>
      <img src="/logo.svg" />
      <CustomerLocationAndCart>
        <span>
          <MapPinIcon weight="fill" size={22}/>
          Porto Alegre, RS
        </span>
        <Link to='/checkout'>
          <ShoppingCartIcon weight="fill" size={22}/>
          <CartItemsContainer visible="false">3</CartItemsContainer>
        </Link>
      </CustomerLocationAndCart>
    </HeaderContainer>
  )
}