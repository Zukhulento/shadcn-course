"use client"
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Info toast", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Info Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Success toast", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Error toast", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Error Toast
      </Button>
    </div>
  );
}
