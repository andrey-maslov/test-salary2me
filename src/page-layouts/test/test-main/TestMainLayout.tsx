import Head from 'next/head'
import { withTranslation } from '@i18n'
import Layout from '../../../components/layout/Layout'
import TestMainContent from './content/TestMainContent'
import { SITE_TITLE } from '../../../constants/constants'
import { YMInitializer } from 'react-yandex-metrika'

const TestMainLayout: React.FC<{ t: any }> = ({ t }) => {
    return (
        <>
            <Head>
                <title>{`${t('common:misc.psychological_test')} - ${SITE_TITLE}`}</title>
            </Head>
            <div className="page-test-main main">
                <YMInitializer accounts={[71453749]} />
                <Layout>
                    <TestMainContent />
                </Layout>
            </div>
        </>
    )
}

export default withTranslation('common')(TestMainLayout)
