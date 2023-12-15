//ticketExtractor.js
export const extractTicketId = (emailSubject) => {
  const pattern = /[A-Za-z]\d{3}/; // Adjust regex based on exact pattern
  const match = emailSubject.match(pattern);
  return match ? match[0] : null;
};
