import { isBefore, isAfter, isSameDay, parseISO } from "date-fns";

export const PAGE_SIZE = 6;

export function getData(formData: any) {
  const userId = formData.get("userId");
  const starRating = formData.get("startRating");
  const title = formData.get("title");
  const description = formData.get("description");
  const locationDescription = formData.get("locationDescription");
  const image = formData.get("image");
  const country = formData.get("country");
  const state = formData.get("state");
  const city = formData.get("city");
  const gym = formData.get("gym") ? true : false;
  const spa = formData.get("spa") ? true : false;
  const bar = formData.get("bar") ? true : false;
  const laundry = formData.get("laundry") ? true : false;
  const restaurant = formData.get("restaurant") ? true : false;
  const shopping = formData.get("shopping") ? true : false;
  const freeParking = formData.get("freeParking") ? true : false;
  const bikeRental = formData.get("bikeRental") ? true : false;
  const freeWifi = formData.get("freeWifi") ? true : false;
  const movieNights = formData.get("movieNights") ? true : false;
  const swimmingPool = formData.get("swimmingPool") ? true : false;
  const coffeeShop = formData.get("coffeeShop") ? true : false;

  return {
    title,
    description,
    locationDescription,
    image,
    country,
    state,
    city,
    gym,
    spa,
    bar,
    laundry,
    restaurant,
    shopping,
    freeParking,
    bikeRental,
    freeWifi,
    movieNights,
    swimmingPool,
    coffeeShop,
    userId,
    starRating,
  };
}

export function getRoomData(formData: any) {
  const hotelId = formData.get("hotelId");
  const roomId = formData.get("roomId");
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");
  const roomPrice = formData.get("roomPrice");
  const guestCount = formData.get("guestCount");
  const bedCount = formData.get("bedCount");
  const bathroomCount = formData.get("bathroomCount");
  const kingBed = formData.get("kingBed");
  const queenBed = formData.get("kingBed");
  const breakFastPrice = formData.get("breakFastPrice");
  const roomService = formData.get("roomService") ? true : false;
  const balcony = formData.get("balcony") ? true : false;
  const cityView = formData.get("cityView") ? true : false;
  const forestView = formData.get("forestView") ? true : false;
  const oceanView = formData.get("oceanView") ? true : false;
  const mountainView = formData.get("mountainView") ? true : false;
  const airConditions = formData.get("airConditions") ? true : false;
  const soundProofed = formData.get("soundProofed") ? true : false;
  const freeWifi = formData.get("freeWifi") ? true : false;
  const TV = formData.get("TV") ? true : false;

  return {
    hotelId,
    title,
    description,
    TV,
    image,
    roomPrice,
    soundProofed,
    airConditions,
    mountainView,
    forestView,
    balcony,
    cityView,
    oceanView,
    freeWifi,
    roomService,
    bedCount,
    guestCount,
    bathroomCount,
    breakFastPrice,
    kingBed,
    queenBed,
    roomId,
  };
}

export const calculateDayCount = (from: Date, to: Date) => {
  const diffTime = Math.abs(to.getTime() - from.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1;
};

export function formatDate(date: Date | undefined) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function isDateDisabled(date: Date, bookings: any): boolean {
  return bookings.some((booking: any) => {
    const start = parseISO(booking.startDate);
    const end = parseISO(booking.endDate);
    return (
      (isAfter(date, start) || isSameDay(date, start)) &&
      (isBefore(date, end) || isSameDay(date, end))
    );
  });
}
