import React, { useEffect, useState } from 'react';
import { movimentacaoService } from '../services/movimentacaoService';
import { produtoService } from '../services/produtoService';
import './RelatoriosPage.css';

const RelatoriosPage = () => {
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetchMovimentacoes();
    fetchProdutos();
  }, []);

  const fetchMovimentacoes = async () => {
    try {
      const lista = await movimentacaoService.listar();
      setMovimentacoes(lista);
    } catch (e) {
      console.error('Erro ao carregar movimentações:', e);
      setErro('Erro ao carregar movimentações.');
    } finally {
      setLoading(false);
    }
  };

  const fetchProdutos = async () => {
    try {
      const lista = await produtoService.listar();
      setProdutos(lista);
    } catch (e) {
      console.error('Erro ao carregar produtos:', e);
    }
  };

  const getProdutoNome = (produtoId) => {
    const produto = produtos.find(p => p.idproduto === produtoId);
    return produto ? produto.nome : `Produto ${produtoId}`;
  };

  const formatarDataHora = (dataRegistro) => {
    if (!dataRegistro) return '-';
    const date = new Date(dataRegistro);
    return date.toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="relatorios-page">
      <h2>📊 Relatórios de Movimentações</h2>
      <p>Histórico completo das movimentações de produtos com data e hora</p>

      {loading && <p>Carregando relatórios...</p>}
      {erro && <p className="erro">{erro}</p>}
      {!loading && !erro && movimentacoes.length === 0 && (
        <p>Nenhuma movimentação registrada.</p>
      )}
      {!loading && !erro && movimentacoes.length > 0 && (
        <div className="relatorios-tabela-wrapper">
          <table className="relatorios-tabela">
            <thead>
              <tr>
                <th>Data e Hora</th>
                <th>Produto</th>
                <th>Tipo</th>
                <th>Quantidade</th>
                <th>Responsável</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              {movimentacoes.map(mov => (
                <tr key={mov.id}>
                  <td>{formatarDataHora(mov.dataRegistro)}</td>
                  <td>{getProdutoNome(mov.produtoId)}</td>
                  <td>
                    <span className={`tipo-movimentacao ${mov.tipo}`}>
                      {mov.tipo === 'entrada' ? 'Entrada' : 'Saída'}
                    </span>
                  </td>
                  <td>{Math.abs(mov.quantidade)}</td>
                  <td>{mov.responsavel || '-'}</td>
                  <td>{mov.observacao || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RelatoriosPage;
