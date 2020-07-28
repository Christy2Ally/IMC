import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');

  const [altura, setAltura] = useState('');
  var result = ''

  function cauculo(){
    if(( peso == '' ) || (altura == '')){
      alert("Faltou digitar o peso peso e/ou altura")
    }
    else{
      let alturaR = altura/100;
      result = (peso/(alturaR*alturaR));
      //alert(result);
      if(result<=18.5){
        alert('Estado: \n Você ta puro osso, trate de comer \n  \n Índice: ' + result);
      }else if((result > 18.5) && (result <= 25)){
        alert('Estado: \n Não vejo nenhum problema, mas cuidado com os chocolates \n  \n Índice: ' + result);
      }else if((result > 25) && (result <= 30)){
        alert('Estado: \n Você está um pouco acima do que era para estar. \n Eu disse para ter cuidado com os chocolates.\n Pare de ser sedentário\n Índice: ' + result);
      }else if((result > 30) && (result <= 40)){
        alert('Estado: \n Procure um médico, talvez você não esteja bem de saúde :( \n Índice: ' + result);
      }else if(result > 40){
        alert('Estado: \n Tomara que você esta gravido (a) de penta-gêmeos\n Sério, procura um médico \n Índice: ' + result);
      }
    }
  }
  //var resultString = result.toString();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Teste de IMC
      </Text>
      <TextInput 
        style={styles.tinput}
        value= {peso}
        onChangeText= {(peso) => setPeso(peso)}
        placeholder="Peso (Kg)"
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.tinput}
        value= {altura}
        onChangeText= {(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />
      <TouchableOpacity 
      style={styles.buttom}
      onPress={cauculo}
      >

        <Text style={styles.ntxt}>
          Verificar :3
        </Text>

      </TouchableOpacity>
     


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
    
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 30,
    color: '#FFF'
  },
  tinput: {
    marginTop:20,
    padding: 10,
    margin: 8,
    borderRadius: 14,
    backgroundColor: '#1C1C1C',
    textAlign: "center",
    color: '#FFF',
    fontSize: 20,
  },
  ntxt: {
    fontSize: 18,
    textAlign: "center",
    color: '#FFF'
  },
  buttom: {
    padding: 8,
    backgroundColor: '#808080',
    borderRadius:3,
    margin: 50,
    marginRight:100,
    marginLeft: 100,
  },

  
});
