import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyANmK_nyRm4UjsukGsrpRse0yDiGi3ClWs',
  authDomain: 'newchat-8dafa.firebaseapp.com',
  projectId: 'newchat-8dafa',
  storageBucket: 'newchat-8dafa.appspot.com',
  messagingSenderId: '497807753074',
  appId: '1:497807753074:web:b02c6def6c6f39a9e927eb',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
