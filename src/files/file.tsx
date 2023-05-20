import dataFile from "./data.json";

// 먼지정보 가져오기
const getDustsByFile = (sidoName: string) => {
  const data = dataFile["response"]["body"]["items"];
  return data.filter((x) => {
    return x["sidoName"] === sidoName;
  });
};

export { getDustsByFile };
