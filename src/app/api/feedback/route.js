import { connect } from "@/app/lib/dbConnect";
const feedbackCollection = connect("feedbacks");

// GET Method: ডেটা পড়ার জন্য
export async function GET(request) {
  const result = await feedbackCollection.find().toArray();

  return Response.json(result);
}

// POST Method: ডেটা সেভ করার জন্য
export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json(
      {
        status: 400,
        message: "Please send a valid message string",
      },
      { status: 400 },
    );
  }

  const newFood = {
    message,
    createdAt: new Date().toISOString(),
  };

  const result = await feedbackCollection.insertOne(newFood);

  return Response.json({
    status: 201,
    message: "Data saved successfully",
    data: result,
  });
}
