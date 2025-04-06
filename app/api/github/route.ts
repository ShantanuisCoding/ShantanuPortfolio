import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://api.github.com/users/ShantanuisCoding');
    const data = await res.json();
    return NextResponse.json({ repos: data.public_repos });
}
