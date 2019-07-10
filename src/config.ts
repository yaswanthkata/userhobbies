interface IConfig {
  API_URL: string;
}
const prod: IConfig = {
  API_URL: `https://enigmatic-coast-29299.herokuapp.com/`
};
const dev: IConfig = {
  API_URL: `http://localhost:4000/`
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;
