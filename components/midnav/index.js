import React, { useState, useEffect, useRef } from "react";
import Upcoming from "@/components/midSection/upComing";
import Ongoing from "@/components/midSection/onGoing";
import Past from "@/components/midSection/past";
import Link from "next/link";

const MidiSection = () => {
  const [link, setLink] = useState("upcoming");
  const [sticky, setSticky] = useState(false);

  const HandleNavigation = (componentName) => {
    setLink(componentName);
  };

  const midRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (midRef.current != null) {
        if (scrollY >= midRef.current.offsetTop - 30) {
          setSticky(true);
        } else if (scrollY <= midRef.current.offsetTop - 30) {
          setSticky(false);
        } else {
          setSticky(false);
        }
      }
    });
  }, []);

  return (
    <>
      <div className={`${sticky ? "fixed" : ""} bg-white`}>
        <div className={`container d-flex justify-content-between`}>
          <div className="">
            <ul className={`nav justify-content-center py-2`}>
              <li className="nav-item">
                <a
                  className={`nav-link text-bodoni text-decoration-none me-5 cf-grey65 ${
                    link == "upcoming" ? "text-black" : ""
                  }`}
                  onClick={() => HandleNavigation("upcoming")}
                >
                  Upcoming
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-bodoni text-decoration-none me-5 cf-grey65 ${
                    link == "ongoing" ? "text-black" : ""
                  }`}
                  onClick={() => HandleNavigation("ongoing")}
                >
                  Ongoing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-bodoni text-decoration-none me-5 cf-grey65 ${
                    link == "past" ? "text-black" : ""
                  }`}
                  onClick={() => HandleNavigation("past")}
                >
                  Past
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="nav-item d-flex justify-content-end align-items-center h-100">
              <Link href="/faq">
                <a className="text-bodoni text-black nav-link">
                  What is CloudFunding?
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3" ref={midRef}>
        {link == "upcoming" ? (
          <Upcoming />
        ) : link == "ongoing" ? (
          <Ongoing />
        ) : link == "past" ? (
          <Past />
        ) : (
          <Upcoming />
        )}
      </div>
    </>
  );
};

export default MidiSection;
