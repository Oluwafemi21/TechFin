module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      colors:{
        orange:{
          light:'#F89954',
          dark:'#F8964F'
        },
        brown:{
          light:'#502F11',
          medium:'#562E08',
          dark:'#4D2D10'
        },
        underlineColor:'#F6EDDB',
        circle:'#FFEDDC',
        light_pink:'#FFF8F2'
      },
      fontFamily:{
        'body':['Archivo'],
      }
    },
  },
  plugins: [],
}
