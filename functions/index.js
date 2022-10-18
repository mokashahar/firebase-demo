const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello log', { structuredData: true });
  response.send('Hello from Firebase!');
});

exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection('messages').add({ originl: original });
  // Send back a message that we've successfully written the message
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.createParking = functions.firestore.document('buses/{name}').onCreate(async (snap, context) => {
  functions.logger.log('Got new bus');
  // Grab the current value of what was written to Firestore.
  const bus = snap.data();

  // Access the parameter `{name}` with `context.params`
  functions.logger.log('Create new parking by bus', context.params.name, bus);

  return await admin.firestore().collection('parking').doc(bus.name).set({ parkingSpot: 234, id: bus.name });
});
