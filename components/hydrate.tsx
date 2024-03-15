"use client";
import React from "react";
import {
  Hydrate as HydrationBoundary,
  HydrateProps as HydrationBoundaryProps,
} from "@tanstack/react-query";
interface HydrateProps extends HydrationBoundaryProps {}

export const Hydrate: React.FC<HydrateProps> = ({ ...props }) => {
  return <HydrationBoundary {...props} />;
};
