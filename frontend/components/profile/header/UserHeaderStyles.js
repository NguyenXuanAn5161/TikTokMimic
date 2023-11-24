import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    paddingHorizontal: 65,
    borderBottomWidth: 1,
    borderColor: 'lightgrey' 
  },
  emailText: {
    padding: 20,
  },
  counterContainer: {
    paddingBottom: 20,
    flexDirection: "row",
  },
  counterItemContainer: {
    flex: 1,
    alignItems: "center",
  },
  counterNumberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  counterLabelText: {
    color: 'gray',
    fontSize: 11,
  },
  buttonStyles:{
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonChoose:{
    paddingTop: 20,
    flexDirection: 'row',
    alignContent: 'center',   
  }
  
});

export default styles;