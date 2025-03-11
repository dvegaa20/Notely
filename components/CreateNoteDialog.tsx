"use client";

import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function CreateNoteDialog() {
  const [input, setInput] = useState("");
  const createNotebook = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/createNoteBook", {
        name: input,
      });
      return response.data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Please enter a name for your notebook.");
    }
    createNotebook.mutate(undefined, {
      onSuccess: () => {
        console.log("Notebook created");
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex border-dashed border-2 border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:translate-y-1 flex-row p-4">
          <Plus className="w-6 h-6 text-green-600" />
          <h2 className="font-semibold text-green-600 sm:mt-2">New Notebook</h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note Book</DialogTitle>
          You can create a new note by cliking the button bellow
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Name..."
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Cancel</Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
