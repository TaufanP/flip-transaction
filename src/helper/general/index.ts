const bankTextType = (code: string) =>
  code?.length < 5 ? "b.16.text1.u" : "b.16.text1.c";

export { bankTextType };
