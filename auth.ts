import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { auth, db } from './firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  createdAt: string;
  plan: 'free' | 'pro' | 'enterprise';
  stripeCustomerId?: string;
  clipsGenerated: number;
  maxClipsPerMonth: number;
}

// Sign up with email and password
export const signUpUser = async (
  email: string,
  password: string,
  displayName: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Create user profile in Firestore
  const userProfile: UserProfile = {
    uid: user.uid,
    email: user.email || '',
    displayName: displayName,
    createdAt: new Date().toISOString(),
    plan: 'free',
    clipsGenerated: 0,
    maxClipsPerMonth: 3,
  };

  await setDoc(doc(db, 'users', user.uid), userProfile);

  return user;
};

// Sign in with email and password
export const signInUser = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Sign out current user
export const signOutUser = async (): Promise<void> => {
  await signOut(auth);
};

// Get user profile
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserProfile;
  }
  return null;
};

// Update user profile
export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>
): Promise<void> => {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, updates, { merge: true });
};

// Upgrade to pro plan
export const upgradeToPro = async (uid: string, stripeCustomerId: string): Promise<void> => {
  const userRef = doc(db, 'users', uid);
  await setDoc(
    userRef,
    {
      plan: 'pro',
      stripeCustomerId,
      maxClipsPerMonth: 999,
    },
    { merge: true }
  );
};
