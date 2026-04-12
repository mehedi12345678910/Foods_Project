export const feedback=[
    {
        id:1,
        message:"This is wow"
    },
    {
        id:2,
        message:"not easy is wow"
    },
]

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "yahoo . Api created",
  });
}
