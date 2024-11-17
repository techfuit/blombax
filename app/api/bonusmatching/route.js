import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const sessionId = cookies().get('sessionId')?.value;
    const {type} = await req.json();

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID not found' }, { status: 401 });
    }

    const apiResponse = await fetch('https://api.bloombax.com/api/bonusList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionId}`,
      },
      body: JSON.stringify({sessionId, type}),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      return NextResponse.json({ error: errorData.message }, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
