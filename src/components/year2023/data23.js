export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "O'qish uchun",
      data: [200, 180, 193, 175, 187, 194, 202],
      fill: true,
      tension: 0.7,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Ovqatlanish uchun",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: true,
      tension: 0.6,
      backgroundColor: "rgba(153,102,255,0.4)",
      borderColor: "rgba(153,102,255,1)",
    },
    {
      label: "Kiyinish uchun",
      data: [60, 78, 95, 49, 86, 72, 90],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(255,242,5,0.4)",
      borderColor: "rgba(255,242,5,1)",
    },
    {
      label: "Uy uchun harajatlar",
      data: [160, 108, 145, 89, 96, 172, 220],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(245,2,5,0.4)",
      borderColor: "rgba(245,2,5,1)",
    },
    {
      label: "Boshqa harajatlar",
      data: [10, 8, 45, 49, 6, 72, 20],
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
      text: "2023 yil uchun harajat",
    },
  },
};
