# Apresentação do Projeto:

Projeto construído com o objetivo de mostrar meus conhecimentos no react e suas principais bibliotecas, além disso também para contemplar meu portfólio, ajudando a conseguir a tão sonhada primeira vaga.

###Ferramentas utilizadas:

- Optei por utilizar o vite para iniciar, por ser mais rápido
- Eslint para padronização do código
- Na parte do backend optei por utilizar o firebase, para autenticação e banco de dados, como estou focando os estudos em front end, decidi utiliza-lo por ele abstrair muitas lógicas complexas necessárias no backend, o qual pretendo estudar posteriormente, e eu mesmo realizar a autenticação por JWT
- Estou utilizando também a biblioteca react-router-dom para controlar as rotas da aplicação
- Na parte de estilização optei por utilizar a biblioteca styled components


###Funcionalidades do projeto:

- Na página inicial podemos escolher de quais categorias temos preferência em ver os produtos, ao clicar, é redirecionado para um componente que mostra todos os produtos da categoria escolhida, o qual contém cards, com a foto, nome preço do produto, ao clicar no botão adicionar produto, o mesmo é adicionado ao carrinho de compras na parte superior da página, onde o número de itens é atualizado automaticamente, ao clicarmos no carrinho, temos uma lista dropdown dos itens que adicionamos, que mostra as mesmas informações dos cards, porém em tamanho reduzido, mas com um detalhe de que ao adicionarmos um produto no carrinho, adicionamos também uma propriedade que mostra a quantidade do produto adicionado, se clicarmos para adicionar um mesmo item que já existe no carrinho, ele aumenta a unidade.

- Na página catálogo, temos uma pré visualização que mostra somente 4 primeiros itens de cada categoria, que ao clicarmos, nos redireciona para a página que mostra todos os produtos da categoria escolhida.

- Ná pagina de cadastro e login, temos a opção de se conectar com o google, ou criarmos uma conta.

- Na página de checkout, temos uma lista dos produtos escolhidos, onde podemos incrementar ou decrementar a quantidade de itens daquele produto, através das setas, ou se clicarmos no X, removemos todas as quantidades daquele produto do carrinho, e mais abaixo vemos o valor total de todos os produtos escolhidos, também podemos esvaziar o carrinho de compras ao clicar no botão esvaziar carrinho.

####Considerações Finais:

A aplicação ainda não está totalmente pronta, vou implementar para mostrar o carrinho de compras do usuario, mesmo ele saindo da aplicação e voltando depois, ao logar no WEB APP, ele irá ver seu carrinho com os itens que ele havia escolhido anteriormente.

Também pretendo implementar a biblioteca Redux no projeto, para otimizar o fluxo de dados entre componentes.

Este é um projeto que estou gostando bastante de fazer, com certeza me serviu para solidificar os conhecimentos adquiridos sobre o React.
