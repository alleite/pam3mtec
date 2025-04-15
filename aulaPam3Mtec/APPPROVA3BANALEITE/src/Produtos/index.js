import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const data = [
  {
    title: "Protetor Solar Facial",
    text: "Protetor Solar Facial Neutrogena Sun Fresh Derm Care FPS 70 de 40g.",
    valor: 69.99,
    img: "https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F12580212.webp%3Fwidth%3D450%26height%3D450%26quality%3D85%26type%3Dresize&w=256&q=85",
  },
  {
    title: "Creme Hidratante Facial",
    text: "Creme Hidratante Facial Creamy Skincare Calming Cream 40g",
    valor: 48.99,
    img: "https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3516824.webp%3Fwidth%3D450%26height%3D450%26quality%3D85%26type%3Dresize&w=256&q=85",
  },
  {
    title: "Sabonete Líquido Facial",
    text: "Sabonete Líquido Facial Nupill Derme Control 200ml",
    valor: 23.49,
    img: "https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3833913.webp%3Fwidth%3D450%26height%3D450%26quality%3D85%26type%3Dresize&w=256&q=85",
  },
];

const { width: larguraTela, height: alturaTela } = Dimensions.get("window");

export default function CarrosselProdutos() {
  const [background, setBackground] = useState(data[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
        <ImageBackground
          source={{ uri: background }}
          style={styles.imgBg}
          blurRadius={8}
        >
          <View style={styles.slideView}>
            <Carousel
              style={styles.carousel}
              width={width}
              height={250}
              data={data}
              inactiveSlideOpacity={0.5}
              onSnapToItem={(index) => {
                setBackground(data[index].img);
                setActiveIndex(index);
              }}
              scrollAnimationDuration={800}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image source={{ uri: item.img }} style={styles.image} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              )}
            />
          </View>

          <ScrollView>
            <View style={styles.moreInfo}>
              <View style={{ marginTop: 5 }}>
                <View style={styles.headerTitleInfo}>
                  <Text style={styles.movieTitle}>
                    {data[activeIndex].title}
                  </Text>
                  <Text style={styles.priceTitle}>
                    R$ {data[activeIndex].valor},00
                  </Text>
                </View>

                <Text style={styles.movieDesc}>{data[activeIndex].text}</Text>
              </View>
              <TouchableOpacity
                style={{ marginRight: 15, marginTop: 10 }}
                onPress={() => alert("Você enviou pro carrinho")}
              >
                <Icon name="queue" color="#131313" size={30} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 0.9,
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },

  slideView: {
    width: "100%",
    height: 450,
    justifyContent: "center",
    alignItems: "center",
  },

  moreInfo: {
    backgroundColor: "#FFF",
    width: larguraTela,
    height: alturaTela,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  movieTitle: {
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: "#131313",
    marginBottom: 5,
  },
  movieDesc: {
    paddingLeft: 15,
    color: "#131313",
    fontSize: 14,
    fontWeight: "bold",
  },

  headerTitleInfo: {
    flexDirection: "row",
  },

  priceTitle: {
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: "#055a02",
    marginBottom: 5,
  },
});
