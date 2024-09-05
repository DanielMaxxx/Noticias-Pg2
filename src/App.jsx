import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="user-info">
          
          <img 
            src=""
            alt="User"
            className="user-avatar"
          />

          <p>Daniel Maximiniano</p>
        </div>
        <div className="menu">
          <div className="menu-item active">
            <span className="icon">🏠</span>
            <p>Home</p>
          </div>
          <div className="menu-item">
            <span className="icon">🔔</span>
            <p>Notícias</p>
          </div>
        </div>
      </div>
      <div className="content">
        <header className="header">
          <h1 id='Adm'>Adm Notícias</h1>
        </header>
        <div className="main-content">
          <div className="news-list">
            {Array(7).fill(null).map((_, index) => (
              <div key={index} className="news-item">
                <div className="date">
                  <span>28</span>
                  <small>Mar</small>
                </div>
                <div className="content">
                  <h2>Notícia:</h2>
                  <p>No dia 28 a FIESC irá organizar uma campanha de menor aprendiz.</p>
                </div>
                <div className="actions">
                  <button className="edit-btn">Editar</button>
                  <button className="delete-btn">Excluir</button>
                </div>
              </div>
            ))}
          </div>
          <div className="news-form">
            <h2>Nova Notícia</h2>
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Descrição" />
            <input type="date" placeholder="Data" />
            <button className="save-btn">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
