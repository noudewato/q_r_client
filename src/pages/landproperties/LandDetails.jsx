/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { baseUrl } from "../../api/api";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LandDetails = () => {
  const myCurrency = new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
  });
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${baseUrl}/api/properties/${id}`);
      setData(res.data);
    } catch (error) {
      setError("Error fetching data!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container sx={{ backgroundColor: "white" }}>
      <Box sx={{ margin: "1rem", minHeight: "100vh" }}>
        <div className="px-[1%] md:px-[1%] pt-[3rem] mt-[3rem] bg-slate-100 min-h-[100vh] pb-[.5rem]">
          <Typography variant="h4" sx={{ marginBottom: "06px" }}>
            <Link
              to="/landproperties"
              style={{
                border: "1px solid black",
                padding: ".2rem .5rem",
                borderRadius: "50%",
              }}
            >
              <ArrowBackIcon />
            </Link>{" "}
            Land Property Details
          </Typography>

          {loading ? (
            <div>...Loading</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-4">
                <div className="bg-white shadow-2xl rounded-lg">
                  <Slider images={data && data.images} />
                </div>

                <div className="my-[1rem] p-[1rem] bg-white shadow-2xl rounded-lg">
                  <h2 className="w-[50%] text-xl font-semibold">
                    {data && data.propertyTitle}
                  </h2>
                  <div>
                    <h3 className="py-[.5rem] text-xl font-semibold">
                      <span style={{ color: "blue" }}>City:</span>{" "}
                      <span className="text-primary">
                        {data && data.city}
                      </span>{" "}
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 4,
                    }}
                  >
                    <div>
                      <h3 className="pt-[.5rem] text-xl font-semibold">
                        <span style={{ color: "blue" }}>Address:</span>{" "}
                        <span className="text-primary">
                          {data && data.propertyLocation}
                        </span>{" "}
                      </h3>
                    </div>
                    <div>
                      <h3 className="py-[.5rem] text-xl font-semibold">
                        <span style={{ color: "blue" }}>Price:</span>{" "}
                        <span className="text-primary">
                          {myCurrency.format(
                            data && data.propertyPrice
                          )}{" "}
                        </span>{" "}
                      </h3>
                    </div>

                    <div>
                      <h3 className="pt-[.5rem] text-xl font-semibold">
                        <span style={{ color: "blue" }}>Status:</span>{" "}
                        <span className="text-primary">
                          {data && data.propertyStatus}
                        </span>{" "}
                      </h3>
                    </div>
                    <div>
                      <h3 className="py-[.5rem] text-xl font-semibold">
                        <span style={{ color: "blue" }}>Property:</span>{" "}
                        <span className="text-primary">
                          {data && data.propertyType}
                        </span>{" "}
                      </h3>
                    </div>
                  </div>
                  <Stack direction="row" alignItems="center" gap=".5rem">
                    <Typography variant="h5">Call Agent:</Typography>
                    <Button
                      variant="outlined"
                      // sx={{ width: "48%" }}
                      color="success"
                    >
                      {" "}
                      <PhoneInTalkOutlinedIcon />
                      <a
                        style={{
                          textDecoration: "none",
                          paddingLeft: "3px",
                          fontSize: "18px",
                          color: "green",
                        }}
                        href="tel:0555009156"
                      >
                        0555009156
                      </a>
                    </Button>
                  </Stack>
                  <hr className="h-[10px]" />
                  <h1 className="text-xl font-bold py-[1rem]">Details</h1>
                  <div>
                    <div
                      className="text-lg text-slate-900 py-[1rem]"
                      dangerouslySetInnerHTML={{
                        __html: data && data.propertyDetails,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Box>
      <Footer />
    </Container>
    //   <div>
    //     {landPropertyDetails ? (
    //       <>
    //         <h2>{landPropertyDetails?.propertyTitle}</h2>
    //         <p>{landPropertyDetails?.propertyPrice}</p>
    //         <Slider images={landPropertyDetails?.images} />
    //       </>
    //     ) : (
    //       <p>Land property not found</p>
    //     )}
    //   </div>
  );
};

export default LandDetails;
