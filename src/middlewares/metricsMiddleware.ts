import prometheusMiddleware from "express-prometheus-middleware";

const metricsMiddleware = prometheusMiddleware({
  metricsPath: "/metrics",
  collectDefaultMetrics: true,
});

export default metricsMiddleware;

