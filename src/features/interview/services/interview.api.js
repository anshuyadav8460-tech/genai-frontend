import axios from "axios";

const api = axios.create({
    baseURL: "https://genai-backend-1-94gd.onrender.com",
    withCredentials: true,
});


// =====================================================
// GENERATE INTERVIEW REPORT
// =====================================================

export const generateInterviewReport = async ({
    jobDescription,
    selfDescription,
    resumeFile,
}) => {

    const formData = new FormData();

    formData.append(
        "jobDescription",
        jobDescription || ""
    );

    formData.append(
        "selfDescription",
        selfDescription || ""
    );

    if (resumeFile) {
        formData.append(
            "resume",
            resumeFile
        );
    }

    console.log(
        "========== FRONTEND GENERATE REQUEST =========="
    );

    console.log("Job Description:", jobDescription);
    console.log("Self Description:", selfDescription);
    console.log("Resume:", resumeFile);

    const response = await api.post(
        "/api/interview/",
        formData
    );

    console.log(
        "========== FRONTEND GENERATE RESPONSE =========="
    );

    console.log(response.data);

    return response.data;
};


// =====================================================
// GET INTERVIEW REPORT BY ID
// =====================================================

export const getInterviewReportById = async (
    interviewId
) => {

    const response = await api.get(
        `/api/interview/report/${interviewId}`
    );

    return response.data;
};


// =====================================================
// GET ALL INTERVIEW REPORTS
// =====================================================

export const getAllInterviewReports = async () => {

    const response = await api.get(
        "/api/interview/"
    );

    return response.data;
};


// =====================================================
// GENERATE RESUME PDF
// =====================================================

export const generateResumePdf = async ({
    interviewReportId
}) => {

    const response = await api.post(
        `/api/interview/resume/pdf/${interviewReportId}`,
        null,
        {
            responseType: "blob",
        }
    );

    return response.data;
};