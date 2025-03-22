import { View, Text, ActivityIndicator, Image } from "react-native";
import { Contato, getContatoById } from "../../services/contatos";
import { useEffect, useState } from "react";
import { styles } from "../../estilos/main";
import { useLocalSearchParams } from "expo-router";

export default function Detalhes() {
    const { id } = useLocalSearchParams();
    const [contato, setContato] = useState<Contato>();

    useEffect(() => {
        (async () => {
            const contato = await getContatoById(id as string)
            setContato(contato)
        })()
    }, [])
    return (
        <View style={styles.container}>
            {contato ?
                <>
                    <Image source={{uri: contato.foto}} style={{ width: 100, height: 100 }} />
                    <Text style={styles.text}>{contato.nome}</Text>
                    <Text style={styles.text}>{contato.email}</Text>
                    <Text style={styles.text}>{contato.telefone}</Text>
                    <Text style={styles.text}>{contato.endereco}</Text>
                </>
                :
                <ActivityIndicator />
            }
        </View>
    )
}