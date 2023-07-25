import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@/layouts/DefaultLayout'
import { MyEvents } from '@/pages/MyEvents'
import { FormEvent } from '@/pages/FormEvent'
import { PageNotFound } from '@/pages/PageNotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<MyEvents />} />
      </Route>
      <Route path="/formEvent/:id?" element={<FormEvent />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
