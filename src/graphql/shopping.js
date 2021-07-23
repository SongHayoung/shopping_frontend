import gql from 'graphql-tag'

const getIteamsQuery = gql `query getItems($name: String!, $searchParam: ShoppingSearchParam) {
    getItems(name: $name, searchParam: $searchParam){
        data
  }
}
`

export {
    getIteamsQuery,
}