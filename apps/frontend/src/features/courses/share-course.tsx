import * as React from "react";
import { CopyIcon } from "@radix-ui/react-icons";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Button,
} from "../../components/ui";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../../contexts/courses-context";

interface Props {
  url: string;
  children?: React.ReactNode;
}

export function ShareCourseModal({ url, children: trigger }: Props) {
  const navigate = useNavigate();
  const { dispatch } = useCourses();

  function handleRedirect() {
    dispatch({ type: "reset" });
    navigate("/dashboard");
  }

  return (
    <Dialog defaultOpen={true} onOpenChange={handleRedirect}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={url} readOnly />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild onClick={handleRedirect}>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
