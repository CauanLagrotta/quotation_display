import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getEUR } from "../services/awesomeapi";

export default function Screen() {
  const [loading, setLoading] = useState(false);
  const [currentValue, setCurrentValue] = useState<number>(0);

  const updateCurrency = async () => {
    setLoading(true);
    const dolar = await getEUR();
    setLoading(false);
    setCurrentValue(dolar);
  };

  useEffect(() => {
    updateCurrency();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/euro.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      {loading && <Text style={styles.h2}>Carregando...</Text>}

      {!loading && (
        <>
          <Text style={styles.h2}>Euro (EUR): </Text>
          <Text style={styles.currencyText}>R$ {currentValue.toFixed(2)}</Text>

          <Button label="Refresh" onPress={updateCurrency} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b1c2d",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 180,
  },
  h2: {
    color: "#ccc",
    fontSize: 24,
    marginTop: 40,
  },
  currencyText: {
    color: "#fff",
    fontSize: 52,
    marginTop: 20,
  },
});
