// src/app/Detalhes.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Detalhes({ route }: any) {
  const { item } = route.params;

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
