import React from 'react'
import { TestMainLayout } from '../page-layouts'

function Index() {
    return <TestMainLayout />
}

Index.getInitialProps = async () => {
    return {
        namespacesRequired: ['test', 'questions', 'common']
    }
}

export default Index
