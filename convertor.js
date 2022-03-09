let dict = {
  cm: {
    inch: 0.393701,
    meter: 0.01,
    cm: 1,
    feet: 0.0328084,
    mili: 10.00000032,
    yard: 0.010936133333333,
  },
  inch: {
    inch: 1,
    meter: 0.0254,
    cm: 100,
    feet: 0.0833333,
    mili: 25.40000081279922739,
    yard: 0.027777778666665819268,
  },
  meter: {
    inch: 39.3701,
    meter: 1,
    cm: 100,
    feet: 3.28084,
    mili: 1000,
    yard: 1.09361,
  },
  feet: {
    inch: 12.00000648,
    meter: 0.3048,
    cm: 30.48,
    feet: 3.28084,
    mili: 304.7990807232,
    yard: 0.33333232800000001106,
  },
};

let left_unit = document.getElementById("selection-1").value;
let right_unit = document.getElementById("selection-2").value;

function inputunits(elmt, side) {
  let left_unit = document.getElementById("selection-1").value;
  let right_unit = document.getElementById("selection-2").value;
  let val = parseInt(elmt.value);
  if (side == "left") {
    document.getElementById("text2").value = dict[left_unit][right_unit] * val;
  } else {
    document.getElementById("text1").value = dict[right_unit][left_unit] * val;
  }
}

function selectunits(elmt, side) {
  let left_val = parseInt(document.getElementById("text1").value);
  if (side == "left") {
    left_unit = elmt.value;
  } else {
    right_unit = elmt.value;
  }
  document.getElementById("text2").value =
    dict[left_unit][right_unit] * left_val;
}
