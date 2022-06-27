import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 84,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
  },
  titleContainer: {
    marginTop: 24,
  },
  reportTitle: {
    color: "#3778C2",
    letterSpacing: 4,
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
const PDFViewer = (props) => {
  const { data } = props;
  const [projectInfo, setProjectInfo] = useState(null);
  console.log(projectInfo);
  useEffect(() => {
    setProjectInfo(data);
  }, [data, projectInfo]);

  return (
    <Document>
      <Page size="A4" wrap style={styles.page}>
        <View>
          <Text style={{ textAlign: "center", fontSize: 25, fontWeight: 100 }}>
            Project List
          </Text>
        </View>
        <View style={{ margin: "15px 10px 0px 30px", lineHeight: 1.2 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontSize: 12, fontWeight: 100, width: 80 }}>
              Sl No
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 100, width: 200 }}>
              Name
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 100, width: 200 }}>
              Description
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 100, width: 300 }}>
              Project Link
            </Text>
          </View>
          {projectInfo?.map((row, i) => (
            <View
              key={i}
              wrap={false}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Text style={{ fontSize: 12, fontWeight: 100, width: 80 }}>
                {i + 1}.
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 100, width: 200 }}>
                {row.name}
              </Text>

              <Text style={{ fontSize: 12, fontWeight: 100, width: 200 }}>
                {row.description}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 100, width: 300 }}>
                {row.projectLink}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFViewer;
