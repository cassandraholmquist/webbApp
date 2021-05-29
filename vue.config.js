module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'seashell'
    },
    name: 'La Plaza',
    themeColor: '#677821',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
          urlPattern: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
        }
      ]
    }
  }
}