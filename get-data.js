function getPatientName (pt) {
  if (pt.name) {
    var names = pt.name.map(function(name) {
      return name.given.join(" ") + " " + name.family;
    });
    return names.join(" / ")
  } else {
    return "anonymous";
  }
}


function displayPatient (pt) {
  document.getElementById('patient_name').innerHTML = getPatientName(pt);
}


// Create a FHIR client (server URL, patient id in demo-settings.js)
var smart = FHIR.client(demo),
    pt = smart.patient;

// Create a patient banner
smart.patient.read().then(function(pt) {
  displayPatient (pt);
});
