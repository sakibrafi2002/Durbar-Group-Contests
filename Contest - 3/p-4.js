function classifyPassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  const typeCount = [hasUpper, hasLower, hasDigit, hasSpecial].filter(true).length;

  if (password.length >= 8 && hasUpper && hasLower && hasDigit && hasSpecial) {
    return "Strong";
  } else if (password.length >= 6 && typeCount >= 2) {
    return "Medium";
  } else {
    return "Weak";
  }
}