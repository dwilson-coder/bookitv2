import { NextRequest, NextResponse } from "next/server";
import Room from "../models/room";

// Display all rooms
export const allRooms = async (req: NextRequest) => {
  const resPerPage: number = 8;
  const rooms = await Room.find();
  return NextResponse.json({
    success: true,
    resPerPage,
    rooms,
  });
};

// Create a new room
export const newRoom = async (req: NextRequest) => {
  const body = await req.json();
  const room = await Room.create(body);
  return NextResponse.json({
    success: true,
    room,
  });
};

// Search for and display details of a single room
export const getRoomDetails = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const room = await Room.findById(params.id);

  if (!room) {
    return NextResponse.json(
      {
        message: "Room not found",
      },
      { status: 404 }
    );
  }
  return NextResponse.json({
    success: true,
    room,
  });
};
