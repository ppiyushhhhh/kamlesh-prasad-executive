import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileText } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RESUME_PAGES = [
  "/kamlesh-resume-page-1.png",
  "/kamlesh-resume-page-2.png",
];

const ResumeModal = ({ open, onOpenChange }: ResumeModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[90vh] w-[95vw] max-w-5xl flex-col gap-0 p-0">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-border px-6 py-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-gold" />
            <DialogTitle className="text-lg font-display">Resume</DialogTitle>
          </div>
          <DialogDescription className="sr-only">View Kamlesh Prasad's resume</DialogDescription>
        </DialogHeader>

        <div
          className="flex-1 min-h-0 overflow-y-auto bg-muted/30 px-3 py-4 md:px-6 md:py-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 md:gap-6">
            {RESUME_PAGES.map((pageSrc, index) => (
              <div key={pageSrc} className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
                <img
                  src={pageSrc}
                  alt={`Kamlesh Prasad resume page ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
