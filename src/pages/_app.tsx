import { Provider } from 'react-redux'
import App from 'next/app'
import '../assets/scss/index.scss'
import { appWithTranslation } from '@i18n'
import 'focus-visible/dist/focus-visible.js'
import { ToastProvider } from 'react-toast-notifications'
import { YMInitializer } from 'react-yandex-metrika'
import { useStore } from '../store'
import { SVGSource } from '../components/common/media/svgflag/SVGFlag'
import ScrollToTop from '../components/common/ScrollToTop'
import { getCookie } from '../helper/cookie'
import CookieConsent from '../components/layout/modals/cookie-consent/CookieConsent'

function MyApp({ Component, pageProps, isConsented }) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <ToastProvider autoDismiss autoDismissTimeout={5000} placement="bottom-left">
                <YMInitializer accounts={[71453749]} options={{ webvisor: true }} version="2" />
                <ScrollToTop />
                <Component {...pageProps} />
                <SVGSource />
                {!isConsented && <CookieConsent />}
            </ToastProvider>
        </Provider>
    )
}

MyApp.getInitialProps = async appContext => {
    const isConsented = Boolean(getCookie('cookie-consent', appContext.ctx.req))
    return { ...(await App.getInitialProps(appContext)), isConsented }
}

export default appWithTranslation(MyApp)
