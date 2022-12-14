import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppContext } from './src/context/Context'

// Contiene toda la APP
export default function App () {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <AppContext>
          <Main />
        </AppContext>
      </NativeRouter>
    </SafeAreaProvider>
  )
}