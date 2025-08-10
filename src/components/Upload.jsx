import {
  Typography,
  Button,
  IconButton,
  Grid,
  Dialog,
  TextField,
  Box,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

// Manually set workerSrc using import.meta.url
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.js",
  import.meta.url
).href;

const Upload = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jd, setJd] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = async () => {
      const typedArray = new Uint8Array(fileReader.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const text = content.items.map((item) => item.str).join(" ");
        fullText += text + "\n";
      }

      if (fullText)
        return navigate("/resumeoverview", {
          state: {
            fullText,
            jd,
          },
        });
    };
  };

  return (
    <>
      <Grid
        size={12}
        border={"2px dotted #2DC08D"}
        backgroundColor={"white"}
        height={{ lg: "40%", md: "40%", sm: "50%", xs: "45%" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        borderRadius={2}
        mt={{ lg: 7, md: 7, sm: 6, xs: 6 }}
        px={{ xs: 1, sm: 2, md: 5, lg: 5 }}
      >
        <Typography
          fontSize={{
            xs: "0.8rem",
            sm: "1.5rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          fontFamily={"Rubik, sans-serif"}
          textAlign={"center"}
        >
          Drop your resume here or choose a file. PDF & DOCX only. Max 2MB file
          size.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2DC08D",
            mt: { xs: 2, sm: 2, md: 3, lg: 3 },
            py: { lg: 1.5, md: 1.5 },
            width: { xs: "50%", sm: "50%", md: "30%", lg: "30%" },
          }}
          onClick={() => setOpenDialog(true)}
        >
          <Typography
            sx={{ textTransform: "none" }}
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem", lg: "1.5em" }}
          >
            Upload resume
          </Typography>
        </Button>

        <Grid
          size={12}
          mt={{ xs: 3, sm: 3, md: 2, lg: 2 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton>
            <LockIcon fontSize="small" />
          </IconButton>
          <Typography color="grey" mt={{ xs: 0, sm: 0, md: 0.5, lg: 0.5 }}>
            Privacy guranteed
          </Typography>
        </Grid>
      </Grid>

      {/* {Dialog} */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            width: "650px",
            height: "40vh",
            borderRadius: 3,
            padding: 2,

            border: "2px dotted #2DC08D",
          },
        }}
      >
        <Box
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          {/* {Heading} */}
          <Typography
            fontFamily={"Rubik, sans-serif"}
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem", lg: "1.5rem" }}
            fontWeight={{ xs: 400, sm: 400, md: 500, lg: 500 }}
          >
            You can also enter the job description to receive a tailored,
            job-specific resume analysis.
          </Typography>

          {/* {Textfield} */}
          <TextField
            placeholder="Enter job description (optional)"
            fullWidth
            multiline
            rows={4}
            sx={{ mt: { xs: 2, sm: 2, md: 5, lg: 5 } }}
            onChange={(e) => setJd(e.target.value)}
          />

          {/* {Action-Button} */}

          <Grid
            container
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={"100%"}
            mt={4}
          >
            <label htmlFor="upload-resume">
              <input
                id="upload-resume"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Button
                variant="contained"
                component="span"
                sx={{
                  background: "#2DC08D",
                  color: "white",
                  py: { xs: 1, sm: 1, md: 1.5, lg: 1.5 },
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1rem",
                    lg: "1rem",
                  },
                  fontWeight: 800,
                }}
              >
                Upload Resume
              </Button>
            </label>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};

export default Upload;
