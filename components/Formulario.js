import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Formulario(props) {
    const [resultado, setResultado] = useState();
    let valorProduto = props.valorProduto;
    let percentualAumento = props.percentualAumento;

    function calcular() {
        return setResultado(valorProduto * (1 + percentualAumento / 100));
    }

    return (
        <View style={styles.container}>
            <Button color={'green'} title="Calcular" onPress={calcular} />
            <View style={styles.caixaResultado}>
                <Text style={styles.texto}>Resultado</Text>
                <Text style={styles.texto}>Valor original: {props.valorProduto}</Text>
                <Text style={styles.texto}>Percentual de aumento: {props.percentualAumento}%</Text>
                <Text style={styles.texto}>Valor final: R${resultado}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    caixaResultado: {
        width: 190,
        padding: 5,
        backgroundColor: 'pink',
        fontSize: 15
    },
    texto: {
        color: 'white',
        fontSize: 10.

    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 11,
        justifyContent: 'center'
    }
})



