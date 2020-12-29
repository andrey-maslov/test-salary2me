import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { i18n } from '@i18n'
import { fetchContent, fetchTerms } from '../../../../actions/actionCreator'

const LangSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const { language } = i18n

    useEffect(() => {
        dispatch(fetchTerms(language))
        dispatch(fetchContent(language))
    }, [dispatch, language])

    return <div className="lang" />
}

export default LangSwitcher
