export async function handler(event: any) {
  console.log("get user", event);
  return {
    message: "Get User",
    input: event,
  };
}
