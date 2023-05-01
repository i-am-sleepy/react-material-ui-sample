import React from 'react'
import GenericTemplate from '../templates/GenericTemplate'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <>
      <Link to="./signup">Sign Up</Link>
      <GenericTemplate title="トップページ" />
    </>
  )
}

export default HomePage