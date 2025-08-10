const JSONSTRUCTURE = {
  ATS_Score_with_JD: {
    Heading: "ATS score with job description",
    score: 0,
    description:
      "Provide a 100-word explanation of the ATS score when a job description is available.",
  },
  ATS_Score_without_JD: {
    Heading: "ATS score without job description",
    score: 0,
    description:
      "Provide an explanation of the ATS score when no job description is available.",
  },
  Resume_Readability: {
    Heading: "Resume readability",
    score: 0,
    description:
      "Describe the readability of the resume, including clarity, grammar, and sentence structure.",
  },
  Keywords_Missing: {
    Heading: "Missing keywords",
    missing_keywords: ["example_keyword1", "example_keyword2"],
    description:
      "Explain the benefits of including these keywords in the resume.",
  },
  Suggestions: {
    Heading: "Suggestions to improve the resume",
    description: "Suggestion to improve the resume in 100 words",
    probable_matching_job_titles: ["Job Title 1", "Job Title 2"],
  },
  What_to_Improve: {
    Heading: "What needs to improve",
    description:
      "Provide suggestions for improving the resume to increase ATS score and relevance.",
  },
};

export default JSONSTRUCTURE;
