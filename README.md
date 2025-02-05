# Git Commitzen Guide
- [English](README-EN.md)

Este repositório foi criado com o objetivo de apresentar e praticar o uso da ferramenta **Commitizen** para padronização de commits em projetos Git. Ele inclui tarefas práticas para ajudar os participantes a explorar os conceitos e funcionalidades da ferramenta.

## Iniciando o projeto

1. **Forke o projeto para o seu perfil**  
   - Clique no botão "Fork" no canto superior direito desta página.  

2. **Clone o repositório forkado**  
   - Vá até o seu fork e copie a URL do repositório.  
   - No terminal, execute o comando:  
     ```bash
     git clone <URL_DO_REPOSITORIO>
     ```  

3. **Acesse o diretório do projeto**  
   ```bash
   cd Git-Commitzen-Guide
   ```  

4. **Instale as dependências**  
   ```bash
   npm install
   ```  

5. **Inicie o projeto**  
   ```bash
   npm run dev
   ```  

---

## Usando o Commitizen

O **Commitizen** facilita a padronização de commits seguindo as convenções. Para utilizá-lo no repositório:  

1. Certifique-se de estar no diretório raiz do projeto.  
2. Execute o comando abaixo para iniciar o assistente interativo do Commitizen:  
   ```bash
   cz commit
   ```  

> **Nota**: Caso ainda não tenha configurado o Commitizen no seu ambiente, utilize o repositório [PS-Commitzen-Setup](https://github.com/strFelix/PS-Commitzen-Setup) para realizar a instalação e configuração inicial.  

### Fluxo de uso do `cz commit`:  
1. Escolha o tipo de commit (ex.: `feat`, `fix`, etc.).  
2. Insira o escopo da alteração (opcional).  
3. Forneça uma descrição curta e clara para o commit (opcional).  
4. Defina se a alteração é uma `BREAKING CHANGE` (pressione Enter para pular).  
5. Confirme o commit.  

> **Dica**: Leia atentamente cada etapa do assistente para garantir que os commits estejam consistentes e informativos.  

---

## Tasks

1. Utilize o **Commitizen** (`cz commit`) para commitar as seguintes tarefas individualmente:  
   1.1. Use as **tags corretas** para cada tipo de alteração.  
   1.2. Adicione **escopos** e descrições (opcional).  

### Lista de Tarefas:
- [X] Indente o código corretamente e remova as linhas de debug e comentários desnecessários.  
- [X] Adicione um botão de envio na tela de cadastro e vincule o form à função `handleSubmit()`.  
- [X] Verifique e corrija a autorização de usuarios autenticados após o submit do formulário.  
- [X] Crie um componente ao input do formulário, para reutilização em outras partes do projeto.  

2. Atualize a documentação do projeto marcando as tarefas cumpridas `[X]`, seguindo os padrões descritos.  

---

## Pull Request (PR)

1. Após completar as tarefas e criar commits, envie as alterações ao GitHub.  
2. Abra uma **Pull Request (PR)** para a branch correta no repositório original.  
   - Certifique-se de descrever claramente as mudanças na PR.  

---

Se precisar de ajuda ou encontrar algum problema, sinta-se à vontade para abrir uma **Issue** neste repositório!
