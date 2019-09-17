import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";
import LogoutButton from "../Buttons/LogoutButton";

const CoffeeList = () => {
  const { cafes } = coffeeStore;
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <CartButton />,
  headerLeft: <LogoutButton />
};

export default observer(CoffeeList);
