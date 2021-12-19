var items = [
  { name: 'TTP72_80:EA:CA:54:0:1', value: 21 },
  { name: 'TTP73_80:EA:CA:10:6:1', value: 21 },
  { name: 'TTP92_80:EA:CA:0:89:4', value: 37 },
  { name: 'TTP91_80:EA:CA:0:86:3', value: 21 },
  // { name: 'TH13', value: 45 },
  // { name: 'TH4', value: -12 },
  // { name: 'TH5', value: 37 }
];

// sort by value
// items.sort(function (a, b) {
//   return (a.value - b.value)
// });

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(items)