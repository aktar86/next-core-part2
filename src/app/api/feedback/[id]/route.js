import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

export async function GET(request, { params }) {
  const { id } = await params;

  if (!id) {
    return Response.json({
      status: 404,
      message: "write the correct id",
    });
  }
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);

  return Response.json(result);
}

// delete feedback api
export async function DELETE(request, { params }) {
  const { id } = await params;

  if (!id) {
    return Response.json({
      status: 404,
      message: "write the correct id",
    });
  }
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);

  return Response.json(result);
}

// update feedback api
export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();

  if (!message) {
    return Response.json({
      status: 404,
      message: "write the mesage first",
    });
  }

  if (!id) {
    return Response.json({
      status: 404,
      message: "write the correct id",
    });
  }
  const query = { _id: new ObjectId(id) };

  const updateDoc = {
    $set: {
      message,
    },
  };
  const result = await feedbackCollection.updateOne(query, updateDoc);

  return Response.json(result);
}
