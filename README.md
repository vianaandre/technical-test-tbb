## Teste técnico do processo seletivo da TBB

### Como rodar a aplicação
````
  yarn
````
````
  yarn db
````
````
  yarn build
````
````
  yarn preview
````
<hr />

### Explicação 
 - Foi utilizado uma estrategia de separar lógica do html utilizando **hooks** juntamente com **createContext** do react
 - Foi adicionado um **setTimeout** dentro do useEffect para criar um efeito de loading na tela e assim tornar a aplicação mais real
 - Foi criado um hook específico chamado **useFetch** para chamadas na **API** utilizando a lib **SWR**
 - Foi criado um hook específico chamado **useToast** para adicionar mensagem de toast para o usuário
 - Foi criado um **theme** para trazer uma melhor padronização nos estilos da aplicação 
 - Foi implementado testes apenas para o componente de Checkbox com o intuito de mostrar a implementação de testes unitários

<hr />

### Pastas
**/common**
> Irá conter os estilos globais, hooks, interfaces, mocks, assets e configs globais.

**/components**
> Está contendo todos os componentes que poderão ser reutilizável em diferentes lugares da aplicação.

**/layout**
> O layout serve para construir interfaces que serão utilizadas em volta da tela.

**/pages**
> O pages abriga as páginas da minha aplicação e dentro dela tenho a pasta components que irá abrigar os components exclusivos daquela determinada página.

**/services**
> Contém as implementações para conexões com APIs e as suas respetivas rotas.

**/utils**
> Funções reutilizáveis em vários lugares diferentes, exemplos como funções de mascará de inputs, formatação de dados e assim por diante.

<hr />

### Tecnologias/frameworks/libs
**vite**
> Fornece uma experiência de compilação mais rápida e enxuta.

**styled-components**
> Fornece uma maneira de escrevermos CSS-in-JS.

**swr**
> Fornece uma estratégia de cache que trás mais performance para a sua aplicação.

**typescript**
> Fornece uma maneira de adicionar tipagem estática para o código.

**json-server**
> Fornece uma maneira de termos uma API Rest falsa para a nossa aplicação.

**react-loading-skeleton**
> Utilizado para criarmos efeito de carregamento com o estilo Skeleton.

**jest**
> Utilizado para testes.

**testing-library**
> Fornece uma maneira de conseguirmos aplicar testes utilizando a DOM.
