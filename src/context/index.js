import React, {useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [mobileScreen, setMobileScreen] = React.useState(window.matchMedia("(max-width: 500px)").matches)
    const [IsLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState(null)
    const [localData, setLocalData] = React.useState(JSON.parse(localStorage.getItem('auth')))


    React.useEffect(() => {
        const handler = e => setMobileScreen( e.matches);
        window.matchMedia("(max-width: 500px)").addEventListener('change', handler);
        console.log(mobileScreen, 'Mobile')
       }, [mobileScreen]);

       return (
        <AppContext.Provider value={{mobileScreen, IsLoading, setIsLoading, errors, setErrors,
        localData, setLocalData}}>
            {children}
        </AppContext.Provider>
         )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }