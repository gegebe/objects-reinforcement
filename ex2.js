const flightReservation = {
  flightNumber: "AC123",
  airline: "Air Canada",
  departure: {
    airport: "JFK Airport",
    date: "2023-11-01",
    time: "08:30 AM",
  },
  arrival: {
    airport: "LAX Airport",
    date: "2023-11-01",
    time: "01:45 PM",
  },
  passenger: {
    firstName: "John",
    lastName: "Doe",
    passport: "AB123456",
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+1 (123) 456-7890",
    },
  },
  seat: "23A",
  ticketClass: "Economy",
  specialMeals: ["Vegetarian", "Gluten-free"],
  baggage: {
    checked: {
      quantity: 2,
      totalWeight: 3,
    },
    carryOn: {
      quantity: 1,
      totalWeight: 7,
    },
  },
  inFlightServices: ["Entertainment", "Wi-Fi"],
  loyaltyProgram: {
    name: "Frequent Flyer",
    points: 1500,
  },
  specialRequests: "Wheelchair assistance",
  totalPrice: "$450.00",
  paymentMethod: "Credit Card",
  bookingReference: "XYZ789",
  isConfirmed: true,
  isCancelled: false,
  flightStatus: "On time",
  gate: "B15",
};

// Aplica las siguientes MODIFICACIONES al objeto flightReservation. Para cada apartado, se necesita una línea de JavaScript que modifique la propiedad adecuada
// Cada vez que modifiques una propiedad, comprueba el resultado mediante `node ex2.js`

// 1. El vuelo se ha retrasado. Modifica la propiedad flightStatus a "Delayed"

  console.log(flightReservation.flightStatus = "Delayed");

// 2. Como compensación del restraso, nos han cambiado el ticket a 'First Class'

  console.log(flightReservation.ticketClass = "First Class");

// 3. Como consequencia del retraso, ahora la hora estimada de salida es 9:30 AM. Modifica la propiedad adecuada

  console.log(flightReservation.departure.time = "09:30 AM");

// 4. Acaban de actualizar los tipos de comidas especiales que sirven en el avión. Añade la opción "Vegan"

  console.log(flightReservation.specialMeals.push("Vegan"));

// 5. Por el retraso del avión nos van a aplicar un 15% de descuento sobre el precio del billete. Actualiza el precio total del billete con el nuevo valor, pero mantén el formato! totalPrice: '$999.99'

  let actualPrice = +flightReservation.totalPrice.slice(1,7);
  let discount = (actualPrice * 15) / 100;

  console.log(`$${actualPrice - discount}`);

