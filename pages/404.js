import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import Title from "@/components/title";
import styles from "@/styles/notFound.module.css";
const NotFound = () => {
  return (
    <>
      <Title pageName={"Not Found 😞"} />
      <div className="container">
        <div
          className={`${styles.hieghtView} d-flex justify-content-center align-items-center`}
        >
          <div className="text-center">
            <Image
              src={"/images/notFoundPlaceholder.png"}
              placeholder="blur"
              alt="Not found Image"
              height={"400"}
              width={"500"}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAFIAUgMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAgMBBP/EABsQAQEBAQEBAQEAAAAAAAAAAAABAgMRIRIx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIhQf/aAAwDAQACEQMRAD8AVlaxMC1lNS0TxgAEWw0JDSgFM1kaUlAAYGsN4zwspi0tPS00p4SsbS2jpm+tlJ6aUtpapGlhoGkrQAGgp4zxTxlicpk6SqaS0rDxPRLTaqdpjN9PlOKZStLVMqSFzFJC6Ss8B/A2gt+SWL2J6hYZDSG6vtzdKtyMS3U/RvRJfqmGVyviI4dPOI9BVMRWZZiLSJgT8hT8hgVsS3F7EthGcvRx9a7Orh7L8i5t36XN+s6X6zF+rZ4Lr5OvnHJydvJDpl8RaQmIrmJVh4DeAGNUdgNCuXq4ewC/DOLp/Rj+gL/DOvk7eQCHTOrC2QEaxgAzP//Z"
            />

            <h3 className="text-bodoni pt-3">Page Not Found </h3>
            <p className="text-bodoni w-75 p-3 mx-auto">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href={"/"} passHref>
              <a>
                <Button classStyle={"rounded-pill text-bodoni mt-3"}>
                  Go To Home
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
