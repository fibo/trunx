"use client"
import { useEffect } from "react"

export const useStopScroll = (isActive: boolean) => {
  useEffect(() => {
    const html = document.querySelector("html")
    if (!html) return
    if (isActive) {
      html.classList.add("is-clipped")
    } else {
      html.classList.remove("is-clipped")
    }
  }, [isActive])
}
