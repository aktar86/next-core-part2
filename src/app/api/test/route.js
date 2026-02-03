const testJson = [
  {
    id: 1,
    message: "test one",
  },
  {
    id: 2,
    message: "test two",
  },
  {
    id: 3,
    message: "test Three",
  },
];

export async function GET(request) {
  return Response.json(testJson);
}
