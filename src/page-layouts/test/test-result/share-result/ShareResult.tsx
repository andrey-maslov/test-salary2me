import { withTranslation } from '@i18n'
import CodeBox from '../../../../components/common/code-box/CodeBox'
import style from './share.module.scss'
import SocialSharing from '../../../../components/common/buttons/social-sharing/SocialSharing'

interface IShareResult {
    encData: string
    isLoggedIn: boolean
    t: any
}

function ShareResult({ t, encData, isLoggedIn }: IShareResult) {
    const host = typeof window !== 'undefined' ? window.location.host : ''
    return (
        <div className="row">
            <div className="col-sm-6">
                <h4>{t('test:result_page.export_result_title')}</h4>
                <div className={style.desc}>{t('test:result_page.export_result_desc')}</div>
                <div className={style.code}>
                    <CodeBox
                        content={`https://${host}/test/result?encdata=${encData}`}
                        btnLabel={t('test:result_page.copy_link')}
                    />
                </div>
            </div>
            <div className="col-sm-6">
                <h4>{t('test:result_page.share_to_social')}</h4>
                <div className="result-share">
                    <SocialSharing url={`https://${host}/test/result?encdata=${encData}`} />
                </div>
            </div>
        </div>
    )
}

export default withTranslation(['test'])(ShareResult)
