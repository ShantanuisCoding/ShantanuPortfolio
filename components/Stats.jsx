"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";

const Stats = () => {
    const [githubRepos, setGithubRepos] = useState(0);
    const [leetcodeSolved, setLeetcodeSolved] = useState(0);

    const staticStats = [
        {
            num: 3,
            text: "Months of Experience",
        },
        {
            num: 10,
            text: "+Projects",
        }
    ];

    useEffect(() => {
        const fetchGitHubRepos = async () => {
            try {
                const res = await fetch("/api/github");
                const data = await res.json();
                setGithubRepos(data.repos || 0);
            } catch (err) {
                console.error("GitHub fetch error:", err);
            }
        };
    
        const fetchLeetCodeSolved = async () => {
            try {
                const res = await fetch("/api/leetcode");
                const data = await res.json();
                setLeetcodeSolved(data.solved || 0);
            } catch (err) {
                console.error("LeetCode fetch error:", err);
            }
        };
    
        fetchGitHubRepos();
        fetchLeetCodeSolved();
    }, []);    

    const dynamicStats = [
        {
            num: githubRepos,
            text: "GitHub Repositories",
        },
        {
            num: leetcodeSolved,
            text: "LeetCode Problems",
        }

    ];

    const allStats = [...staticStats, ...dynamicStats];

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {allStats.map((item, index) => (
                        <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}
                        >
                            <CountUp
                                end={item.num}
                                duration={2}
                                delay={0.5}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${
                                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                            } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
