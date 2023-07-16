
export const performCalculation = (keyId, currentValue) => {
  let equation = currentValue.toString()
  switch (keyId) {
    case "reset":
      return "0"; 
    case "del":
      return equation === "0" ? equation : currentValue.slice(0, -1); 
    case "=":
      try {
        const result = evaluateExpression(currentValue);
        return result.toString();
      } catch (error) {
        return "Error";
      }
    default:      
      return equation === "0" ? keyId : equation + keyId;
  }
};

const evaluateExpression = (expression) => {
  const evaluatedExpression = expression.replace(/,/g, ".");

  const result = eval(evaluatedExpression);

  return parseFloat(result.toFixed(8));
};

export const isNumberKey = (key) => {
  return !isNaN(parseFloat(key)) || key === ".";
};

export const isOperatorKey = (key) => {
  return ["+", "-", "*", "/"].includes(key);
};
