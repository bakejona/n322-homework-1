// Products.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Apple Watch",
      price: 299.99,
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?cs=srgb&dl=pexels-tdcat-437037.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Samsung TV",
      price: 999.99,
      image:
        "https://image-us.samsung.com/SamsungUS/support/solutions/tv-and-home-theater/tv/qled/US_ANS_TV_QLED_ANS00082463-0.png",
    },
    {
      id: 3,
      name: "Nike Shoes",
      price: 79.99,
      image:
        "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?cs=srgb&dl=pexels-craytive-1478442.jpg&fm=jpg",
    },
    {
      id: 4,
      name: "Sony Headphones",
      price: 149.99,
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?cs=srgb&dl=pexels-tdcat-437037.jpg&fm=jpg",
    },
    {
      id: 5,
      name: "Canon Camera",
      price: 499.99,
      image:
        "https://i1.adis.ws/i/canon/eos-r7-lifestyle_c604337a3b374a94a080d40b43f3a920?$70-30-header-4by3-dt-jpg$",
    },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productInfo: {
    marginLeft: 10,
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#666",
  },
});

export default Products;
