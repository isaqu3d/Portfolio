// src/components/GitHubAvatar.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";

export function GitHubAvatar() {
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      const url = "https://api.github.com/users/isaqu3d";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setAvatar(data.avatar_url);
      } catch (error) {
        console.error("Error fetching GitHub avatar:", error);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <div className="inline-block h-[100px] w-[100px] overflow-hidden rounded-full">
      {avatar ? (
        <Image
          src={avatar}
          alt="avatar"
          width={100}
          height={100}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <Skeleton className="h-[100px] w-[100px] rounded-full bg-rose-100/10 dark:bg-slate-300" />
      )}
    </div>
  );
}
