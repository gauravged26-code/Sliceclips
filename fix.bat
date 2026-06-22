@echo off
echo Cleaning up and organizing project structure...

:: Create required directories if they don't exist
if not exist app mkdir app
if not exist components mkdir components
if not exist lib mkdir lib
if not exist app\login mkdir app\login
if not exist app\signup mkdir app\signup

:: Move root level pages into app router directory
if exist page.tsx move /Y page.tsx app\
if exist layout.tsx move /Y layout.tsx app\
if exist globals.css move /Y globals.css app\
if exist privacy.tsx move /Y privacy.tsx app\
if exist terms.tsx move /Y terms.tsx app\

:: Move utility files into lib folder
if exist store.ts move /Y store.ts lib\
if exist utils.ts move /Y utils.ts lib\
if exist firebase.ts move /Y firebase.ts lib\
if exist auth.ts move /Y auth.ts lib\
if exist ai.ts move /Y ai.ts lib\

:: Move components into components folder
if exist Navbar.tsx move /Y Navbar.tsx components\
if exist Footer.tsx move /Y Footer.tsx components\

:: Generate fallback routes for sub-pages if they aren't explicit files
if not exist app\login\page.tsx (
    echo export default function LoginPage^(^) { return ^<div style={{padding: '50px', fontFamily: 'sans-serif'}}^>^<h1^>Login^</h1^>^<p^>Login functionality placeholder.^</p^>^</div^>; } > app\login\page.tsx
)
if not exist app\signup\page.tsx (
    echo export default function SignupPage^(^) { return ^<div style={{padding: '50px', fontFamily: 'sans-serif'}}^>^<h1^>Sign Up^</h1^>^<p^>Registration functionality placeholder.^</p^>^</div^>; } > app\signup\page.tsx
)