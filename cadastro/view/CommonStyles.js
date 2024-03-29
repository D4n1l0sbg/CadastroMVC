import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor:'#fff', marginTop: 10,
    width: '100%'},
    itemsContainer: {marginTop: 10, padding: 20},
    buttonsContainer: {flexDirection: 'row-reverse',
    alignItems: 'flex-end', borderBottomWidth: 1,
    borderBottomColor: '#CCC', paddingBottom: 10},
    button: {margin: 10, paddingHorizontal: 24, fontSize: 16,
    alignItems: 'center', justifyContent: 'center'},
    buttonText: { color: '#fff', fontWeight: 'bold'},
    buttonTextBig: { color: '#fff', fontWeight: 'bold',
    fontSize: 24},
    deleteButton: { marginLeft: 10, height: 40, width: 40,
    backgroundColor: 'red', borderRadius: 10, padding: 10,
    fontSize: 12, alignItems: 'center'},
    textItem: { fontSize: 20},
    input: {marginTop: 10, height: 60, backgroundColor: '#fff',
    borderRadius: 10, paddingHorizontal: 24, fontSize: 16,
    alignItems: 'stretch'},

});