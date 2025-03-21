"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { IconButton } from "./base/iconButton";

export function Pagination() {
  return (
    <div className="mx-auto flex w-full justify-center">
      <IconButton>
        <ArrowLeft />
      </IconButton>
      <IconButton>
        <ArrowRight />
      </IconButton>
    </div>
  );
}
