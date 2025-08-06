import React from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';

export default function FinanceChart({ transactions }) {
  const screenWidth = Dimensions.get('window').width;

  // Calcular ingresos y gastos (con valores absolutos)
  const totalIngresos = transactions
    .filter(t => t.type === 'Ingreso')
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const totalGastos = transactions
    .filter(t => t.type === 'Gasto')
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const pieData = [
    {
      name: 'Ingresos',
      amount: totalIngresos,
      color: '#4CAF50',
      legendFontColor: '#333',
      legendFontSize: 15,
    },
    {
      name: 'Gastos',
      amount: totalGastos,
      color: '#F44336',
      legendFontColor: '#333',
      legendFontSize: 15,
    },
  ];

  // Datos para el gráfico de barras por fecha
  const days = {};
  transactions.forEach(t => {
    const date = new Date(t.date).toLocaleDateString();
    if (!days[date]) days[date] = 0;
    days[date] += t.amount;
  });

  const barLabels = Object.keys(days);
  const barData = Object.values(days);

  return (
    <View>
      {pieData[0].amount > 0 || pieData[1].amount > 0 ? (
        <PieChart
          data={pieData}
          width={screenWidth - 30}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      ) : null}

      {barData.length > 0 && (
        <BarChart
          data={{
            labels: barLabels,
            datasets: [{ data: barData }],
          }}
          width={screenWidth - 30}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#2196F3',
            backgroundGradientTo: '#64B5F6',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          verticalLabelRotation={30}
          style={{ marginTop: 20, borderRadius: 10 }}
        />
      )}
    </View>
  );
}

