import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function NotFound() {
    return (
        <Layout>
            <div>
                <h2>404</h2>
                <p>Page Not Found</p>
                <Link to="/">Go back to home</Link>
            </div>
        </Layout>
    )
}
