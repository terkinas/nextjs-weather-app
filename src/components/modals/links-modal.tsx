"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Link from "next/link"

  import { FiMoreHorizontal, FiGithub, FiMail } from "react-icons/fi"
import SiteFooter from "../site-footer"

type Props = {}

const LinksModal = (props: Props) => {
  return (
    <Dialog>
    <DialogTrigger>
      <div className="w-10 h-10 bg-white text-blue-500 flex justify-center items-center rounded-full">
        <FiMoreHorizontal size={24} />
      </div>
    </DialogTrigger>
    <DialogContent className="w-11/12 sm:w-full rounded">
      <DialogHeader>
        <DialogTitle>Information</DialogTitle>
        <DialogDescription className="flex flex-col gap-3">
          <p className="text-xs">Open-source project in development. Contribute and improve it!</p>
          <Link className=" p-2 border border-1 border-slate-300 rounded flex items-center justify-center gap-2" href="https://github.com/terkinas/nextjs-weather-app"><FiGithub /> Github </Link>
          <Link className=" p-2 border border-1 border-slate-300 rounded flex items-center justify-center gap-2" href="/contact"><FiMail /> Contact </Link>
          
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>

  )
}

export default LinksModal