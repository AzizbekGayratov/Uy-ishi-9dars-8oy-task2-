export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "O'qish uchun",
      data: [100, 110, 103, 105, 117, 104, 102],
      fill: true,
      tension: 0.7,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Ovqatlanish uchun",
      data: [30, 28, 49, 49, 62, 47, 90],
      fill: true,
      tension: 0.6,
      backgroundColor: "rgba(153,102,255,0.4)",
      borderColor: "rgba(153,102,255,1)",
    },
    {
      label: "Kiyinish uchun",
      data: [20, 70, 85, 79, 106, 92, 100],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(255,242,5,0.4)",
      borderColor: "rgba(255,242,5,1)",
    },
    {
      label: "Uy uchun harajatlar",
      data: [16, 70, 100, 149, 136, 112, 212],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(245,2,5,0.4)",
      borderColor: "rgba(245,2,5,1)",
    },
    {
      label: "Boshqa harajatlar",
      data: [9, 8, 5, 4, 2, 32, 12],
      fill: true,
      tension: 0.5,
      backgroundColor: "rgba(13,192,125,0.4)",
      borderColor: "rgba(13,192,125,1)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "2024 yil uchun harajat",
    },
  },
};
