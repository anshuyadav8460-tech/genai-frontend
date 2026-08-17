import {
    getAllInterviewReports,
    generateInterviewReport,
    getInterviewReportById,
    generateResumePdf
} from "../services/interview.api";

import {
    useContext,
    useEffect
} from "react";

import {
    InterviewContext
} from "../interview.context";

import {
    useParams
} from "react-router";


export const useInterview = () => {

    const context =
        useContext(InterviewContext);

    const { interviewId } =
        useParams();


    if (!context) {

        throw new Error(
            "useInterview must be used within an InterviewProvider"
        );

    }


    const {
        loading,
        setLoading,
        report,
        setReport,
        reports,
        setReports
    } = context;


    // ==========================================
    // GENERATE INTERVIEW REPORT
    // ==========================================

    const generateReport = async ({
        jobDescription,
        selfDescription,
        resumeFile
    }) => {

        setLoading(true);

        try {

            const response =
                await generateInterviewReport({
                    jobDescription,
                    selfDescription,
                    resumeFile
                });


            console.log(
                "========== GENERATE INTERVIEW RESPONSE =========="
            );

            console.log(response);


            if (!response?.interviewReport) {

                throw new Error(
                    response?.message ||
                    "Interview report was not returned by server."
                );

            }


            setReport(
                response.interviewReport
            );


            return response.interviewReport;


        } catch (error) {

            console.error(
                "========== GENERATE INTERVIEW ERROR =========="
            );

            console.error(error);


            // Backend ka actual error message
            const message =
                error?.response?.data?.message ||
                error?.response?.data?.error ||
                error?.message ||
                "Failed to generate interview report.";


            console.error(
                "SERVER MESSAGE:",
                message
            );


            throw new Error(message);


        } finally {

            setLoading(false);

        }

    };


    // ==========================================
    // GET REPORT BY ID
    // ==========================================

    const getReportById = async (id) => {

        setLoading(true);

        try {

            const response =
                await getInterviewReportById(id);


            console.log(
                "GET REPORT RESPONSE:",
                response
            );


            if (!response?.interviewReport) {

                setReport(null);

                return null;

            }


            setReport(
                response.interviewReport
            );


            return response.interviewReport;


        } catch (error) {

            console.error(
                "ERROR GETTING INTERVIEW REPORT:",
                error
            );


            setReport(null);

            return null;


        } finally {

            setLoading(false);

        }

    };


    // ==========================================
    // GET ALL REPORTS
    // ==========================================

    const getReports = async () => {

        setLoading(true);

        try {

            const response =
                await getAllInterviewReports();


            console.log(
                "GET ALL REPORTS RESPONSE:",
                response
            );


            const interviewReports =
                response?.interviewReports || [];


            setReports(
                interviewReports
            );


            return interviewReports;


        } catch (error) {

            console.error(
                "ERROR GETTING INTERVIEW REPORTS:",
                error
            );


            setReports([]);

            return [];


        } finally {

            setLoading(false);

        }

    };


    // ==========================================
    // GENERATE RESUME PDF
    // ==========================================

    const getResumePdf = async (
        interviewReportId
    ) => {

        setLoading(true);

        try {

            const response =
                await generateResumePdf({
                    interviewReportId
                });


            const url =
                window.URL.createObjectURL(
                    new Blob(
                        [response],
                        {
                            type: "application/pdf"
                        }
                    )
                );


            const link =
                document.createElement("a");


            link.href = url;


            link.download =
                `resume_${interviewReportId}.pdf`;


            document.body.appendChild(link);


            link.click();


            link.remove();


            window.URL.revokeObjectURL(url);


        } catch (error) {

            console.error(
                "ERROR GENERATING RESUME PDF:",
                error
            );


        } finally {

            setLoading(false);

        }

    };


    // ==========================================
    // LOAD REPORTS
    // ==========================================

    useEffect(() => {

        if (interviewId) {

            getReportById(
                interviewId
            );

        } else {

            getReports();

        }

    }, [interviewId]);


    // ==========================================
    // RETURN
    // ==========================================

    return {

        loading,

        report,

        reports: reports || [],

        generateReport,

        getReportById,

        getReports,

        getResumePdf

    };

};