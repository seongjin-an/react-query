import React from "react";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {getTodos, postTodo} from "./api";
import GlobalLoadingIndicator from "./GlobalLoader";

export default function QuickStart(){
    const queryClient = useQueryClient();

    const query = useQuery("todos", getTodos);

    const mutation = useMutation(postTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        }
    })
    if(query.isLoading){
        return <div>Loading..</div>
    }
    if(query.error){
        return <div>"Error"</div>
    }
    return (
        <div>
            {/*{query.isFetching ? <div>Refresh</div> : null}*/}
            <GlobalLoadingIndicator/>
            <ul>
                {query.data.map((todo:any) => {
                    return<li key={todo.id}>{todo.title}</li>
                })}
            </ul>
            <button onClick={() => {
                mutation.mutate({
                    id: Date.now(),
                    title: "learn react-query"
                })
            }}>add</button>
        </div>
    )
}