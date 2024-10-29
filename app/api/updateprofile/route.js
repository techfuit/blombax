import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const sessionId = cookies().get('sessionId')?.value;

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID not found' }, { status: 401 });
    }

    const formData = await request.formData();
    const name = formData.get('name');
    const phone_number = formData.get('phone_number');  

    const updatePayload = {};
    if (name) updatePayload.name = name;
    if (phone_number) updatePayload.phone_number = phone_number;

    const apiResponse = await fetch('https://api.dfmtrade.com/api/updateProfile', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId, ...updatePayload }), 
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
