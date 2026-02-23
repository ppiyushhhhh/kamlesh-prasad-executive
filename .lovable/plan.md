

## Add Resume Button with PDF Viewer

Add a dedicated "View Resume" button to the website that opens Kamlesh's uploaded PDF resume when clicked.

### What will change

1. **Hero Section** - Add a "View Resume" CTA button alongside the existing "View Experience" and "Connect on LinkedIn" buttons
2. **Navbar** - Add a "Resume" link in the navigation bar for quick access
3. **Resume Viewer** - When clicked, the resume opens in a dialog/modal overlay so visitors can view it without leaving the site, with an option to download

### How it works

- You upload the resume PDF, and it gets saved to the project's `public/` folder (e.g., `public/kamlesh-resume.pdf`)
- The "View Resume" button in the Hero section opens a full-screen modal with an embedded PDF viewer
- A download button inside the modal lets visitors save the PDF locally
- The Navbar gets a highlighted "Resume" button for visibility from any section

### Design

- The button will use a gold/accent style to stand out as a primary CTA
- The modal will be a near-fullscreen overlay with a clean header showing "Resume" title, a download icon button, and a close button
- The PDF is displayed using the browser's native PDF embed

### Technical Details

- **Files modified**: `HeroSection.tsx`, `Navbar.tsx`
- **New file**: `ResumeModal.tsx` - a reusable dialog component using the existing Radix Dialog primitive
- **Resume file**: stored in `public/kamlesh-resume.pdf` for direct access
- Uses existing `Dialog` component from `src/components/ui/dialog.tsx`
- Uses `lucide-react` icons (`FileText`, `Download`)

### Next step

After approving this plan, please upload the resume PDF so it can be added to the project.

