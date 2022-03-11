import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
    alert: function(faIcon, tooltip, xtraClass = "") {
        return (
            <div className="tooltip" data-tip={tooltip}>
                <FontAwesomeIcon icon={faIcon} className={xtraClass} />
            </div>
        )
    },
    fetcher: (...args) => fetch(...args).then((res) => res.json())
}