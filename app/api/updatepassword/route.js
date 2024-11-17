import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const sessionId = cookies().get('sessionId')?.value;

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID not found' }, { status: 401 });
    }
    const formData = await request.formData();
    const oldPassword = formData.get('oldPassword');
    const newPassword = formData.get('newPassword');
    const conPassword = formData.get('conPassword');

    const res = await fetch('https://api.bloombax.com/api/updatePassword', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        oldPassword,
        newPassword,
        conPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data.error || 'Failed to update password' }, { status: res.status });
    }

    return NextResponse.json(data,{ message: 'Password updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in updatePassword handler:', error);
    return NextResponse.json({ error: 'An error occurred. Please try again.' }, { status: 500 });
  }
}
