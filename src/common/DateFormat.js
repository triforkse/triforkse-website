export default {
  format(d) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZoneName = 'short';
    return new Intl.DateTimeFormat('en-US', options).format(d);
  }
};
