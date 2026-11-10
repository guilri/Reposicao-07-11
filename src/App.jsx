import { useState } from 'react';
import Button from './components/Button';
import InputText from './components/InputText';
import TextArea from './components/TextArea';
import Frase from './components/Frase';

function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <div>
      <Frase/>
      <h2>Formulário</h2>
      <InputText label="Nome: " value={nome} onChange={setNome} />
      <TextArea label="Mensagem: " value={mensagem} onChange={setMensagem} />
      <Button onClick={() => alert(`Nome: ${nome}\nMsg: ${mensagem}`)} />
    </div>
  );
}

export default App;
