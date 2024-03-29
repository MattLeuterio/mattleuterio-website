import { remapContent } from "./utils";

const contentful = require("contentful");

const client = contentful.createClient({
  space: "h180m3tlovbv",
  accessToken: "vYJtdk4Sq53THc14PoVqpmIMacRIQGF8HbA1OUzA3K4",
})

const getContent = (contentType, set) => {
  client.getEntries({ content_type: `${contentType}` }).then((response) => {
    const res = response.items;
    const data = res.map(obj => {
      return remapContent(contentType, obj);
    })
    set(data);
  }, []);

};

export {getContent};