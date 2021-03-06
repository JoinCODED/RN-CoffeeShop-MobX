import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../store/cartStore";
import authStore from "../../store/authStore";

const LogoutButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => authStore.logout(navigation)}>
      <Text style={{ color: "white" }}>Logout</Text>
    </Button>
  );
};

export default withNavigation(observer(LogoutButton));
