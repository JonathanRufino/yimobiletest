# Yi Mobile Test

Este aplicativo foi desenvolvido como parte do teste prático, que compõe uma das etapas do processo seletivo, para estágio na empresa Yi Mobile.

Para executar o aplicativo realize os seguintes passos:

1. Clone este Repositório
2. Instale as dependências com ````npm install```` ou ````yarn install````
3. Rode o aplicativo:
    - Android: ````react-native run-android````
    - iOS: ````react-native run-ios````

**Atenção:** Se ocorrer um dos erros a seguir realize as ações sugeridas.

- **````ENOENT no such file or directory lstat````**
    - Apenas rode o aplicativo novamente
- **````Error: While resolving module `react-native-vector-icons/MaterialIcons`, the Haste package `react-native-vector-icons` was found. However the module `MaterialIcons` ````**
    - Execute ````rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json````

## Aplicativo

O aplicativo é composto por 3 elementos principais:
- Barra de Navegação
- Lista de Categorias
- Lista re Restaurantes

Esses elementos foram separados em componentes, e subcomponentes, para permitir a modularização do código, bem como a sua devida reutilização.

### Barra de Navegação

A barra de navegação possui um ícone para acesso ao menu, o título do aplicativo e outro ícone para acesso as configurações/preferências do app.

O título é recebido como parâmetro, permitindo que o texto seja atualizado em tempo de execução para corresponder ao contexto no qual o usuário se encontra. Um exemplo prático seria ao acessar uma das categorias atualizar o texto da barra para "Categorias" ou para a categoria selecionada.

### Lista de Categorias

A lista de categorias é uma lista com rolagem horizontal, que seria populada com os dados de um arquivo ````json```` obtido por meio de uma requisição HTTP, mas para este teste os dados e as imagens foram previamente fornecidos. Por este motivo esse elemento foi implementado como um componente de classe, para permitir a atualização do estado (lista de categorias) em tempo de execução.

### Lista de Restaurantes

O elemento mais complexo, devido a quantidade de informações e organização dos subelementos. De forma similar à **Lista de Categorias** este componente também é uma lista de dados, no entanto com rolagem vertical.

As informações apresentadas em cada um dos itens da lista são carregadas do arquivo ````json```` fornecido e as imagens são carregadas de acordo com o valor do campo ````"image"````, que contém o caminho para o arquivo.

Nesta lista 2 elementos merecem destaque, são eles a **avaliação do resturante** e o **índice de preço**. Cada um desses elementos foi separado em um componente para melhor organizar o código e separar sua lógica específica;

**Avaliação do Restaurante:**

Este elemento é dinamicamente estilizado de acordo com a nota do resturante. Essa nota é passada como parâmetro para o componente, e em seguida é aplicada uma lógica condicional para identificar a faixa a qual a nota pertence (cada faixa possui uma cor específica), e por fim retorna a cor que o componente deve utilizar no background.

**Índice de Preço:**

Já a indicação do preço é composta por quatro símbolos de dolar ($$$$) que indicam a avaliação de preço para aquele restaurante. O símbolos são **"preenchidos"** a medida que o índice aumenta.

Os símbolos possuem uma cor padrão mais clara, e são preenchidos com uma cor mais escura de acordo com seu índice.

Para implementar tal comportamente, o componente ````<PriceIndicator>```` recebe como parâmetro o preço ````price```` e a nota máxima ````maxValue```` permitindo assim alterar a escala.

Com os parâmetros citados é então realizado um loop que cria cada um dos símbolos verificando se deve ser preenchido ou não, caso sim é atribuida então uma cor mais escura ao elemento que representa o índice dentre o total.

### Considerações

- Foi necessário renomear a imagem ````café_square.png```` para ````cafe_square.png````, pois o react native não identifica arquivos com acento no nome.
- Também foi necessário criar a variável ````IMAGES```` como um dicionário para realizar a importação dos arquivos de imagem, visto que o react native não permite a importação dinâmica de arquivos estáticos com os método ````require(path)```` e ````<Image source={{ uri: path }}````.
- O ícone de **"Configurações"** apresentado no sketch não foi encontrado na biblioteca sugerida (possivelmente o ícone foi atualizado ou removido), desta forma foi utilizado outro ícone semelhante.

### Resultado

<img src="https://github.com/JonathanRufino/yimobiletest/blob/master/Android.png?raw=true" width="350">
