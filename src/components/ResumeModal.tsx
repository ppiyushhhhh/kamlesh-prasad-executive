import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Download, FileText } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RESUME_URL = "/kamlesh-resume.pdf";

const ResumeModal = ({ open, onOpenChange }: ResumeModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0">
        <DialogHeader className="flex flex-row items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-gold" />
            <DialogTitle className="text-lg font-display">Resume</DialogTitle>
          </div>
          <DialogDescription className="sr-only">View and download Kamlesh Prasad's resume</DialogDescription>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gold text-primary font-semibold text-sm hover:opacity-90 transition-opacity mr-8"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </DialogHeader>
        <div className="flex-1 min-h-0 h-full">
          <iframe
            src={RESUME_URL}
            title="Kamlesh Prasad Resume"
            className="w-full h-full border-0"
            style={{ minHeight: "calc(90vh - 73px)" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
