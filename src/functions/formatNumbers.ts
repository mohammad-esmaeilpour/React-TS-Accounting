export const formatNumbers = (number: number, separate: boolean = true) => {
  const language: string = "en";
  
  const formattedNumber = separate
    ? number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : number?.toString();

  if (language === "fa" || language === "ar") {
    return formattedNumber && formattedNumber?.replace(
      /\d/g,
      (digit) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(digit, 10)]
    );
  }

  return formattedNumber;
};
