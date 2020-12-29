import { useSelector } from 'react-redux'
// import axios from 'axios'
import style from './top-bar.module.scss'
import PopoverMore from '../popover-more/PopoverMore'
import { globalStoreType } from '../../../../typings/types'
import { withTranslation } from "@i18n"
// import { saveAs } from 'file-saver'

interface TopBarProps {
    title: string
    userResult: [string, number][]
    details: string[]
    isLoggedIn: boolean
    fullTestResult: any
    t: any
}

const TopBar: React.FC<TopBarProps> = ({
    title,
    userResult,
    details,
    isLoggedIn,
    fullTestResult,
    t
}) => {
    const { email } = useSelector((state: globalStoreType) => state.user)
    const { dataForPDF } = useSelector((state: globalStoreType) => state.test)
    return (
        <div className={style.top}>
            <h4 className={style.title}>{title}</h4>
            <PopoverMore userResult={userResult} details={details} />
            {/*<button className={style.link} onClick={createAndDownloadPdf}>*/}
            {/*    <FaFilePdf />*/}
            {/*    {t('test:result_page.create_pdf')}*/}
            {/*</button>*/}
        </div>
    )

    // function createAndDownloadPdf() {
    //     const canvas = document.querySelector('canvas')
    //     let dataImg = ''
    //     if (canvas) {
    //         dataImg = canvas.toDataURL()
    //     }
    //
    //     axios
    //         .post(
    //             '/create-pdf',
    //             { radar: dataImg, testData: dataForPDF },
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 responseType: 'arraybuffer'
    //             }
    //         )
    //         .then(res => {
    //             const fileName = email.split('@')[0].replace('.', '-')
    //             const fileBlob = new Blob([res.data], { type: 'application/pdf' })
    //             saveAs(fileBlob, `psychological-profile.pdf`)
    //         })
    // }
}

export default withTranslation('test')(TopBar)
