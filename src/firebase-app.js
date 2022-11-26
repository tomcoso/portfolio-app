import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClOg-4G9jwXGty6WD3HMKva-bu4PcclEQ",
  authDomain: "portfolio-c817c.firebaseapp.com",
  projectId: "portfolio-c817c",
  storageBucket: "portfolio-c817c.appspot.com",
  messagingSenderId: "540614629711",
  appId: "1:540614629711:web:a72b0ed5af797984e60d3a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getProjects = async () => {
  const docRef = collection(db, "projects");
  const q = query(docRef);
  const data = await getDocs(q);
  return data.docs.map((x) => x.data());
};

export { getProjects };
