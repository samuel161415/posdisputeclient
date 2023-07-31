import React from 'react';
import { Route, useNavigate,Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
    <Route
    {...rest}
    element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
     />
     
)

export default PrivateRoute;
