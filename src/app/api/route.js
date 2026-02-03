export const feedback = [
  { id: 1, message: "food was good" },
  {
    id: 2,
    message: "awesome food",
  },
  {
    id: 3,
    message: "great food",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "yaho, api created",
  });
}
