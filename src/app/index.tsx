import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import { IoSearch } from "react-icons/io5";
import { IoCutSharp } from "react-icons/io5";
import { GiCarDoor, GiHamburgerMenu } from "react-icons/gi";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Index({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      id: "1",
      titulo: "Maquiagem",
      descricao: "Maquiagem em tons quentes.",
      img: require("../../assets/images/cards/1.png"),
    },
    {
      id: "11",
      titulo: "Sobrancelhas",
      descricao: "Design personalizado.",
      img: require("../../assets/images/cards/11.png"),
    },
    {
      id: "5",
      titulo: "Maquiagem",
      descricao: "Maquiagem marcante.",
      img: require("../../assets/images/cards/5.png"),
    },

    {
      id: "3",
      titulo: "Maquiagem",
      descricao: "Maquiagem social.",
      img: require("../../assets/images/cards/3.png"),
    },
    {
      id: "4",
      titulo: "Maquiagem",
      descricao: "Maquiagem glow.",
      img: require("../../assets/images/cards/4.png"),
    },
    {
      id: "10",
      titulo: "Sobrancelhas",
      descricao: "Sobrancelhas em destaque",
      img: require("../../assets/images/cards/10.png"),
    },

    {
      id: "14",
      titulo: "Sobrancelhas",
      descricao: "Design de sobrancelhas.",
      img: require("../../assets/images/cards/14.png"),
    },
    {
      id: "6",
      titulo: "Maquiagem",
      descricao: "Maquiagem profissional",
      img: require("../../assets/images/cards/6.png"),
    },
    {
      id: "7",
      titulo: "Maquiagem",
      descricao: "Maquiagem personalizada",
      img: require("../../assets/images/cards/7.png"),
    },

    {
      id: "2",
      titulo: "Sobrancelhas",
      descricao: "Design de sobrancelhas simétrico.",
      img: require("../../assets/images/cards/2.png"),
    },

    {
      id: "8",
      titulo: "Maquiagem",
      descricao: "Maquiagem encantadora.",
      img: require("../../assets/images/cards/8.png"),
    },
    {
      id: "9",
      titulo: "Maquiagem",
      descricao: "Maquiagem com técnica e propósito",
      img: require("../../assets/images/cards/9.png"),
    },

    {
      id: "12",
      titulo: "Maquiagem",
      descricao: "Maquiagem delicada",
      img: require("../../assets/images/cards/12.png"),
    },
    {
      id: "13",
      titulo: "Sobrancelhas",
      descricao: "Design de sobrancelhas.",
      img: require("../../assets/images/cards/13.png"),
    },
  ];

  const filteredData = data.filter((item) =>
    item.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/images/outs/Captura de tela 2025-08-22 004142.png")}
            style={{ width: 220, height: 30 }}
            resizeMode="cover"
          />
        </View>

        <Pressable
          style={styles.btnHeader}
          onPress={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu size={30} color="#be964a" />
        </Pressable>
      </View>

      {/* MENU LATERAL */}
      {menuOpen && (
        <View style={styles.menu}>
          <Pressable onPress={() => setSearch("")}>
            <Text style={styles.menuText}>Todos</Text>
          </Pressable>

          <Pressable onPress={() => setSearch("Sobrancelha")}>
            <Text style={styles.menuText}>Sobrancelhas</Text>
          </Pressable>
          <Pressable onPress={() => setSearch("Maquiagem")}>
            <Text style={styles.menuText}>Maquiagens</Text>
          </Pressable>
        </View>
      )}

      {/*SEARCH*/}
      <View style={styles.searchInputContainer}>
        <TextInput
          placeholder="Faça sua busca..."
          placeholderTextColor="#565656ff"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
        <Pressable style={styles.btnSearch}>
          <IoSearch size={30} color="white" />
        </Pressable>
      </View>

      {/*CATEGORIAS*/}
      <View style={styles.speciality}>
        <Pressable onPress={() => setSearch("")} style={styles.specialityText}>
          <Text style={styles.specialityText1}>Todos</Text>
        </Pressable>
        <Pressable
          onPress={() => setSearch("Sobrancelha")}
          style={styles.specialityText}
        >
          <Text style={styles.specialityText1}>Sobrancelhas</Text>
        </Pressable>

        <Pressable
          onPress={() => setSearch("Maquiagem")}
          style={styles.specialityText}
        >
          <Text style={styles.specialityText1}>Maquiagens</Text>
        </Pressable>
      </View>

      {/* LISTA DE CARDS */}
      {modalVisible && (
        <View style={styles.modal}>
          <Pressable
            style={styles.modalClose}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalCloseText}>X</Text>
          </Pressable>
          <Image source={selectedImage} style={styles.modalImage} />
        </View>
      )}

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Image source={item.img} style={styles.image} />
            <View style={styles.cardItemDescription}>
              <Text style={styles.cardItemTitulo}>{item.titulo}</Text>
              <Text style={styles.cardItemParagrafo}>{item.descricao}</Text>
            </View>
            <Pressable
              style={styles.cardbtn}
              onPress={() => {
                setSelectedImage(item.img);
                setModalVisible(true);
              }}
            >
              <Text style={styles.cardbtnText}>Ver mais</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "white",
  },
  //header
  header: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fbfbeb",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  cutLogo: {
    height: 30,
    width: 30,
    color: "#be964a",
  },
  cutText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#be964a",
  },

  btnHeader: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fbfbeb",
  },
  //search
  searchInputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  searchInput: {
    width: "90%",
    padding: 9,
    fontSize: 16,
    borderRadius: 10,
    letterSpacing: 2,
    borderWidth: 1,
    borderColor: "#be964a",
  },
  btnSearch: {
    padding: 6,
    marginLeft: 5,
    borderRadius: 7,
    backgroundColor: "#be964a",
  },
  //categoria
  speciality: {
    padding: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  specialityText: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#be954ae7",
  },
  specialityText1: {
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
  },
  //cards
  cardItem: {
    width: "45%",
    height: 260,
    alignItems: "center",
    flexWrap: "wrap",
    padding: 20,
    justifyContent: "space-around",
    flexDirection: "row",
    margin: 10,
  },
  cardItemImage: {
    width: 160,
    height: 120,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 20,
    alignItems: "center",
    position: "relative",
  },
  cardItemDescription: {
    marginTop: 5,
    height: "auto",
  },
  cardItemTitulo: {
    fontSize: 16,
    color: "#000000c5",
    fontWeight: "bold",
  },
  cardItemParagrafo: {
    fontSize: 12,
    color: "black",
  },
  cardbtn: {
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#be954ae7",
    alignItems: "center",
  },
  cardbtnText: {
    color: "white",
    fontWeight: "bold",
  },
  // menu dropdown
  menu: {
    width: "100%",
    backgroundColor: "#fbfbeb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    gap: 10, // espaçamento entre as opções
  },

  menuText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "white",
    backgroundColor: "#be954ae7",
    textAlign: "center",
  },
  modal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  modalImage: {
    width: "80%",
    height: "50%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  modalClose: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: "#be964a",
    borderRadius: 20,
  },
  modalCloseText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
