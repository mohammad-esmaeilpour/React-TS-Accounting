
export const detectUserLanguage = (): string => {
  // Check if multiple preferred languages are available
  if (navigator.languages && navigator.languages.length > 0) {
    console.log(navigator.language);
    
    return navigator.languages[0];
  }

  // Fallback to the single preferred language if available
  return navigator.language || 'en';
};
