// attendee object
let attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// 1. Log attendee name
function logAttendeeName(attendee) {
    console.log(attendee.name);
}

// 2. Log ticket price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

// 3. Update ticket type
function updateTicketType(attendee, newTicketType) {
    attendee.ticketType = newTicketType;
}

// 4. Update ticket price
function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
}

// 5. Remove event property
function removeEventProperty(attendee) {
    delete attendee.event;
}

// 6. Add checked-in property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
}

// REQUIRED EXPORT (IMPORTANT FOR TESTS)
module.exports = {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
};