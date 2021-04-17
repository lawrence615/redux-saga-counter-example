module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js'
        ],
        alias: {
          reducers: './src/reducers',
          sagas: './src/sagas',
          screens: './src/screens',
          store: './src/store'
        }
      }
    ],
  ]
};
