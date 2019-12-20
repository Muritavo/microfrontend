import React, { useState, useEffect, useRef } from "react";

export default function MicroFrontend({ host }) {
  const [isLoaded, setIsLoaded] = useState(false);
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

  useEffect(() => {
    if (isLoaded) {
      try {
        console.log("Sucesso ao carregar o subapp", iframeRef.current.contentDocument);
      } catch (e) {
        console.error("Error ao carregar o subapp", e);
      }
    }
  }, [isLoaded]);
  return (
    <iframe
      onLoad={() => setIsLoaded(true)}
      ref={iframeRef}
      style={{ height: "100%", width: "100%" }}
      src={host}
    />
  );
}
