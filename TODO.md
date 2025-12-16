# TODO - Implementação das Páginas de Relatórios, Entradas e Saídas

## 1. RelatoriosPage
- [x] Modificar RelatoriosPage.js para buscar movimentações via movimentacaoService.listar()
- [x] Exibir tabela com data/hora, produto, tipo (entrada/saída), quantidade, responsável
- [x] Garantir que timestamps apareçam corretamente
- [x] Criar RelatoriosPage.css com estilos para a tabela

## 2. EntradasPage
- [x] Modificar EntradasPage.js para listar produtos do estoque
- [x] Adicionar input de quantidade e botão para cada produto
- [x] Implementar função para registrar entrada via movimentacaoService.registrar()
- [x] Atualizar quantidade no estoque após entrada
- [x] Criar EntradasPage.css com estilos para os cards de produto

## 3. SaidasPage
- [x] Modificar SaidasPage.js para listar produtos do estoque
- [x] Adicionar input de quantidade e botão para cada produto
- [x] Implementar função para registrar saída via movimentacaoService.registrar()
- [x] Atualizar quantidade no estoque após saída
- [x] Criar SaidasPage.css com estilos para os cards de produto

## 4. Testes
- [x] Executar npm start para verificar se a aplicação compila sem erros
- [x] Aplicação está rodando com sucesso
- [x] Todas as páginas implementadas e funcionais
- [x] Todos os arquivos CSS criados
