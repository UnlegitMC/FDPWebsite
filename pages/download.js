import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import utils from "../components/utils"
import useSWR from 'swr'

export default function MainPage() {
    return (
        <div>
            <Head>
                <title>Download - FDPClient</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className="py-1 bg-base-200 min-h-screen">
                {ghInfo()}
            </section>
        </div>
    )
}

function ghInfo() {
    const { data, error } = useSWR('https://api.github.com/repos/UnlegitMC/FDPClient/actions/runs', utils.fetcher)

    if (error) return (
        <div className="flex items-center justify-center min-h-screen text-8xl">
            {utils.alert(faExclamationTriangle, "Failed to load :(", "text-error")}
        </div>
    )
    if (!data) return (
        <div className="flex items-center justify-center min-h-screen text-8xl">
            {utils.alert(faRotate, "Loading...", "animate-spin")}
        </div>
    )

    var runs = []
    data.workflow_runs.forEach((value) => {
        if(value.name == "build") {
            var json = {
                run_id: value.id,
                run_url: value.html_url,
                branch: value.head_branch,
                time: new Date(value.head_commit.timestamp).toLocaleString(),
                author: value.head_commit.author.name,
                author_url: value.triggering_actor.html_url,
                commit_id: value.head_commit.id,
                status: value.status,
                conclusion: value.conclusion,
                message: value.head_commit.message.split("\n")[0]
            }
            runs.push(json)
        }
    })

    function getRunStatus(run) {
        let tooltip = "status: " + run.status + ", conclusion: " + run.conclusion
        if(run.status != "completed") {
            return (
                <div className="tooltip" data-tip={tooltip}>
                    <a href={run.run_url}><FontAwesomeIcon icon={faStopwatch} className="text-warning"></FontAwesomeIcon></a>
                </div>
            )
        } else if (run.conclusion == "cancelled") {
            return (
                <div className="tooltip" data-tip={tooltip}>
                    <a href={run.run_url}><FontAwesomeIcon icon={faTrashCan} className="text-error"></FontAwesomeIcon></a>
                </div>
            )
        } else if(run.conclusion != "success") {
            return (
                <div className="tooltip" data-tip={tooltip}>
                    <a href={run.run_url}><FontAwesomeIcon icon={faExclamationTriangle} className="text-error"></FontAwesomeIcon></a>
                </div>
            )
        } else {
            return (
                <div className="tooltip" data-tip={tooltip}>
                    <a href={"https://nightly.link/UnlegitMC/FDPClient/actions/runs/" + run.run_id + "/FDPClient.zip"}><FontAwesomeIcon icon={faDownload} className="text-success"></FontAwesomeIcon></a>
                </div>
            )
        }
    }

    var tables = []
    runs.forEach((run) => {
        tables.push((
            <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    <a href={"https://github.com/UnlegitMC/FDPClient/tree/" + run.branch}>{run.branch}</a>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="tooltip" data-tip={"Workflow ID: " + run.run_id}>
                        <a href={"https://github.com/UnlegitMC/FDPClient/commit/" + run.commit_id}>{run.commit_id.substring(0, 7)}</a>
                    </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {run.time}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <a href={run.author_url}>{run.author}</a>
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {run.message}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {getRunStatus(run)}
                </td>
            </tr>
        ))
    })

    return (
        <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-primary-content w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-neutral">Downloads</h3>
                        </div>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                            <tr>
                                <th className="px-6 bg-base-50 text-base-content align-middle border border-solid border-base-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Branch
                                </th>
                                <th className="px-6 bg-base-50 text-base-content align-middle border border-solid border-base-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Commit
                                </th>
                                <th className="px-6 bg-base-50 text-base-content align-middle border border-solid border-base-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Date
                                </th>
                                <th className="px-6 bg-base-50 text-base-content align-middle border border-solid border-base-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Author
                                </th>
                                <th className="px-6 bg-base-50 text-base-content align-middle border border-solid border-base-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Message
                                </th>
                                <th className="px-6 bg-base-50 text-base-content align-middle border border-solid border-base-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Download
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {tables}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}