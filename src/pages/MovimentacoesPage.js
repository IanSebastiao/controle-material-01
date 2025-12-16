import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import './MovimentacoesPage.css';

const MovimentacoesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="movimentacoes-page">
      <div className="page-container">
        <div className="page-header">
          <h1>Movimentações de Estoque</h1>
        </div>

        <div className="movimentacoes-content">
          <div className="info-card">
            <h3>Controle de Entradas e Saídas</h3>
            <p>
              Registre todas as movimentações do seu estoque para manter o controle preciso.
            </p>

            <div className="features-grid">
              <button
                className="feature-item"
                onClick={() => navigate('entradas')}
              >
                <h4>📥 Entradas</h4>
                <p>Registro de compras e retornos</p>
              </button>

              <button
                className="feature-item"
                onClick={() => navigate('saidas')}
              >
                <h4>📤 Saídas</h4>
                <p>Controle de consumo interno e perdas</p>
              </button>

              <button
                className="feature-item"
                onClick={() => navigate('relatorios')}
              >
                <h4>📊 Relatórios</h4>
                <p>Histórico completo das movimentações</p>
              </button>
            </div>
          </div>

          {/* 🔽 Aqui entram Entradas, Saídas ou Relatórios */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MovimentacoesPage;
