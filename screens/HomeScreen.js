import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import RestaurantList from "../components/RestaurantList";

export default function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const processSearchTerm = term => {
    setSearchTerm(term);
  };

  const submitTerm = async () => {
    console.log("Term submitted to API.");
    setIsLoading(true);
    const URL = "https://api.yelp.com/v3/businesses/search";
    const options = {
      headers: {
        Authorization:
          "Bearer i4GamjlSi7dDC5B4zojMAceD0Gf-PhRH_nmDElcEuDB9y5HDPeD86yl-6Bt_EaKTrITLasPDym-jxe3_8cw4I5pSZXuF0ZeOyrs3MwiKuU8XPuk0i4wCHG0Hl2KRZHYx",
      },
      params: {
        location: "washington",
        term: searchTerm,
        limit: 10,
      },
    };
    try {
      const results = await axios.get(URL, options);
      setSearchResults(results.data.businesses);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <ActivityIndicator size={"large"} color={"red"} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrapper}>
        <Searchbar
          term={searchTerm}
          onTermChange={processSearchTerm}
          onReady={submitTerm}
        />
      </View>
      <View style={styles.resultsWrapper}>
        <RestaurantList restaurants={searchResults} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchWrapper: { backgroundColor: "#77dd77", padding: 10 },
  resultsWrapper: {
    backgroundColor: "#ff6961",
    flex: 1,
    padding: 10,
  },
  searchInput: {
    fontSize: 18,
    color: "gray",
    marginLeft: 10,
  },
  search: {
    flexDirection: "row",
    backgroundColor: "#f0eeee",
    borderRadius: 20,
    padding: 10,
  },
});
