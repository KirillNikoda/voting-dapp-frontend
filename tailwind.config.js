module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    backgroundColor: {
      primary: "#355DFF",
      accent1: "#6c5dd3",
      accent2: "#3f8cff",
      accent3: "#ff98e5",
      dark: "#1F2128",
      lightgrey: "#e4e4e4",
      darkcard: "#242731",
      white: "#ffffff",
      hovergrey: "#33343b",
      grey: "#23252c",
      darkactive: "#191b20",
      primaryhover: "#0D39EB",
      green: "#4FBF67",
      hovergreen: "#36964B",
      red: "#DD2C2C",
      hoverred: "#AF1D1D",
    },

    textColor: {
      primary: "#355DFF",
      white: "#ffffff",
      grey: "#808191",
      black: "#000000",
      green: "#4FBF67",
      red: "#DD2C2C",
    },

    ringColor: {
      primary: "#355DFF",
      danger: "#FF6628",
      hovergrey: "#33343b",
    },

    borderColor: {
      darkcard: "#242731",
      primary: "#355DFF",
      danger: "#FF6628",
    },

    fontSize: {
      d1: [
        "96px",
        {
          lineHeight: "112px",
        },
      ],
      d2: [
        "72px",
        {
          lineHeight: "80px",
        },
      ],
      d3: [
        "64px",
        {
          lineHeight: "72px",
        },
      ],
      h1: [
        "56px",
        {
          lineHeight: "64px",
        },
      ],
      h2: [
        "48px",
        {
          lineHeight: "56px",
        },
      ],
      h3: [
        "40px",
        {
          lineHeight: "48px",
        },
      ],
      h4: [
        "32px",
        {
          lineHeight: "40px",
        },
      ],
      h5: [
        "24px",
        {
          lineHeight: "32px",
        },
      ],
      h6: [
        "18px",
        {
          lineHeight: "24px",
        },
      ],
      menu: [
        "14px",
        {
          lineHeight: "24px",
        },
      ],
      title: [
        "16px",
        {
          lineHeight: "20px",
        },
      ],
      captionlg: [
        "13px",
        {
          lineHeight: "16px",
        },
      ],
      captionsm: [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      bodylg: [
        "14px",
        {
          lineHeight: "24px",
        },
      ],
      bodysm: [
        "13px",
        {
          lineHeight: "20px",
        },
      ],
      btnlg: [
        "14px",
        {
          lineHeight: "24px",
        },
      ],
      btnsm: [
        "13px",
        {
          lineHeight: "20px",
        },
      ],
      chip: [
        "10px",
        {
          lineHeight: "24px",
        },
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
