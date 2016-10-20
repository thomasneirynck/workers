importScripts("ajax.js");


//
self.addEventListener("message", function (event) {

  ajax.get(event.data.file)
  .then(function (text) {
    //resolve!
    const json = JSON.parse(text);
    console.log('resolve!');
    self.postMessage({
      textLength: text.length,
      featureLength: json.features.length
    });
  });


});




