// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

var app = require('express')(),
   port = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.sendFile(__dirname + "/demo.html");
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
})