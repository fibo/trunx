"use client"
import { useEffect } from "react"

export const useStopScroll = (isActive: boolean) => {
  useEffect(() => {
    if (isActive) {
      document.querySelector("html").classList.add("is-clipped")
    } else {
      document.querySelector("html").classList.remove("is-clipped")
    }
  }, [isActive])
}
