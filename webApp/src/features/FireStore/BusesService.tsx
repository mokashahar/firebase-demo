import { collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc } from "firebase/firestore";
import { Bus } from "./types";
import { db } from "../../services/firebase/firebase";

// Collection is represent 'table' name
const collectionName = 'buses';

export async function getAllBuses(): Promise<Array<Bus>> {
  // Query all buses collection
  const querySnapshot = await getDocs(collection(db, collectionName));
  if (!querySnapshot.empty) {
    // Map each bus document to bus object type
    return querySnapshot.docs.map((doc) => doc.data() as Bus);
  }
  return [];
}

export async function addBus(bus: Bus): Promise<void> {
  // Add a new bus in collection "buses"
  await setDoc(doc(db, collectionName, bus.name), bus);
}

export async function deleteBus(busName: string): Promise<void> {
  await deleteDoc(doc(db, collectionName, busName));
}

export function listenBusses(callBack: (changes: any[]) => void): () => void {
  // const q = query(collection(db, "cities"), where("state", "==", "CA"));
  // const populationQuery = query(citiesRef, where("population", "<", 100000));
  // const nameQuery = query(citiesRef, where("name", ">=", "San Francisco"));
  const q = query(collection(db, 'buses'));

  const unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
    callBack(querySnapshot.docChanges());
  });
  return unsubscribe;
}
