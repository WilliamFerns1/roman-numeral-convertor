const input = document.getElementById("number");
const convertButton= document.getElementById("convert-btn");
const output = document.getElementById("output");

const validateInput = (inputValue) => {
  if (inputValue <= 0) {
    setOutput("Please enter a number greater than or equal to 1");
    return false;
  } else if (inputValue >= 4000) {
    setOutput("Please enter a number less than or equal to 3999", "invalid");
    return false;
  } else if (!inputValue) {
    setOutput("Please enter a valid number", "invalid");
    return false;
  } else {
    return true;
  }
}

const setOutput = (text, status) => {
  output.style.display = "block";
  output.innerHTML = text;
  switch (status) {
    case "invalid":
      output.style.border = "5px solid red";
      break
    case "valid":
      output.style.border = "5px solid black";
  }
}

const convertNumberToRomanNumeral = (inputValue) => {
  let romanNumeralResult = "";
  const romanArray = [
    {
      "number": 1000,
      "roman": "M"
    },
    {
      "number": 900,
      "roman": "CM"
    },
    {
      "number": 500,
      "roman": "D"
    },
    {
      "number": 400,
      "roman": "CD"
    },
    {
      "number": 100,
      "roman": "C"
    },
    {
      "number": 90,
      "roman": "XC"
    },
    {
      "number": 50,
      "roman": "L"
    },
    {
      "number": 40,
      "roman": "XL"
    },
    {
      "number": 10,
      "roman": "X"
    },
    {
      "number": 9,
      "roman": "IX"
    },
    {
      "number": 5,
      "roman": "V"
    },
    {
      "number": 4,
      "roman": "IV"
    },
    {
      "number": 1,
      "roman": "I"
    },
  ];

  for (let i = 0; i < romanArray.length; i++) {
    const currentObject = romanArray[i];
    const number = currentObject["number"];
    const roman = currentObject["roman"];
    while (inputValue >= number) {
      inputValue = inputValue - number;
      romanNumeralResult += roman;
    }
  }

  return romanNumeralResult;
}

const convertToNumeral = () => {
  const inputValue = parseInt(input.value);
  const isValidInput = validateInput(inputValue);
  console.log(isValidInput);
  if (isValidInput) {
    setOutput(convertNumberToRomanNumeral(inputValue), "valid");
  }
}

convertButton.addEventListener("click", convertToNumeral)
