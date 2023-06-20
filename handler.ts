export async function hello(event) {
  console.log("Hello World",event)
  return {
    message: 'Go Serverless v3! Your function executed successfully!',
    input: event,
  };
}
