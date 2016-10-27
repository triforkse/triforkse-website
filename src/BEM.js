export default (b) => {
  return (e, m) => {
    let r = b;

    if (e != null) {
      r += "__" + e;
    }

    if (m != null) {
      r += " " + r + "--" + m;
    }

    return { className: r };
  }
}
