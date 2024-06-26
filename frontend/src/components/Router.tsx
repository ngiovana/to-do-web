import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ActivityView } from '../pages/ActivityView'
import { LoginPage } from '../pages/LoginPage'
import { UserEdit } from '../pages/UserEdit'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/usuario/editar" element={<UserEdit />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ActivityView />} />
      </Route>
    </Routes>
  )
}
