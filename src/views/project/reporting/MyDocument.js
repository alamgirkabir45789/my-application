import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });
const MyDocument = () => {
  return (
    <div>
      <Document>
        <Page size="A4">
          <View>
            <View>
              <Text>Section #1</Text>
            </View>
            <View>
              <Text>Section #2</Text>
            </View>
          </View>
        </Page>
      </Document>
    </div>
  );
};

export default MyDocument;
