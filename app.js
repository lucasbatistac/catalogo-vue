const ProductCard = {
  props: ['nome', 'preco', 'imagem', 'categoria'],
  emits: ['adicionar'],
  template: `<article class="card"><div class="art" :class="imagem" aria-hidden="true"><span>{{ {caneca:'☕', caderno:'▤', luminaria:'✺', garrafa:'♧'}[imagem] }}</span></div><div class="card-body"><p class="category">{{ categoria }}</p><h3>{{ nome }}</h3><div class="card-bottom"><strong>{{ preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}) }}</strong><button type="button" @click="$emit('adicionar')" :aria-label="'Adicionar ' + nome + ' ao carrinho'">Adicionar <span aria-hidden="true">+</span></button></div></div></article>`
};
Vue.createApp({
  components: { ProductCard },
  data() { return { busca: '', carrinho: 0, produtos: [
    {id:1,nome:'Caneca Terra',preco:49.90,imagem:'caneca',categoria:'CASA'},
    {id:2,nome:'Caderno Pauta',preco:38.00,imagem:'caderno',categoria:'PAPELARIA'},
    {id:3,nome:'Luminária Aurora',preco:129.90,imagem:'luminaria',categoria:'CASA'},
    {id:4,nome:'Garrafa Movimento',preco:69.90,imagem:'garrafa',categoria:'ROTINA'}
  ] }; },
  computed: { filtrados() { const termo = this.busca.trim().toLocaleLowerCase('pt-BR'); return this.produtos.filter(p => p.nome.toLocaleLowerCase('pt-BR').includes(termo)); } }
}).mount('#app');
