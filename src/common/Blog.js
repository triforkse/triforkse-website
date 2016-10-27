const Category = {
  ALL: "ALL",
  BUSINESS: "BUSINESS",
  ENGINEERING: "ENGINEERING",
  PEOPLE: "PEOPLE"
};

export default {
  Category,

  paramToCategory(param) {
    return Category[(param || Category.ALL).toUpperCase()];
  }
}
