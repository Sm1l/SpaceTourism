export const linkConversion = (link: string) => {
  const linkArr = link.split("/");

  linkArr.splice(0, 1, "../src");
  linkArr.splice(2, 0, "images");
  const conversionLink = linkArr.join("/");
  return conversionLink;
};
