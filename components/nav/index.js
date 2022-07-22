import React from "react";
import Link from "next/link";
import Button from "../button";
import Image from "next/image";
const Nav = () => {
  return (
    <nav className="position-relative sticky-top container py-1">
      <div className="d-flex justify-content-between">
        <div style={{ width: "200px", height: "80" }}>
          <Link href="/">
            <a className="text-black text-decoration-none">
              <Image
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAFIAUgMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAgMBBP/EABsQAQEBAQEBAQEAAAAAAAAAAAABAgMRIRIx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIhQf/aAAwDAQACEQMRAD8AVlaxMC1lNS0TxgAEWw0JDSgFM1kaUlAAYGsN4zwspi0tPS00p4SsbS2jpm+tlJ6aUtpapGlhoGkrQAGgp4zxTxlicpk6SqaS0rDxPRLTaqdpjN9PlOKZStLVMqSFzFJC6Ss8B/A2gt+SWL2J6hYZDSG6vtzdKtyMS3U/RvRJfqmGVyviI4dPOI9BVMRWZZiLSJgT8hT8hgVsS3F7EthGcvRx9a7Orh7L8i5t36XN+s6X6zF+rZ4Lr5OvnHJydvJDpl8RaQmIrmJVh4DeAGNUdgNCuXq4ewC/DOLp/Rj+gL/DOvk7eQCHTOrC2QEaxgAzP//Z"
                src={"/images/logo_placeholder_2.png"}
                layout="responsive"
                width={"200"}
                height={"80"}
                className="img-fluid"
                alt="logo lena instrement"
              />
            </a>
          </Link>
        </div>
        <div className="pt-2">
          <Link href="#" passHref>
            <a>
              <Button
                classStyle={"bg-white text-black rounded-pill text-bodoni"}
                variant={"btn-white"}
              >
                Your Delegation
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
