import { rest } from 'msw'
import { IData } from '../components/TestMocking'

export const handlers = [
  rest.get('/login', async(req, res, ctx) => {
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'John',
        lastName: 'Marverick',
      })
    )
  }),
  rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async(req, res, ctx) => {
    const id = req.url.searchParams.get('id')

    const originalResponse = await ctx.fetch(req)
    const originalResponseData: IData = await originalResponse.json()
    const findData: { name: string, age: number } = originalResponseData.data.people.find(
      (peopleData: { name: string, age: number }) => peopleData.name === id
    ) || { name: '', age: 0 }

    return res(
      ctx.json({
        "data": {
          "people" :
          [
            findData,
            {
              "name": "techoi",
              "age": 135
            },
          ]
        }
      })
    )
  })
]
