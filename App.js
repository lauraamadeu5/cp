import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState();
  const [percentualAumento, setPercentualAumento] = useState();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de produtos</Text>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.input}
          placeholder='Informe o nome do produto'
          value={nomeProduto}
          onChangeText={setNomeProduto}
          keyboardType='name'
        />
        <TextInput
          style={styles.input}
          placeholder='Digite o valor do Produto'
          value={valorProduto}
          onChangeText={setValorProduto}
          keyboardType="numeric" />
        <TextInput
          style={styles.input}
          placeholder='Digite o percentual de aumento'
          value={percentualAumento}
          onChangeText={setPercentualAumento}
          keyboardType="numeric" />
      </View>
      <Calculo valorProduto={valorProduto} percentualAumento={percentualAumento} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'pink'

  },
  title: {
    fontSize: 34,
    fontWeight: 430
  },
  containerInputs: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center'
  },
  input: {
    width: 200,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 7,
    borderRadius: 8,
    fontSize: 10
  }

});

