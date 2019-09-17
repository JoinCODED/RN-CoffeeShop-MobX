import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../store/cartStore";

const CartButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => navigation.navigate("CoffeeCart")}>
      <Text style={{ color: "white" }}>{cartStore.quantity}</Text>
      <Icon name="shoppingcart" type="AntDesign" />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
