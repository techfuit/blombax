import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const response = new NextResponse(null, { status: 204 });
    response.cookies.delete('sessionId');
    response.cookies.delete('data'); 
    
    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
