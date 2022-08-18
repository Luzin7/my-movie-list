# Minha lista de filme (my movie list)

Um compilado de filmes que assisti com meus amigos. Junto aos títulos, adicionamos nossas opiniões, média de notas e disponibilzamos uma seção de filmes que pretendemos assistir. Além disso, é possível favoritar as avaliações disponíveis no site de forma totalmente dinâmica.

Este é um projeto que utilizo para estudos e testes, portanto, caso esteja interessado em olhar o código, deixo claro que podem existir partes e arquivos inacabados e/ou em construção. O mesmo vale para commits que podem estar totalmente fora do convencional e/ou do correto.
Este é meu projeto "laboratório".

## Funcionalidades (até o momento)

- Rotas dinâmicas
- Rotas Privadas
- Cadastro de usuário (localStorage)
- Adicionar e/ou remover as avaliações dos favoritos
- Adicionar uma foto de perfil para o usuário

## Aprendizados

- Utilizar deploy diretamente do pacote JSON e executando no terminal:

```bash
  npm run deploy
```

- Criar as rotas utilizando HashRouter do react router. Assim consigo fazer as rotas funcionarem no GH Pages e outros sites de hospedagem.

- Rotas Privadas. Utilizada para trazer mais segurança na navegação e, futuramente, proteção de dados.

- Context API. Repassando as informações de forma efetiva entre a árvore de componentes sem precisar passar props manualmente em cada nível (evitando o "prop drilling").

- Sincronizar armazenamento local com estado.

## Stack utilizada

**Front-end:** React, Context API, Vanilla JS

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Luzin7/my-movie-list.git
```

Entre no diretório do projeto

```bash
  cd my-movie-list
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run deploy
```


## Feedback

Se você tiver algum feedback, por favor entre em contato.

