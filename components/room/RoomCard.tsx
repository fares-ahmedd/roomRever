import Image from "next/image";
import RoomInfoList from "./RoomInfoList";
import RoomPrices from "./RoomPrices";
import RoomBooking from "./RoomBooking";

function RoomCard({ hotel, room }: { hotel: any; room: any }) {
  return (
    <li className="border rounded-lg p-2 bg-sec-background text-main-text  max-w-[400px] ">
      <h5 className="font-extrabold text-lg">#{room.title}</h5>
      <section className="w-full min-h-[300px] relative overflow-hidden">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="duration-300 hover:scale-110"
        />
      </section>
      <RoomInfoList room={room} />
      <RoomPrices room={room} />
      <RoomBooking room={room} hotel={hotel} />
    </li>
  );
}

export default RoomCard;
