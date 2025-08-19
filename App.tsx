// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./src/app/index";
import Detalhes from "./src/app/Detalhes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Index}
          options={{ headerShown: false }} // esconde cabeçalho padrão
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: "Detalhes do Serviço" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
