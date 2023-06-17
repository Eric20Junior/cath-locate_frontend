import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utilis/PrivateRoute'

import { Header } from './components'
import { AdminDashboard, Layout, AdminLogin, Faq, CreateFaq, UpdateFaq } from './dashboard'
import { UserDashboard, UserLayout } from "./dashboard";
import { Homepage, CreateProfile, UpdateProfile, DeletePage, DetailPage, Login, Register, Churches, FAQ } from './pages';

function App() {
  return (
    <div className="w-full min-h-screen">
      <AuthProvider>
        {/* <Header /> */}
          <Routes>


              {/* User Dashboard Route */}
              <Route path="/" element={ <Homepage /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/faq" element={ <FAQ /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/dashboard" element={ <UserLayout /> }>
                  <Route path="/dashboard" element={ <UserDashboard /> } />

                  <Route path="/dashboard/churches" element={ 
           
                    <Churches />
           
                   } />
              </Route>

              {/* Admin Dashboard Routes */}
              <Route path="/admin/login" element={ 
              <AuthProvider>
                <AdminLogin /> 
              </AuthProvider> 
              } />
              
              <Route path="/admin" element={ <Layout /> }> 
                  <Route path="" element={ 
                    <AuthProvider>
                      <AdminDashboard /> 
                    </AuthProvider>

                    } />
                  <Route path="/admin/churches" element={ 
                  <PrivateRoute>
                    <Churches />
                  </PrivateRoute>
                   } />
                  <Route path="/admin/detailpage/:id" element={ <PrivateRoute>
                    <DetailPage />
                  </PrivateRoute>
                     } />
                  <Route path="/admin/delete/:id" element={ 
                              <PrivateRoute>
                                <DeletePage /> 
                              </PrivateRoute> 
                              } />

                  <Route path="/admin/faq/" element={ 
                     
                                    <Faq /> 
                              
                                  } />

                  <Route path="/admin/faq/create" element={ 
                                      
                                      <CreateFaq /> 
                                
                                    } />

                  <Route path="/admin/faq/update/:id" element={ 
                                                        
                                          <UpdateFaq /> 
                                      
                                          } />
              </Route>

              

              
                {/* users Route */}
              <Route path="/detailpage/:id" element={ 
                           
                                <DetailPage /> 
                             
                              } />

              <Route path="/create" element={ 
                <PrivateRoute>
                  <CreateProfile /> 
                </PrivateRoute> 
                } />

              <Route path="/update/:id" element={ 
                              <PrivateRoute>
                                <UpdateProfile /> 
                              </PrivateRoute> 
                              } />

              <Route path="/delete/:id" element={ 
                              <PrivateRoute>
                                <DeletePage /> 
                              </PrivateRoute> 
                              } />
          </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
