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
        setThemeIdx(themeList.indexOf(theme) || 0);
    }, [theme, themeList])

    const onThemeSwitch = () => {
        const nextThemeIdx = (themeIdx + 1) % themeList.length
        console.log("nextThemeIdx: ", nextThemeIdx)
        setThemeIdx(nextThemeIdx)
        setTheme(themeList[nextThemeIdx])
    }

    return (
        <div className='absolute top-4 right-4' onClick={() => onThemeSwitch()} >
            <img className='w-12 hover:drop-shadow-lg' src={switchThemeIcon} alt='Boutton de changement de thème' />
        </div>
    )
}