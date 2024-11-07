// import Error from "@/app/error";
// import RoomDetails from "@/components/room/RoomDetails";

// interface Props {
//   params: { id: string };
// }

// const getRoom = async (id: string) => {
//   const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
//   return res.json();
// };

// export default async function RoomDetailsPage({ params }: Props) {
//   //
//   const { id } = await params;
//   let data = await getRoom(id);
//   // let room = await Room.findById(id);

//   if (data?.message) {
//     return <Error error={data} />;
//   }

//   return <RoomDetails data={data} />;
// }
import Error from "@/app/error";
import RoomDetails from "@/components/room/RoomDetails";

interface Props {
  params: { id: string };
}

const getRoom = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
  return res.json();
};

export default async function RoomDetailsPage({ params }: Props) {
  // const data = await getRoom(params?.id);
  const { id } = await params;
  let data = await getRoom(id);

  if (data?.message) {
    return <Error error={data} />;
  }

  return <RoomDetails data={data} />;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  let data = await getRoom(id);

  return {
    title: data?.room?.name,
  };
}
