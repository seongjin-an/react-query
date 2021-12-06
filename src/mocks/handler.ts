import {rest} from 'msw'
const todos = [
    {
        id: `1`,
        title: `jimmy 1`
    },
    {
        id: `2`,
        title: `jimmy 2`
    },
    {
        id: `3`,
        title: `jimmy 3`
    },
    {
        id: `4`,
        title: `jimmy 4`
    },
    {
        id: `5`,
        title: `jimmy 5`
    },
]
export const handlers = [
    rest.get('/api/todos', async (req, res, ctx) => {
        return res(
            ctx.json(todos)
        )
    }),
    rest.post('/api/todo', async (req: {body: {todo: {id:string, title: string}}}, res, ctx) => {
        const { todo } = req.body;
        console.log('todo:', todo);
        todos.push(todo);
        return res(
            ctx.json(todos)
        )
    }),
    rest.get('/api/projects', async (req, res, ctx) => {
        const pageIndex = req.url.searchParams.get('page')
        return res(
            ctx.json({
                projects:[
                    {
                        id: `1 ${pageIndex}`,
                        name: `jimmy 1-${pageIndex}`
                    },
                    {
                        id: `2 ${pageIndex}`,
                        name: `jimmy 2-${pageIndex}`
                    },
                    {
                        id: `3 ${pageIndex}`,
                        name: `jimmy 3-${pageIndex}`
                    },
                    {
                        id: `4 ${pageIndex}`,
                        name: `jimmy 4-${pageIndex}`
                    },
                    {
                        id: `5 ${pageIndex}`,
                        name: `jimmy 5-${pageIndex}`
                    },
                ],
                hasMore: parseInt(pageIndex!) < 4,
                nextCursor: parseInt(pageIndex!) < 4? parseInt(pageIndex!)+1 : null
            })
        )
    })
]