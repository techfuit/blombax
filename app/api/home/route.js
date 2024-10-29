import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {

  const sessionId = cookies().get('sessionId')?.value;

  try {
    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID not found' }, { status: 401 });
    }

    const apiResponse = await fetch('https://api.dfmtrade.com/api/home', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({sessionId})
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
