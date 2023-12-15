import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  const handleParticipantAdd = () => {
    console.log("Clicou para adicionar um participante");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 15 de Dezembro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
