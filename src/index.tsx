import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './Presentation/TestPage/TestPage';
import { APIRepositoryImpl } from './Data/Repository/RepositoryImpl';
import { NetworkDataSourceImpl } from './Data/DataSource/NetworkDataSourceImpl';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const dataSource = new NetworkDataSourceImpl();
const repository = new APIRepositoryImpl(dataSource);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<TestPage repository={repository} />}/> {/* Dependency injection required: Repository */}
        <Route path="/app" element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
