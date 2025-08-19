import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ItemContext } from "./context/ItemContext";

export default function Detalhes() {
  const { item } = useContext(ItemContext);

  if (!item) return <Text>Item não encontrado!</Text>;

  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.description}>{item.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: { width: 200, height: 200, borderRadius: 15, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 16, textAlign: "center" },
});
