import { Box, Grid, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import JSONSTRUCTURE from "../data/jsondata";
import Loader from "../components/Loader";
import SomethingWentWrong from "../components/SomethingWentWrong";

const Resumeoverview = () => {
  const location = useLocation();
  const { fullText, jd } = location.state || {};

  // api token
  const token = import.meta.env.VITE_API_KEY;

  // Post api function
  const PostResumeData = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an advanced AI Resume Analyzer specialized in parsing resumes provided as plain text.  
                    Carefully read the given resume and extract all available information exactly as written — without adding, guessing, rephrasing, or assuming anything that is not explicitly stated in the resume.  
                    Return the output strictly as valid, minified JSON following this schema:  
                    ${JSON.stringify(JSONSTRUCTURE)}  

                    Rules:  
                    1. Do not include any extra commentary, explanations, or text outside of the JSON.  
                    2. Preserve original spellings, formats, and values as found in the resume.  
                    3. If a field is not present, return it as null or an empty array according to the JSON schema.  
                    4. Ensure the JSON is syntactically valid and machine-readable.  
                    5. If a Job Description (JD) is provided, calculate the ATS match score based on the JD and highlight matching & missing keywords.
                    6. If no JD is provided, calculate the ATS score solely based on resume quality, clarity, and completeness.
                    7. In keywords missing section it should always contain minimiun 5 keywords.
                    8. all the descriptions should be consist of  minimum 100 words.
                    9. in the response keep the heading same as provided in the jsonstructure.
                    .`,
          },
          {
            role: "user",
            content: `Here is Resume Plain Text: ${fullText} JD: ${jd}`,
          },
        ],
        temperature: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const openApiResponse = JSON.parse(
      response?.data?.choices[0].message.content
    );
    return openApiResponse;
  };

  // Tansatcak Query
  const { data, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: PostResumeData,
    mutationKey: ["post-resume-data"],
  });

  const {
    ATS_Score_with_JD,
    ATS_Score_without_JD,
    Keywords_Missing,
    Resume_Readability,
    Suggestions,
    What_to_Improve,
  } = data || {};

  const { missing_keywords } = Keywords_Missing || [];

  useEffect(() => {
    if (fullText || jd) {
      mutate();
    }
  }, [fullText, jd, mutate]);

  // loader
  if (isPending) {
    return <Loader open={isPending} />;
  }

  //somehing went wrong
  if (isError) {
    return <SomethingWentWrong />;
  }

  return (
    <Box minHeight={"100vh"} padding={{ xs: 0, sm: 0, md: 10, lg: 10 }}>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={{ xs: 1, sm: 1, md: 0, lg: 0 }}
        flexDirection={"column"}
        gap={5}
      >
        {[
          ATS_Score_without_JD || [],
          Keywords_Missing || [],
          Resume_Readability || [],
          Suggestions || [],
          What_to_Improve || [],
        ].map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, md: 12, lg: 6, sm: 12 }}
            boxShadow={4}
            minHeight={"auto"}
            borderRadius={3}
            sx={{
              backgroundColor: "#E3E9F5",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            padding={{ xs: 2 }}
            px={{ lg: 5 }}
            py={{ lg: 5 }}
          >
            {/* {Score meter} */}
            <Grid
              size={12}
              borderRadius={2}
              minHeight={"15vh"}
              boxShadow={4}
              sx={{ backgroundColor: "#FAFBFD" }}
            ></Grid>

            {/* {description} */}
            <Grid
              size={12}
              mt={2}
              minHeight={"auto"}
              borderRadius={2}
              boxShadow={4}
              sx={{ backgroundColor: "#FAFBFD" }}
              padding={2}
            >
              <Typography
                fontFamily={"Rubik, sans-serif"}
                color="#5F4DC7"
                fontWeight={500}
                fontSize={{
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "1.5rem",
                }}
              >
                {item?.Heading}
              </Typography>
              <Typography
                fontFamily={"Rubik, sans-serif"}
                mt={{ xs: 1, sm: 1, md: 2, lg: 2 }}
              >
                {item?.description}
                {item.Heading === "Missing keywords" &&
                  missing_keywords?.map((item, index) => (
                    <ul key={index}>
                      <li>{item}</li>
                    </ul>
                  ))}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Resumeoverview;
