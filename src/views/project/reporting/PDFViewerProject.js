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
const PDFViewerProject = (props) => {
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
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              fontWeight: 100,
              border: "1px solid black",
              color: "red",
            }}
          >
            Project List
          </Text>
        </View>
        <View
          style={{
            margin: "15px 10px 0px 30px",
            lineHeight: 1.2,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: 100, width: 80 }}>
              Sl No
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 100, width: 200 }}>
              Name
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 100,
                width: 200,
                fontStyle: "",
              }}
            >
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
              style={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid black",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 100,
                  width: 80,
                  border: "1px solid black",
                  padding: "5px",
                }}
              >
                {i + 1}.
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 100,
                  width: 200,
                  border: "1px solid black",
                  padding: "5px",
                }}
              >
                {row.name}
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 100,
                  width: 200,
                  border: "1px solid black",
                  padding: "5px",
                }}
              >
                {row.description}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 100,
                  width: 300,
                  border: "1px solid black",
                  padding: "5px",
                }}
              >
                {row.projectLink}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFViewerProject;
