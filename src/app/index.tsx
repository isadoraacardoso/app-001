import { useState } from "react";
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

export default function Index({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const data = [
    {
      id: "1",
      titulo: "Sobrancelha",
      descricao: "Design de sobrancelhas naturais",
      img: require("../../assets/images/cards/visao.png"),
    },
    {
      id: "2",
      titulo: "Maquiagem",
      descricao: "Make completa para festas",
      img: require("../../assets/images/cards/visao.png"),
    },
    {
      id: "3",
      titulo: "Corte",
      descricao: "Corte de cabelo profissional",
      img: require("../../assets/images/cards/visao.png"),
    },
  ];

  const filteredData = data.filter((item) =>
    item.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <IoCutSharp style={styles.cutLogo} />
          <Text style={styles.cutText}>Home Page</Text>
        </View>

        <Pressable
          style={styles.btnHeader}
          onPress={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu size={30} color="white" />
        </Pressable>
      </View>

      {/* MENU LATERAL */}
      {menuOpen && (
        <View style={styles.menu}>
          <Pressable onPress={() => setSearch("Sobrancelha")}>
            <Text style={styles.menuText}>Sobrancelhas</Text>
          </Pressable>
          <Pressable onPress={() => setSearch("Maquiagem")}>
            <Text style={styles.menuText}>Maquiagens</Text>
          </Pressable>
          <Pressable onPress={() => setSearch("Corte")}>
            <Text style={styles.menuText}>Cortes</Text>
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
        <View style={styles.specialityText}>
          <Text style={styles.specialityText1}>Sobrancelhas</Text>
        </View>
        <View style={styles.specialityText}>
          <Text style={styles.specialityText1}>Maquiagens</Text>
        </View>
      </View>

      {/* LISTA DE CARDS */}
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
              onPress={() => navigation.navigate("Detalhes", { item })}
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
    backgroundColor: "#efefefff",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  cutLogo: {
    height: 30,
    width: 30,
    color: "#5511dd",
  },
  cutText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5511dd",
  },
  cutText1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f1f1f1f",
  },
  btnHeader: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#efefefff",
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
    borderColor: "#5511dd",
  },
  btnSearch: {
    padding: 6,
    marginLeft: 5,
    borderRadius: 7,
    backgroundColor: "#5511dd",
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
    borderRadius: 10,
    backgroundColor: "#efefefff",
  },
  specialityText1: {
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#1f1f1f",
  },
  //cards
  card: {
    gap: 10,
    height: 500,
    width: "100%",
    flexWrap: "wrap",
    padding: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  cardItem: {
    width: "45%",
    height: 260,
    alignItems: "center",
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
    marginTop: 45,
  },
  cardItemTitulo: {
    fontSize: 16,
    color: "black",
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
    backgroundColor: "#efefefff",
    alignItems: "center",
  },
  cardbtnText: {
    color: "black",
    fontWeight: "bold",
  },
  // menu dropdown
  menu: {
    width: "100%",
    backgroundColor: "#efefef",
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
    color: "#1f1f1f",
    backgroundColor: "white",
    textAlign: "center",
  },
});
