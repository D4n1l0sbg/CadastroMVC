import SQLite from "react-native-sqlite-storage";


const db = SQLite.openDatabase({
    name:'Escola.db',
    location: "default",
});
export default db;
