import { Routes, Route } from "react-router-dom";

import SigninForm from "./_auth/forms/SigninForm.tsx";
import SignupForm from "./_auth/forms/SignupForm.tsx";
import {
  Home,
  LikedPosts,
  UpdateProfile,
  Explore,
  PostDetails,
  CreatePost,
  EditPost,
  Profile,
  AllUsers,
  Saved,
} from "./_root/pages";
import "./globals.css";
import AuthLayout from "./_auth/AuthLayout.tsx";
import RootLayout from "./_root/RootLayout.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path={"/explore"} element={<Explore />} />
          <Route path={"/saved"} element={<Saved />} />
          <Route path={"/all-users"} element={<AllUsers />} />
          <Route path={"/create-post"} element={<CreatePost />} />
          <Route path={"/update-post/:id"} element={<EditPost />} />
          <Route path={"/update-post/:id"} element={<LikedPosts />} />
          <Route path={"/posts/:id"} element={<PostDetails />} />
          <Route path={"/profile/:id"} element={<Profile />} />
          <Route path={"/update-profile/:id"} element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
