export default function formatNumber(num, style = "currency") {
  return Number(num).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style,
    currency: "INR",
  });
}
