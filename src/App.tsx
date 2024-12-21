import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import AddEmployeeComponent from './component/AddEmployeeComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ListEmployeeComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-employee"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddEmployeeComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-employee/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <div>Update Employee Component</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;