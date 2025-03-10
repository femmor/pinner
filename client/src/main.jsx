import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, CreatePage, AuthPage, PostPage, UserProfilePage, SearchPage, MainLayout } from './pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<CreatePage />}/>
        <Route path='/pin/:id' element={<PostPage />}/>
        <Route path='/:username' element={<UserProfilePage />}/>
        <Route path='/search' element={<SearchPage />}/>
        </Route>
        <Route path='/auth' element={<AuthPage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
