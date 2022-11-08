import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import { SafeAreaProvider } from 'react-native-safe-area-context'


export default function App () {
  //logIn()
  return (
      <SafeAreaProvider>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </SafeAreaProvider>
  )
}