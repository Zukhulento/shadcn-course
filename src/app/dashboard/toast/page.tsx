"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: (
              <ToastAction
                onClick={() => console.log("Try again!")}
                altText="Try again"
              >
                Try again
              </ToastAction>
            ),
          });
        }}
      >
        Show Try Again Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Destructive Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "success",
            title: "Success.",
            description: "There was a Success.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Success Toast
      </Button>
    </div>
  );
}
