import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  // connection to the database with the version we want to use
  const jateDb = await openDB('jate', 1);
  // new transaction and indicate the database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');
  // open the indicated object store
  const store = tx.objectStore('jate');
  // put data in the indexDB with the id of 1
  const request = store.put({id: 1, value: content});

  const result = await request;
  console.log('result.value', result);
  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  
  const jateDb = await openDB('jate', 1);
  
  const tx = jateDb.transaction('jate', 'readonly');
  
  const store = tx.objectStore('jate');
  // get all data in database
  const request = store.get(1);

  const result = await request;

  console.log('result.value', result);
  return result;
}

initdb();
