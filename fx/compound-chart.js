/**
 * 複利の魔法 - 週利10% 資金増加ラインチャート（React + Recharts）
 * ESM CDN で読み込み、ビルド不要
 */
(async function () {
  const React = (await import('https://esm.sh/react@18.2.0')).default;
  const { createRoot } = await import('https://esm.sh/react-dom@18.2.0/client');
  const { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } = await import('https://esm.sh/recharts@2.10.3');
  const h = React.createElement;

  const data = Array.from({ length: 53 }, (_, i) => ({
    week: i,
    amount: Math.round(10000 * Math.pow(1.1, i)),
  }));

  function formatY(value) {
    if (value >= 10000) return (value / 10000) + '万';
    return String(value);
  }

  function formatTooltip(value) {
    return value != null ? value.toLocaleString() + '円' : '';
  }

  function CompoundChart() {
    return h(
      ResponsiveContainer,
      { width: '100%', height: 320 },
      h(
        LineChart,
        {
          data,
          margin: { top: 12, right: 12, left: 8, bottom: 8 },
        },
        h(CartesianGrid, { strokeDasharray: '3 3', stroke: '#e4e8ef' }),
        h(XAxis, {
          dataKey: 'week',
          type: 'number',
          domain: [0, 52],
          tickFormatter: (v) => v + '週目',
          stroke: '#5a6578',
          fontSize: 12,
          tick: { fill: '#5a6578' },
        }),
        h(YAxis, {
          tickFormatter: formatY,
          stroke: '#5a6578',
          fontSize: 12,
          tick: { fill: '#5a6578' },
          width: 44,
        }),
        h(Tooltip, {
          formatter: formatTooltip,
          labelFormatter: (label) => label + '週目',
          contentStyle: {
            borderRadius: '14px',
            border: '1px solid #e4e8ef',
            boxShadow: '0 4px 12px rgba(22,33,58,0.08)',
          },
          labelStyle: { fontWeight: 600 },
        }),
        h(Line, {
          type: 'monotone',
          dataKey: 'amount',
          stroke: '#e07a7a',
          strokeWidth: 2.5,
          dot: false,
          activeDot: { r: 4, fill: '#e07a7a', strokeWidth: 0 },
        })
      )
    );
  }

  const root = document.getElementById('compound-chart-root');
  if (root && React && createRoot) {
    createRoot(root).render(h(CompoundChart));
  }
})();
