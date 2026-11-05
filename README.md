# Explorando o Vue.js: componentes reativos

Aplicação de catálogo criada para o trabalho do módulo C.15. Cada ProductCard recebe nome, preço, imagem e categoria por props e emite o evento adicionar para o componente pai, que atualiza o contador. A busca usa v-model e a propriedade computada filtrados.

## Como executar

Abra index.html em um navegador com acesso à internet, necessário para carregar Vue 3 pela CDN. Para servir localmente, execute python3 -m http.server 8000 nesta pasta e acesse http://localhost:8000.

## Como testar

1. Clique em Adicionar e confira o contador no topo; clique novamente para verificar a nova contagem.
2. Busque por caneca e confirme que apenas a Caneca Terra aparece. Busque um termo inexistente para ver a mensagem de lista vazia; limpe a busca para restaurar os itens.
3. Redimensione a janela para observar a adaptação do catálogo em telas menores.

Os produtos são ilustrativos; não há compra real, armazenamento persistente ou integração de pagamento.
