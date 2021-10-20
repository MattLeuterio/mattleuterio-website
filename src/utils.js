import {
  BgBeachDark,
  BgCloudsDark,
  BgDaylightDark,
  BgRocksDark,
  BgBeachLight,
  BgCloudsLight,
  BgDaylightLight,
  BgRocksLight,
} from "./ui/assets/img/backgrounds";

export const backgroundChoice = (theme, nameBg) => {
  let background;
  switch (nameBg) {
    case "rocks":
      background = theme === "dark" ? BgRocksDark : BgRocksLight;
      break;
    case "beach":
      background = theme === "dark" ? BgBeachDark : BgBeachLight;
      break;
    case "clouds":
      background = theme === "dark" ? BgCloudsDark : BgCloudsLight;
      break;
    case "daylight":
      background = theme === "dark" ? BgDaylightDark : BgDaylightLight;
      break;
    default:
      background = theme === "dark" ? BgRocksDark : BgRocksLight;
  }
  return background;
};

export const remapContent = (type, obj) => {
  let res;
  switch (type) {
    case 'filmmaking':
      res = {
        id: obj.sys.id,
        title: obj.fields.title,
        url: obj.fields.url,
        description: obj.fields.description,
        links: obj.fields.links,
        gears: obj.fields.gears,
      }
      break;
    
    case 'development':
      res = {
        id: obj.sys.id,
        title: obj.fields.title,
        description: obj.fields.description,
        links: obj.fields.links,
        tech: obj.fields.tech,
        packageJson: obj.fields.packageJson,
        responsive: obj.fields.responsive,
        images: obj.fields.images,
      }
      break;

    case 'skills':
      res = {
        id: obj.sys.id,
        section: obj.fields.section,
        values: obj.fields.values,
      }
      break;
    default: {}
  }
  return res;
};