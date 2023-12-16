import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>(["João Moreira"]);
  const [participant, setParticipant] = useState<string>("");

  const handleParticipantAdd = () => {
    if (!participant) {
      return Alert.alert("Atenção", "Insira um nome antes de adicionar!");
    }
    const participantToAdd = participant.trim();
    if (participants.includes(participantToAdd)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante com esse nome na lista de presença!"
      );
    }
    setParticipants((prevState) => [...prevState, participantToAdd]);
    setParticipant("");
  };

  const handleParticipantRemove = (name: string) => {
    return Alert.alert("Atenção!", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          onChangeText={setParticipant}
          value={participant}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participante na sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
