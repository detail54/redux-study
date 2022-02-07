import React, { useState } from 'react'

export interface IData {
  data: {
    people: [
      {
        name: string,
        age: number,
      }
    ]
  }
}

const Item: React.FC<{ name: string, age: number }> = ({ name, age }) => {
  return (
    <li>
      name: { name } / age: { age }
    </li>
  )
}

const url = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=timmy'

const TestMocking: React.FC = () => {

  const [data, setData] = useState<IData>()
  const [error, setError] = useState<string>('')

  const handleClick = () => {
    fetch(url)
      .then(( response ) => {
        return response.json()
      })
      .then(( json: IData ) => {
        setData(json)
      })
      .catch(( error: string ) => {
        setError(`Something Wrong: ${error}`)
      })
  }

  const handleClick2 = () => {
    fetch('/login')
      .then(( response ) => {
        return response.json()
      })
      .then(( json ) => {
        console.log(JSON.stringify(json))
      })
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기2</button>
      {data && (
        <ul>
          {data.data.people.map(( person ) => (
            <Item key={`${person.name}-${person.age}`} name={person.name} age={person.age} />
          ))}
        </ul>
      )}
    </div>
  )
};

export default TestMocking
