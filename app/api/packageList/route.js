import { NextResponse } from 'next/server';

export async function POST() {
 try{
    const apiResponse = await fetch('https://api.dfmtrade.com/api/packagesList', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
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
