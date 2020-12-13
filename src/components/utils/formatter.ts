export const formatAddress = (address: string, isMini?: boolean): string => {
  return !isMini
    ? address.replace(/(\w{6})\w*?(\w{6}$)/, '$1......$2')
    : address.replace(/(\w{6})\w*$/, '$1...');
};
