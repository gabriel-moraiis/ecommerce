import { createContext, useEffect, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebaseApp';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>
  );
}
