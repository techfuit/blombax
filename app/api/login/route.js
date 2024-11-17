import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const response = await fetch('https://api.bloombax.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: responseData.error || 'Login failed' }, { status: 400 });
    }

    const { status, sessionId } = responseData;

    if (!status) {
      return NextResponse.json({ error: 'Login unsuccessful' }, { status: 401 });
    }

    const res = NextResponse.json({ 
      message: 'Login successful',   
      status: true,
      sessionId: sessionId,
    });

    res.cookies.set('sessionId', sessionId, {
      httpOnly: true, 
      secure: true, 
      sameSite: 'None', 
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
    });

    return res;

  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
