# frontend-ctd-commerce
Requisitos Projeto Front-end

1.Todo o site deve estar responsivo.
2.O entregável será uma página em HTML5, SASS, React-Bootstrap e React.
3.Utilize a API criada no trabalho de Back-end acima para fornecer os dados necessários pro site. 
4.O head deve variar de acordo com a página atual. Ex: Na página do produto leite ficaria: nomeDoProjeto | Leite
5.Header deve conter 4 itens além da logo. Cada item deve linkar com uma parte do site. Exemplo: Home, Produtos, Carrinho, Sobre nós.
6.Na home, faça um carousel de duas páginas, cada uma delas terá 3 produtos. Ao clicar no produto, o usuário será redirecionado para a página de detalhes do mesmo. Uma seção que exibe as categorias dos produtos que quando clicada, vai para a página de produto, filtrada por categoria.
7.Dentro da página de produtos, haverá uma opção para filtrar os produtos de acordo com a categoria.
8.Seu site tem de ter uma página de detalhes para cada item listado onde haverá uma explicação sobre o mesmo. Ex: A página de uma bolsa teria um título, descrição, categoria, imagem, avaliação, etc.
9.Na tela do produto, deve ser possível adicioná-lo num carrinho, mas esse carrinho ficará em um estado dentro da contextAPI e vai ser compartilhado pela aplicação inteira. Posteriormente, quando o usuário clicar na aba de carrinho, os dados serão buscados da contextAPI e a lista de produtos será listada.
10.Não se esqueça de colocar todos os membros da equipe na página de sobre nós.

Pacotes NPM para a inicialização do projeto

npm install react-bootstrap bootstrap@5.1.3
npm i sass
npm install react-icons --save
npm install react-router-dom --save
