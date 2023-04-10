import { useContext, useEffect, useMemo, useState } from 'react'
import switchThemeIcon from '../assets/images/switch_theme_icon.png'
import { ThemeContext } from '../providers/ThemeContext'


export default function SwitchThemeButton() {
    
    const themeList = useMemo(() => [
        'themeOne',
        'themeTwo',
        'themeThree',
        'themeFour',
        'themeFive',
    ], [])

    const { theme, setTheme } = useContext(ThemeContext)
    
    const [themeIdx, setThemeIdx] = useState(0)

    useEffect(() => {

        const userTheme = localStorage.getItem('theme')
        if (userTheme) {
            setTheme(userTheme)
        } else {
            setTheme(themeList[0])
            localStorage.setItem('theme', themeList[0])
        }

        setThemeIdx(themeList.indexOf(theme) || 0);
    }, [theme, themeList, setTheme])

    const onThemeSwitch = () => {
        const nextThemeIdx = (themeIdx + 1) % themeList.length
        setThemeIdx(nextThemeIdx)
        setTheme(themeList[nextThemeIdx])
        localStorage.setItem('theme', themeList[nextThemeIdx])
    }

    return (
        <div className='absolute top-4 right-4' onClick={() => onThemeSwitch()} >
            <img className='w-12 hover:drop-shadow-lg' src={switchThemeIcon} alt='Boutton de changement de thème' />
        </div>
    )
}