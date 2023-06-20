import {  useLayoutEffect, useRef, useState } from "react"

const useShowDebound = () => {
  const [show, setShow] = useState(false)
  const showRef = useRef(false)
  const [showDebound, setShowDebound] = useState(false)
  useLayoutEffect(() => {
    showRef.current = show
    if (show) {
      setShowDebound(showRef.current)
    } else {
      setTimeout(() => setShowDebound(showRef.current), 500)
    }
  }, [show])

  return {show: showDebound, setShow}
}

export default useShowDebound