// src/components/App.jsx
import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles['user-info']}>
          <img 
            src="WhatsApp Image 2024-09-04 at 19.27.47.jpeg"
            alt="User"
            className={styles['user-avatar']}
          />
          <p>Daniel Maximiniano</p>
        </div>
        <div className={styles.menu}>
          <div className={`${styles['menu-item']} ${styles.active}`}>
            <span className={styles.icon}>🏠</span>
            <p>Home</p>
          </div>
          <div className={styles['menu-item']}>
            <span className={styles.icon}>🔔</span>
            <p>Notícias</p>
          </div>
          <div className={styles['menu-item']}>
            <span className={styles.icon}>🚨</span>
            <p>Ocorrências</p>
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 id='Adm'>Adm Notícias</h1>
        </header>
        
        <div className={styles['main-content']}>
          <div className={styles['news-list']}>
            {Array(7).fill(null).map((_, index) => (
              <div key={index} className={styles['news-item']}>
                <div className={styles.date}>
                  <span>28</span>
                  <small>Mar</small>
                </div>
                <div className={styles.content}>
                  <h2>Notícia:</h2>
                  <p>No dia 28 a FIESC irá organizar uma campanha de menor aprendiz.</p>
                </div>
                <div className={styles.actions}>
                  <button className={styles['edit-btn']}>Editar</button>
                  <button className={styles['delete-btn']}>Excluir</button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles['news-form']}>
            <h2>Nova Notícia</h2>
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Descrição" />
            <input type="date" placeholder="Data" />
            <button className={styles['save-btn']}>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
