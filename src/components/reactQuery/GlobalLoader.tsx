import { useIsFetching } from 'react-query'

export default function GlobalLoadingIndicator() {
    const isFetching = useIsFetching()
    return isFetching ? (
        <div style={{color: 'white', background: 'black'}}>Queries are fetching in the background...</div>
    ) : null
}