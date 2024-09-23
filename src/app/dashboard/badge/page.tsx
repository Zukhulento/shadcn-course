import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge>Default</Badge>
      <Badge variant={"destructive"}>destructive</Badge>
      <Badge variant={"outline"}>outline</Badge>
      <Badge variant={"secondary"}>secondary</Badge>
      <Badge variant={"info"} capitalize>info</Badge>
      <Badge variant={"success"} capitalize>
        success
      </Badge>
    </div>
  );
}
