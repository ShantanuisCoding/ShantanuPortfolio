import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query getUserProfile($username: String!) {
                        matchedUser(username: $username) {
                            submitStats {
                                acSubmissionNum {
                                    difficulty
                                    count
                                }
                            }
                        }
                    }
                `,
                variables: {
                    username: "Shaaantaaanu",
                },
            }),
        });

        const json = await response.json();
        const total =
            json?.data?.matchedUser?.submitStats?.acSubmissionNum?.[0]?.count || 0;

        return NextResponse.json({ solved: total });
    } catch (error) {
        console.error('LeetCode API error:', error);
        return NextResponse.json({ solved: 0 }, { status: 500 });
    }
}
