import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    if (location) {
      location.href = "/signup";
    }
  });
  return null;
}
