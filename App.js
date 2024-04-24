import { Agenda } from "react-native-calendars";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";

export default function App() {
  const formatearFecha = () => {
    const moment = require("moment");
    const fehaHoy = new Date();
    const fechaFormateada = moment(fehaHoy).format("YYYY-MM-DD");
    return fechaFormateada
  };


  return (
    <View style={styles.container}>
      <Agenda
        selected={formatearFecha()}
        futureScrollRange={12}
        pastScrollRange={12}
        items={{
          "2024-03-26": [
            {
              name: "Meeting 1",
              data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
            },
          ],
          "2024-03-28": [
            {
              name: "Meeting 2",
              data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
            },
          ],
          "2024-03-29": [
            {
              name: "Meeting 3",
              data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
            },
          ],
          "2024-03-30": [
            {
              name: "Meeting 4",
              data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
            },
          ],
          "2024-03-31": [
            {
              name: "Meeting 5",
              data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
            },
          ],
          "2024-03-25": [
            {
              name: "Meeting 6",
              data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
            },
          ],
        }}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.data}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical:20
  },
  item: {
    backgroundColor: "lightblue",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 25,
    paddingBottom: 20,
  },
  itemText: {
    color: "black",
    fontSize: 16,
  },
});
