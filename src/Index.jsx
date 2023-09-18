import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { BtnAdd, Container, Produto, TrashBtn, ErrorInput } from './styled-components/styles'


//React Hooks - ferramentas

//useRef - colocar referencias

// useState - estado especial que atualiza a tela a cada alteração

// current entrar no vaor exato da escrita

// push - para pegar variáveis e ir adicionando Arrays

// {} para colocar códigos JS

// map() para pegar item por item

// ... na variável matem o vaor anterior,e deixa o antigona tela

// função com parametro deve ser ultilizado, exemplo: <button onClick={() => deletarItem(parametro)}> </button>

function Index() {

  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();


  function click() {


    if (inputRef.current.value.length > 0) {
      setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
      document.querySelector('input').style.border = "none"
      document.querySelector(ErrorInput).style.display = "none";
    } else {
      inputRef.current.value = '';
      alert('Digite algo na lisa de tarefas');
      document.querySelector('input').style.border = "2px solid red";
      document.querySelector(ErrorInput).style.display = "block";
    }
    inputRef.current.value = '';
   
  }
  function deletar(id) {
    setProdutos(produtos.filter(item => item.id !== id))
    

  }

  return (
    <>
      <Container>
        <h1>Lista de tarefas</h1>
        <input type="text" placeholder="produto..." ref={inputRef} />
        <BtnAdd onClick={click}>Adicionar</BtnAdd>
        <ErrorInput>
          <span>Digite algo na lista</span>
        </ErrorInput>

        {
          produtos.map((item) => (
            <Produto key={item.id}>
              <p>{item.nome}</p>
              <TrashBtn onClick={() => deletar(item.id)}>Deletar</TrashBtn>
            </Produto>
          ))
        }

      </Container>
    </>
  )
}

export default Index
