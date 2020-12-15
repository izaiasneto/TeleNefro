import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
    id: string;
    name: string;
    avatar: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
        const [ data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@NefroSystem:token');
        const user = localStorage.getItem('@NefroSystem:user');

        if( token && user) {
            return { token, user: JSON.parse(user)};
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async({ email, password}) => {
        const response = await api.post('sessions', {
            email,
            password
        });

        const { token, user } = response.data;
        
        localStorage.setItem('@NefroSystem:token', token);
        localStorage.setItem('@NefroSystem:user', JSON.stringify(user));

        setData({ token, user });

        console.log(response.data);
    }, [])

    const signOut = useCallback(() => {
        localStorage.removeItem('@NefroSystem:token');
        localStorage.removeItem('@NefroSystem:user');
    
        setData({} as AuthState);
      }, [])

      return (
          <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
              {children}
          </AuthContext.Provider>
      );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if(!context){
      throw new Error('useAuth must be used within an AuthProvider')
    }
  
    return context;
};

export { AuthProvider, useAuth };
