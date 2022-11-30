import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    if (window.location) {
      window.location.href = "/signUp";
    }
  });
}
