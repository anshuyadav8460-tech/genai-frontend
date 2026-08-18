import {
    getAllInterviewReports,
    generateInterviewReport,
    getInterviewReportById,
    generateResumePdf
} from "../services/interview.api"

import { useContext, useEffect } from "react"
import { InterviewContext } from "../interview.context"
import { useParams } from "react-router"


export const useInterview = () => {

    const context = useContext(InterviewContext)
    const { interviewId } = useParams()

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
    }

    const {
        loading,
        setLoading,
        report,
        setReport,
        reports,
        setReports
    } = context


    // ─────────────────────────────────────────────
    // Generate Interview Report
    // ─────────────────────────────────────────────
    const generateReport = async ({
        jobDescription,
        selfDescription,
        resumeFile
    }) => {

        setLoading(true)

        try {

            const response = await generateInterviewReport({
                jobDescription,
                selfDescription,
                resumeFile
            })

            console.log("GENERATE REPORT RESPONSE:", response)

            if (!response) {
                console.error("No response received from backend")
                return null
            }

            if (!response.interviewReport) {
                console.error(
                    "interviewReport missing from response:",
                    response
                )
                return null
            }

            setReport(response.interviewReport)

            return response.interviewReport

        } catch (error) {

            console.error("GENERATE REPORT ERROR:", error)

            return null

        } finally {

            setLoading(false)

        }
    }


    // ─────────────────────────────────────────────
    // Get Report By ID
    // ─────────────────────────────────────────────
    const getReportById = async (interviewId) => {

        setLoading(true)

        try {

            const response = await getInterviewReportById(interviewId)

            console.log("REPORT BY ID RESPONSE:", response)

            if (!response) {
                console.error("No response received")
                return null
            }

            if (!response.interviewReport) {
                console.error(
                    "interviewReport missing from response:",
                    response
                )
                return null
            }

            setReport(response.interviewReport)

            return response.interviewReport

        } catch (error) {

            console.error("GET REPORT BY ID ERROR:", error)

            return null

        } finally {

            setLoading(false)

        }
    }


    // ─────────────────────────────────────────────
    // Get All Reports
    // ─────────────────────────────────────────────
    const getReports = async () => {

        setLoading(true)

        try {

            const response = await getAllInterviewReports()

            console.log("ALL REPORTS RESPONSE:", response)

            if (!response) {
                console.error("No response received")
                return null
            }

            if (!response.interviewReports) {
                console.error(
                    "interviewReports missing from response:",
                    response
                )
                return null
            }

            setReports(response.interviewReports)

            return response.interviewReports

        } catch (error) {

            console.error("GET REPORTS ERROR:", error)

            return null

        } finally {

            setLoading(false)

        }
    }


    // ─────────────────────────────────────────────
    // Generate Resume PDF
    // ─────────────────────────────────────────────
    const getResumePdf = async (interviewReportId) => {

        setLoading(true)

        try {

            const response = await generateResumePdf({
                interviewReportId
            })

            console.log("RESUME PDF RESPONSE:", response)

            const url = window.URL.createObjectURL(
                new Blob(
                    [response],
                    {
                        type: "application/pdf"
                    }
                )
            )

            const link = document.createElement("a")

            link.href = url

            link.setAttribute(
                "download",
                `resume_${interviewReportId}.pdf`
            )

            document.body.appendChild(link)

            link.click()

            link.remove()

            window.URL.revokeObjectURL(url)

        } catch (error) {

            console.error("GENERATE RESUME PDF ERROR:", error)

        } finally {

            setLoading(false)

        }
    }


    // ─────────────────────────────────────────────
    // Load Reports / Single Report
    // ─────────────────────────────────────────────
    useEffect(() => {

        if (interviewId) {

            getReportById(interviewId)

        } else {

            getReports()

        }

    }, [interviewId])


    return {
        loading,
        report,
        reports,
        generateReport,
        getReportById,
        getReports,
        getResumePdf
    }
}