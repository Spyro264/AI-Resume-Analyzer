import {  Grid, Typography , Button , TextField } from '@mui/material';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';

// Manually set workerSrc using import.meta.url
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.js',
  import.meta.url
).href;

const UploadResume = () => {

  const handleFileChange = (e) => {
    console.log("hey");
    
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = async () => {
      const typedArray = new Uint8Array(fileReader.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let fullText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const text = content.items.map((item) => item.str).join(' ');
        fullText += text + '\n';
      }

      alert(fullText);
    };
  };

  return (
    <Grid container flexDirection={"row"} gap={2} minHeight={"20vh"} sx={{backgroundColor:"white" , borderRadius:2}} p={2} boxShadow={3} border={"2px dashed #57CDA4"}>

        {/* {heading} */}
        <Grid size={12}   display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Typography variant="h6" sx={{ fontFamily: 'Rubik', fontWeight: 400 }}>
                Upload your resume here or choose a file.
            </Typography>
             <Typography variant="h6" sx={{ fontFamily: 'Rubik', fontWeight: 400 }}>
               PDF & DOCX formats only
            </Typography>
        </Grid>

        {/* {Button Grid} */}
        <Grid size={12} display="flex" justifyContent="center" alignItems="center">
            <label htmlFor="upload-resume">
                <input id="upload-resume" type="file" style={{ display: "none" }} onChange={handleFileChange}/>
                <Button
                variant="contained"
                component="span"
                sx={{ background: "#57CDA4", color: "white" }}
                >
                Upload Your Resume
                </Button>
            </label>
        </Grid>

        
        {/* {Footer} */}
        <Grid size={12}   display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="body2" sx={{ fontFamily: 'Rubik', fontWeight: 400 }}>
               We will analyze your resume and provide feedback 
            </Typography>

        </Grid>

    </Grid>
  )
}

export default UploadResume
