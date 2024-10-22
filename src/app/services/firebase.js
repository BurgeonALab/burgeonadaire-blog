'use client'
import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  logEvent,
 } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4LBHjzpFaOeITtc47UFnWNAYEHVLElNk",
  authDomain: "burgeonadaire-blog.firebaseapp.com",
  projectId: "burgeonadaire-blog",
  storageBucket: "burgeonadaire-blog.appspot.com",
  messagingSenderId: "768866224983",
  appId: "1:768866224983:web:92d552f00e18a30e40cc12",
  measurementId: "G-MF2FX36TRF"
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
logEvent(analytics, 'notification_received');