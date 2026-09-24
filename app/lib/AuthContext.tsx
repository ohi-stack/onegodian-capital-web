'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut as fbSignOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleAuthProvider, db } from './firebase';
import { handleFirestoreError, OperationType } from './firebaseErrors';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  odfid?: string;
  role: 'user' | 'investor' | 'merchant' | 'admin';
  verificationTier: 'unverified' | 'tier-1' | 'tier-2' | 'institutional';
  walletAddress?: string;
  disclosureAcceptedAt?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateWallet: (address: string) => Promise<void>;
  acceptDisclosures: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  signOut: async () => {},
  refreshProfile: async () => {},
  updateWallet: async () => {},
  acceptDisclosures: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (firebaseUser: User) => {
    try {
      const userRef = doc(db, 'users', firebaseUser.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        setProfile(snap.data() as UserProfile);
      } else {
        // Create initial default profile
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Investor',
          odfid: `ODFID-${firebaseUser.uid.slice(0, 8).toUpperCase()}`,
          role: 'investor',
          verificationTier: 'tier-1',
          walletAddress: '0x9eee...ce98 (OBW-1 Non-Custodial)',
          createdAt: new Date().toISOString(),
        };
        await setDoc(userRef, newProfile);
        setProfile(newProfile);
      }
    } catch (err) {
      console.warn('Failed to fetch/create user profile in Firestore (offline or initial boot):', err);
      // Fallback in-memory profile if Firestore is offline
      setProfile({
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || 'Authorized User',
        odfid: `ODFID-${firebaseUser.uid.slice(0, 8).toUpperCase()}`,
        role: 'investor',
        verificationTier: 'tier-1',
        createdAt: new Date().toISOString(),
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchProfile(currentUser);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const cred = await signInWithPopup(auth, googleAuthProvider);
      if (cred.user) {
        await fetchProfile(cred.user);
      }
    } catch (error: any) {
      console.error('Google Sign In Error:', error);
      throw error;
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, pass);
    if (cred.user) {
      await fetchProfile(cred.user);
    }
  };

  const signUpWithEmail = async (email: string, pass: string, name?: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    if (cred.user) {
      const userRef = doc(db, 'users', cred.user.uid);
      const newProfile: UserProfile = {
        uid: cred.user.uid,
        email: cred.user.email || email,
        displayName: name || email.split('@')[0],
        odfid: `ODFID-${cred.user.uid.slice(0, 8).toUpperCase()}`,
        role: 'investor',
        verificationTier: 'tier-1',
        createdAt: new Date().toISOString(),
      };
      try {
        await setDoc(userRef, newProfile);
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, `users/${cred.user.uid}`, cred.user);
      }
      setProfile(newProfile);
    }
  };

  const signOut = async () => {
    await fbSignOut(auth);
    setUser(null);
    setProfile(null);
  };

  const refreshProfile = async () => {
    if (user) await fetchProfile(user);
  };

  const updateWallet = async (address: string) => {
    if (!user) return;
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { walletAddress: address, updatedAt: new Date().toISOString() }, { merge: true });
      setProfile((prev) => (prev ? { ...prev, walletAddress: address } : null));
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`, user);
    }
  };

  const acceptDisclosures = async () => {
    if (!user) return;
    const now = new Date().toISOString();
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { disclosureAcceptedAt: now, updatedAt: now }, { merge: true });
      setProfile((prev) => (prev ? { ...prev, disclosureAcceptedAt: now } : null));
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`, user);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        signOut,
        refreshProfile,
        updateWallet,
        acceptDisclosures,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
