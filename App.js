import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Header = styled.View`
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.bgcor || '#424242'};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Title = styled.Text`
  font-size: 25px;
  margin-left: 10px;
  color: #ffd600;
  font-weight: bold;
`;

const Content = styled.View`
  width: 100%;
  min-height: 80%;
  background-color: #212121;
  align-items: center;
`;
const Footer = styled.View`
  width: 100%;
  height: 10%;
  background-color: red;
`;

const ViewOption = styled.View`
  width: 300px;
  height: 60px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 20px;
`;

const Select = styled.Picker`
  height: 60px;
  width: 300px;
  color: #ffd600;
  border: solid 10px #fff;
`;

const Logo = styled.Image`
  width: 70px;
  height: 50px;
`;

const Options = () => {
  // eslint-disable-next-line no-sparse-arrays
  const currencies = [
    {country: '', currency: '', currencyLabel: 'Selecione uma opcao '},
    {country: 'UK', currency: 'GBP', currencyLabel: 'Pound '},
    {country: 'Udasdsd', currency: 'GBdasdas', currencyLabel: 'dasdasdasd '},
    ,
  ];

  const [selectedValue, setSelectedValue] = useState('');
  return (
    <ViewOption>
      <Select
        selectedValue={selectedValue}
        //style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {currencies.map((v) => {
          return <Picker.Item label={v.currencyLabel} value={v.country} />;
        })}
      </Select>
      <Text>Item Selecionando - {selectedValue}</Text>
    </ViewOption>
  );
};

export default function App() {
  return (
    <Page>
      <Header>
        <Logo source={require('./src/img/pubg-logo.png')} />
        <Title>Quenede Abreu</Title>
      </Header>

      <Content>
        <Options />
      </Content>

      <Footer />
    </Page>
  );
}
