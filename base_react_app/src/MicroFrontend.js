import React, { useState, useEffect, useRef } from "react";

export default function MicroFrontend({ host }) {
  const messages = useState([]);
  /** @type {{current: HTMLIFrameElement}} */
  const iframeRef = useRef(undefined);

  function s(event) {
    console.warn(event);
  }

  useEffect(() => {
    console.warn("registered");
    window.addEventListener("message", s);
    return () => {
      window.removeEventListener("message", s);
    };
  }, []);
  return (
    <iframe
      ref={iframeRef}
      style={{ height: "100%", width: "100%" }}
      src={host}
    />
  );
}
