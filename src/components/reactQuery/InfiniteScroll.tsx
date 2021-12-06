import React from "react";
import {QueryFunction, QueryKey, useInfiniteQuery} from "react-query";
import axios from "axios";

interface IProject{
    id:string;
    name:string;
}
interface IGroup{
    projects: IProject[]
}

export default function InfiniteScroll(){
    const fetchProjects = ({ pageParam = 0 }) =>
        axios.get('/api/projects?page=' + pageParam).then(res=>res.data)
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<any, any, IGroup, any>('projects', fetchProjects, {
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    })
    return status === 'loading' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) : (
        <>
            {data!.pages.map((group, i) => (
                <React.Fragment key={i}>
                    {group.projects.map((project) => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </React.Fragment>
            ))}
            <div>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    )
}