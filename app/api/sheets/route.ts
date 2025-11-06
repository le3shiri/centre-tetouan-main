import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json({ success: false, message: 'Only POST requests allowed' }, { status: 405 });
  }

  try {
    const body = await request.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const row = [
      body.firstName,
      body.lastName,
      body.birthDate,
      body.idNumber,
      body.address,
      body.education,
      body.phone,
      body.email,
      body.activities.gaming ? 'Yes' : 'No',
      body.activities.art ? 'Yes' : 'No',
      body.activities.coworking ? 'Yes' : 'No',
      body.activities.recording ? 'Yes' : 'No',
      body.activities.audioVisual ? 'Yes' : 'No',
      body.activities.education ? 'Yes' : 'No',
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID!,
      range: 'Feuille 1!A:Z',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error appending to sheet:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to save data', 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}