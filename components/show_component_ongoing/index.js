import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import CountDown from "@/components/countDown";
import Progressbar from "@/components/progress_bar";

const ShowComponentOngoing = ({ status = 2 }) => {
  return (
    <>
      <div className="mb-5 bg-white py-5 rounded-20">
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              <Link href={`/company_details/1`} passHref>
                <a rel="noopener noreferrer" traget="_blank">
                  <Image
                    src={"/images/placeholder_image.jpg"}
                    alt="image-placeholder"
                    className="rounded-circle d-block"
                    width={"200"}
                    height={"200"}
                  />
                </a>
              </Link>

              <Link href={`/company_details/1`}>
                <a className={`cf-grey65 d-block href-hover`}>Learn more</a>
              </Link>
            </div>
          </div>

          <div className="col-md-8">
            <div className="d-flex justify-content-between">
              <div>
                <p className="h4 text-uppercase text-bodoni">Compaign Title</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididut ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                {status == 3 ? (
                  <Link href={`/mertics_details/1`} passHref>
                    <a>
                      <Button
                        classStyle={`${
                          status == 1 ? "bg-mainly-red text-white" : "bg-gray88"
                        } rounded-pill text-bodoni mb-2 w-show-component`}
                      >
                        View Mertics
                      </Button>
                    </a>
                  </Link>
                ) : (
                  <Button
                    classStyle={`${
                      status == 1 ? "bg-mainly-red text-white" : "bg-gray88"
                    } rounded-pill text-bodoni mb-2 w-show-component`}
                  >
                    Contribute
                  </Button>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div
                className={`text-bodoni me-4 rounded-2 w-25 bg-red p-2 text-center ${
                  status == 1 ? "bg-mainly-red text-white" : "bg-gray88"
                }`}
              >
                <p>Compaign ends in</p>
                <CountDown />
              </div>
              <div className="w-75 my-auto">
                <Progressbar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowComponentOngoing;
