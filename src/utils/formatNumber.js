const formatNumber = (number) => {
  const formatNumbering = new Intl.NumberFormat("id-Id");
  return formatNumbering.format(number);
};

const formatPercent = (number) => {
  var option = {
    style: "percent",
  };
  const percent = new Intl.NumberFormat("en-US", option);
  return percent.format(number / 100);
};

module.exports = { formatNumber, formatPercent };
