export async function POST(req: any) {
  try {
    // NOTE: дані котрі ми от римали після проходження квіза
    const data = await req.json();

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
    });
  }
}
