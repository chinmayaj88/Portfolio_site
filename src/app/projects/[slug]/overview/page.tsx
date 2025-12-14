"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProjectOverviewRedirect() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params?.slug) {
      router.replace(`/projects/${params.slug}`);
    }
  }, [params, router]);

  return null;
}

